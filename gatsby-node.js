const path = require("path")

  exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPost = path.resolve(`src/templates/blog-post.js`)

    return graphql(`
    {
      allWordpressPost(sort: {fields: date, order: DESC}) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allWordpressPost.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `/blog/${edge.node.slug}`,
        component: blogPost,
        context: {
          slug: edge.node.slug
        },
      })
    })
  })
  }
