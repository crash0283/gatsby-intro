import React from "react"
import { graphql, Link } from "gatsby"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!){
    wordpressPost(slug: { eq: $slug }) {
      id
      content
      date(fromNow: true)
      slug
      title
      author {
        name
      }
    }
  }
`

const BlogPost = props => {

  let disqusConfig = {
    url: `http://localhost:8000/blog/${props.data.wordpressPost.slug}`,
    identifier: props.data.wordpressPost.id,
    title: props.data.wordpressPost.title,
  }

  return (
    <Layout>
      <div>
        <h2>{props.data.wordpressPost.title}</h2>
        <p style={{ fontWeight: 200, fontSize: "0.8rem" }}>
          Published {props.data.wordpressPost.date}
        </p>
        <p style={{ fontWeight: 300, fontSize: "0.9rem" }}>
          Written by {props.data.wordpressPost.author.name}
        </p>
        <div dangerouslySetInnerHTML={{__html: props.data.wordpressPost.content}}></div>
        <CommentCount config={disqusConfig} />
        <Disqus config={disqusConfig} />
        <Link to="/blog">Back to Blog</Link>
      </div>
    </Layout>
  )
}

export default BlogPost
