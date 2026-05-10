/**
 * Detect current language from URL pathname.
 * /zh/... → 'zh'
 * anything else → 'en'
 *
 * Safe for SSR (returns 'en' when window is not available).
 */
export function useLang() {
  if (typeof window === "undefined") return "en"
  return window.location.pathname.startsWith("/zh") ? "zh" : "en"
}

/**
 * Given the current pathname, return the pathname for the other language.
 */
export function getAlternatePath(pathname) {
  if (pathname.startsWith("/zh")) {
    // zh → en: strip /zh prefix
    const stripped = pathname.replace(/^\/zh/, "")
    return stripped || "/"
  } else {
    // en → zh: add /zh prefix
    return "/zh" + (pathname === "/" ? "" : pathname)
  }
}

/**
 * Given a base slug (e.g. /post-name) and a lang, return the full path.
 */
export function slugWithLang(slug, lang) {
  return lang === "zh" ? "/zh" + slug : slug
}
