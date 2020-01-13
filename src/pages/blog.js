import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              date
              title
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      {
          data.allMarkdownRemark.edges.map((post) => {
              return (
                <>
                <h2>{post.node.frontmatter.title}</h2>
                <p style={{fontWeight: 200, fontSize: "0.8rem"}}>Published: {post.node.frontmatter.date}</p>
                <p style={{fontWeight: 300, fontSize: "0.9rem"}}>Written by {post.node.frontmatter.author}</p>
                <h4 style={{fontWeight: 500}}>{post.node.excerpt}...</h4>
                <Link to={`/blog/${post.node.fields.slug}`}>Read More...</Link>
                <hr style={{height: "3px"}} />
                </>
              )
            })
      }
    </Layout>
  )
}

export default Blog
