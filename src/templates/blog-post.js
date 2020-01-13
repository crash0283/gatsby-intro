import React from "react"
import { graphql,Link } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
query($slug: String!)
{
  markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
        title
        date
        author
    }
    html
  }
}
`

const BlogPost = (props) => {
   
    return (
        <Layout>
            
                <>
                <h2>{props.data.markdownRemark.frontmatter.title}</h2>
                <p style={{fontWeight: 200, fontSize: "0.8rem"}}>Published: {props.data.markdownRemark.frontmatter.date}</p>
                <p style={{fontWeight: 300, fontSize: "0.9rem"}}>Written by {props.data.markdownRemark.frontmatter.author}</p>
                <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
                <Link to="/blog">Back to Blog</Link>
                </>
            
        </Layout>
    )
}

export default BlogPost