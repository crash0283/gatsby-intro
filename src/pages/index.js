import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = () => {
  return (
      <Layout>
        <SEO title="Home" />
        <h1>Hello</h1>
        <h2>I'm Chris, a Web Development Professor.</h2>
        <p>Need an instructor? <Link to="/contact">Click Here!</Link></p>
      </Layout>
  )
}

export default Index