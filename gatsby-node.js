const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
    const { createNode, createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.
    if(node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath,".md")

        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
    
  }

  exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPost = path.resolve(`src/templates/blog-post.js`)

    return graphql(`
    query loadPagesQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `/blog/${edge.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: edge.node.fields.slug
        },
      })
    })
  })
  }
