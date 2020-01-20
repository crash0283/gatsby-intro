/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import { Auth0Provider } from "./src/auth0/auth"

export const wrapRootElement = ({ element }) => {
  //`https://unruffled-darwin-677325.netlify.com/blog`
  //`2feEfVzpSLhghw5BhCuVowmfc6SBh4d5`
  //`dev-pnkhb30m.auth0.com`
  return (
    <Auth0Provider
      domain={process.env.AUTH_DOMAIN}
      client_id={process.env.AUTH_CLIENT_ID}
      redirect_uri={process.env.AUTH_REDIRECT_URL}
    >
      {element}
    </Auth0Provider>
  )
}
