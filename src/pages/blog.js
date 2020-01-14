import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/seo"

const Blog = () => {

  const data = useStaticQuery(graphql`
    {
      allWordpressPost {
        edges {
          node {
            date(fromNow: true)
            slug
            title
            excerpt
            content
            author {
              name
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      {
          data.allWordpressPost.edges.map((post) => {
              return (
                <>
                <h2>{post.node.title}</h2>
                <p style={{fontWeight: 200, fontSize: "0.8rem"}}>Published {post.node.date}</p>
                <p style={{fontWeight: 300, fontSize: "0.9rem"}}>Written by {post.node.author.name}</p>
                <Link to={`/blog/${post.node.slug}`}>Read More...</Link>
                <hr style={{height: "3px"}} />
                </>
              )
            })
      }
    </Layout>
  )
}

export default Blog
