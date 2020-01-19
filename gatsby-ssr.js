/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from "react"
import { Auth0Provider } from "./src/auth0/auth"

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={`dev-pnkhb30m.auth0.com`}
      client_id={`2feEfVzpSLhghw5BhCuVowmfc6SBh4d5`}
      redirect_uri={`https://unruffled-darwin-677325.netlify.com/blog`}
    >
      {element}
    </Auth0Provider>
  )
}
