/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description,
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.author} about="About" contact="Contact" blog="Blog" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main style={{ minHeight: "100vh" }}>{children}</main>
      </div>
      <footer style={{ background: "rgba(50,50,50,0.5", textAlign: "center", minHeight: "3rem" }}>
        <h3>© {new Date().getFullYear()}, Built by <Link to="/" style={{textDecoration: "none"}}>{data.site.siteMetadata.author}</Link></h3>
      </footer>
    </>
  )
}

Layout.propTypes = { 
  children: PropTypes.node.isRequired,
}

export default Layout
