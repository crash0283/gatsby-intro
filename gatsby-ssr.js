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
      domain={process.env.GATSBY_AUTH_DOMAIN}
      client_id={process.env.GATSBY_AUTH_CLIENT_ID}
      redirect_uri={process.env.GATSBY_AUTH_REDIRECT_URL}
    >
      {element}
    </Auth0Provider>
  )
}
