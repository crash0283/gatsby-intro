import React from "react"
import { Link } from "gatsby"
// import Header from "../components/header"
// import Footer from "../components/footer"
import Layout from "../components/layout"

const Index = () => {
  return (
      <Layout>
        <h1>Hello</h1>
        <h2>I'm Chris, a Web Development Professor.</h2>
        <p>Need an instructor? <Link to="/contact">Click Here!</Link></p>
      </Layout>
  )
}

export default Index