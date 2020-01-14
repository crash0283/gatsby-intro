const path = require("path")

// exports.onCreateNode = ({ node, actions }) => {
//     const { createNode, createNodeField } = actions
//     // Transform the new node here and create a new node or
//     // create a new node field.
//     if(node.internal.type === "MarkdownRemark") {
//         const slug = path.basename(node.fileAbsolutePath,".md")

//         createNodeField({
//             node,
//             name: "slug",
//             value: slug
//         })
//     }
    
//   }

  exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPost = path.resolve(`src/templates/blog-post.js`)

    return graphql(`
    {
      allContentfulBlogPost(sort: {fields: date, order: DESC}) {
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
    result.data.allContentfulBlogPost.edges.forEach(edge => {
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
