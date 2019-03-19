
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
    // edgesはすべてのmarkdown記事を持っている(フィルタリングしていない)
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
    createMultiListPages(edges, "/", createPage);

    // tagリストページの追加
    const tagSet = new Set();
    edges.forEach(edge => {
      if (edge.node.frontmatter.tags){
        edge.node.frontmatter.tags.map((tag) => tagSet.add(tag));
      }
    })
    const tagArray = Array.from(tagSet);
    tagArray.map((tag) =>{
      createTagPages(tag, graphql, createPage);
    });
  })
}


const createMultiListPages = (edges, rootUrl, createPage) => {
const total_pages = Math.ceil(edges.length / config.postNumberPerPage);
console.log("total pages = " + total_pages);
for (i = 1; i <= total_pages; i++){
  var urlIndex = i;
  console.log(rootUrl + urlIndex);
  createPage({
    path: rootUrl + urlIndex,
    component: path.resolve(`./src/templates/blog-pages.jsx`),
    context:{
      index: i,
      edges,
      rootUrl: rootUrl
    }
  })
}
}

const createTagPages = (tag, graphql, createPage) => {
  graphql(`
  {
    allMarkdownRemark(
      limit: 1000
      sort: { fields:frontmatter___date, order:DESC }
      filter: { frontmatter: { tags: { in: ["${tag}"] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
  }`
  ).then(result => {
    if (result.data.allMarkdownRemark == null){
      console.log(tag + " is not found.");
      return;
    }

    const edges = result.data.allMarkdownRemark.edges;
    console.log(edges.length + " posts is tagged as " + tag);

    createMultiListPages(edges, config.tagPagesRoot + tag + "/", createPage);
  })
}