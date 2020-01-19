import React,{useEffect, useState} from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import SEO from "../components/seo"
import { useAuth0 } from "../auth0/auth"

const Blog = () => {

  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()

  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(sort: {fields: date, order: DESC}) {
        edges {
          node {
            author
            date(fromNow: true)
            slug
            title
          }
        }
      }
    }
  `)
  
    return (
      <Layout>
      {
        !isAuthenticated && (
          <button onClick={() => loginWithRedirect()}>Log in</button>
        )
      }
      {
        isAuthenticated && (
          <>
          <SEO title="Blog" />
          <h1>Blog</h1>

          <div>
          {
              data.allContentfulBlogPost.edges.map((post,i) => {
                  return (
                    <div key={i}>
                    <h2>{post.node.title}</h2>
                    <p style={{fontWeight: 200, fontSize: "0.8rem"}}>Published {post.node.date}</p>
                    <p style={{fontWeight: 300, fontSize: "0.9rem"}}>Written by {post.node.author}</p>
                    <Link to={`/blog/${post.node.slug}`}>Read More...</Link>
                    <hr style={{height: "3px"}} />
                    </div>
                  )
                })
          }
          </div>
          <button onClick={() => logout()}>Sign-Out</button>
          </>
        )
      }
      </Layout>
    )
  }

export default Blog
