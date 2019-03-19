
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const config = require('./src/utils/site_config')

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({node, getNode, basePath: `pages`})
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
}


exports.createPages = ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const {createPage} = actions
    return graphql(`
      {
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title,
                date,
                tags,
                category
              }
              fields{
                  slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    // 個別の記事ページを作成
    const edges = result.data.allMarkdownRemark.edges;
    edges.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context:{
            slug: node.fields.slug
        }
      })
    })

    // 記事リストページの作成
    const total_pages = Math.ceil(edges.length / config.postNumberPerPage);
    console.log("total pages = ");
    console.log(total_pages);
    for (index = 1; index <= total_pages; index++){
    createPage({
        path: "pages/" + index,
        component: path.resolve(`./src/templates/blog-pages.jsx`),
        context:{
          index,
          edges
        }
      })
    }
  })
}