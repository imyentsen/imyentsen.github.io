/**
 * Password lock for the two Aize case studies.
 *
 * Static files are served straight from the assets binding. Only the paths
 * listed under `run_worker_first` in wrangler.toml reach this script, so the
 * rest of the site never runs any code.
 *
 * The password lives in the Worker secret CASE_STUDY_PASSWORD (set it in the
 * Cloudflare dashboard, never in this repo). Changing the secret logs every
 * visitor out, because the cookie is a signature derived from it.
 */

const COOKIE_NAME = "case_study_access"
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30 // 30 days

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const isPageData = url.pathname.startsWith("/page-data/")
    const isZh = url.pathname.startsWith("/zh/") || url.pathname.startsWith("/page-data/zh/")

    if (!env.CASE_STUDY_PASSWORD) {
      return new Response("Password protection is not configured.", {
        status: 503,
        headers: { "Cache-Control": "no-store" },
      })
    }

    const token = await sign(env.CASE_STUDY_PASSWORD)

    // Password form submission
    if (request.method === "POST" && !isPageData) {
      const form = await request.formData()
      const attempt = String(form.get("password") || "")
      if (await sameSecret(attempt, env.CASE_STUDY_PASSWORD)) {
        return new Response(null, {
          status: 303,
          headers: {
            Location: url.pathname + url.search,
            "Set-Cookie": `${COOKIE_NAME}=${token}; Max-Age=${COOKIE_MAX_AGE}; Path=/; HttpOnly; Secure; SameSite=Lax`,
            "Cache-Control": "no-store",
          },
        })
      }
      return loginPage(isZh, true)
    }

    if (readCookie(request, COOKIE_NAME) === token) {
      const response = await env.ASSETS.fetch(request)
      const headers = new Headers(response.headers)
      headers.set("Cache-Control", "private, no-store")
      headers.set("X-Robots-Tag", "noindex")
      return new Response(response.body, { status: response.status, headers })
    }

    // Gatsby fetches page-data in the background during client-side
    // navigation. A failed fetch makes it fall back to a full page load,
    // which lands on the password form below.
    if (isPageData) {
      return new Response("Unauthorized", {
        status: 401,
        headers: { "Cache-Control": "no-store" },
      })
    }

    return loginPage(isZh, false)
  },
}

async function sign(secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  )
  const mac = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode("case-study-access-v1"))
  return [...new Uint8Array(mac)].map(b => b.toString(16).padStart(2, "0")).join("")
}

// Compare digests so the check takes the same time whatever the input
async function sameSecret(a, b) {
  const [da, db] = await Promise.all(
    [a, b].map(s => crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)))
  )
  const x = new Uint8Array(da)
  const y = new Uint8Array(db)
  let diff = 0
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i]
  return diff === 0
}

function readCookie(request, name) {
  const header = request.headers.get("Cookie") || ""
  for (const part of header.split(";")) {
    const [k, ...v] = part.trim().split("=")
    if (k === name) return v.join("=")
  }
  return null
}

function loginPage(isZh, failed) {
  const t = isZh
    ? {
        lang: "zh-Hant",
        title: "需要密碼",
        heading: "這篇案例需要密碼才能閱讀",
        label: "密碼",
        button: "進入",
        error: "密碼不正確，請再試一次。",
        back: "回到首頁",
        home: "/zh/",
      }
    : {
        lang: "en",
        title: "Password required",
        heading: "This case study is password protected",
        label: "Password",
        button: "View case study",
        error: "That password is not right. Please try again.",
        back: "Back to home",
        home: "/",
      }

  const html = `<!doctype html>
<html lang="${t.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${t.title}</title>
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body {
    margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
    padding: 24px; background: #fff; color: #000;
    font-family: "DM Sans", "Noto Sans TC", system-ui, -apple-system, sans-serif;
  }
  main { width: 100%; max-width: 360px; }
  h1 { font-size: 20px; font-weight: 500; line-height: 1.4; margin: 0 0 24px; }
  label { display: block; font-size: 14px; color: #555; margin-bottom: 8px; }
  input {
    width: 100%; font: inherit; font-size: 16px; padding: 10px 12px;
    border: 1px solid #ccc; border-radius: 4px; background: #fff; color: #000;
  }
  input:focus { outline: 2px solid #000; outline-offset: 1px; border-color: #000; }
  button {
    margin-top: 16px; width: 100%; font: inherit; font-size: 16px; padding: 10px 12px;
    border: 0; border-radius: 4px; background: #000; color: #fff; cursor: pointer;
  }
  button:hover { opacity: 0.8; }
  .error { color: #b00020; font-size: 14px; margin: 12px 0 0; }
  a { display: inline-block; margin-top: 24px; color: #767676; font-size: 14px; }
</style>
</head>
<body>
<main>
  <h1>${t.heading}</h1>
  <form method="post">
    <label for="password">${t.label}</label>
    <input id="password" name="password" type="password" autocomplete="current-password" required autofocus${failed ? ' aria-describedby="error" aria-invalid="true"' : ""}>
    ${failed ? `<p class="error" id="error" role="alert">${t.error}</p>` : ""}
    <button type="submit">${t.button}</button>
  </form>
  <a href="${t.home}">${t.back}</a>
</main>
</body>
</html>`

  return new Response(html, {
    status: failed ? 401 : 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
    },
  })
}
