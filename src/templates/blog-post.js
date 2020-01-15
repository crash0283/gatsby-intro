import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES,BLOCKS } from "@contentful/rich-text-types"
import {Disqus} from "gatsby-plugin-disqus"

import Layout from "../components/layout"

export const data = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
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
  let disqusConfig = {
    url: `http://localhost:8000/${props.data.contentfulBlogPost.slug}`,
    identifier: props.data.contentfulBlogPost.id,
    title: props.data.contentfulBlogPost.title,
  }
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
        if(node.data.uri.includes("youtube")) {
          let url = node.data.uri.replace("watch?v=","embed/")
          return <iframe width="560" height="315" src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img src={url} alt={alt} />
      }
    }
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
        {
          documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )
        }
        <Disqus config={disqusConfig} />
        <Link to="/blog">&larr;Back to Blog</Link>
      </div>
    </Layout>
  )
}

export default BlogPost
