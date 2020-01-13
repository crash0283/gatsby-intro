import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"

const Contact = () => {
    return (
        <Layout>
            <h1>Contact Us</h1>
            <p>This page is the contact page.</p>
            <Link to="/">Go Home</Link>
        </Layout>
    )
}

export default Contact