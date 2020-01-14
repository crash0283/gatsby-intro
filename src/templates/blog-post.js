import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

export const data = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      author
      date(fromNow: true)
      slug
      title
      body {
        json
      }
    }
  }
`

const BlogPost = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img src={url} alt={alt} />
      },
    },
  }

  return (
    <Layout>
      <div>
        <h2>{props.data.contentfulBlogPost.title}</h2>
        <p style={{ fontWeight: 200, fontSize: "0.8rem" }}>
          Published {props.data.contentfulBlogPost.date}
        </p>
        <p style={{ fontWeight: 300, fontSize: "0.9rem" }}>
          Written by {props.data.contentfulBlogPost.author}
        </p>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
        <Link to="/blog">Back to Blog</Link>
      </div>
    </Layout>
  )
}

export default BlogPost
