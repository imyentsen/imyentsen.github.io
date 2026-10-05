import { graphql, useStaticQuery } from "gatsby"

// Social previews (Open Graph, X/Twitter) need absolute image URLs, so
// relative paths are prefixed with siteMetadata.siteUrl from gatsby-config.js.
export default function useAbsoluteUrl() {
  const { site } = useStaticQuery(graphql`
    query SiteUrl {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  const base = site.siteMetadata.siteUrl.replace(/\/$/, "")
  return path => (/^https?:\/\//.test(path) ? path : `${base}${path.startsWith("/") ? "" : "/"}${path}`)
}
