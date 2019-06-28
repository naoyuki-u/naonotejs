
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
              id
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
        component: path.resolve(`./src/templates/blog-post.jsx`),
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

    // categoryリストページの追加
    const cateSet = new Set();
    edges.forEach(edge => {
      if (edge.node.frontmatter.category){
        cateSet.add(edge.node.frontmatter.category);
      }
    })
    const cateArray = Array.from(cateSet);
    cateArray.map((cate) =>{
      createCatePages(cate, graphql, createPage);
    });
  })
}


const createMultiListPages = (edges, rootUrl, createPage) => {
const total_pages = Math.ceil(edges.length / config.postNumberPerPage);
for (i = 1; i <= total_pages; i++){
  var urlIndex = i;
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
  // 引数で指定したtagを持つ記事のみを抽出するために再度クエリを投げる
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
          id
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

    createMultiListPages(edges, config.tagPagesRoot + "/" + tag + "/", createPage);
  })
}

const createCatePages = (cate, graphql, createPage) => {
  graphql(`
  {
    allMarkdownRemark(
      limit: 1000
      sort: { fields:frontmatter___chapter, order: ASC }
      filter: { frontmatter: { category: { in: ["${cate}"] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
            chapter
            date
          }
          fields{
            slug
          }
        }
      }
    }
  }`
  ).then(result => {
    if (result.data.allMarkdownRemark == null){
      console.log(cate + " is not found.");
      return;
    }

    const edges = result.data.allMarkdownRemark.edges;
    createPage({
      path: config.categoryPagesRoot + "/" + cate,
      component: path.resolve(`./src/templates/category-pages.jsx`),
      context:{
        edges,
        category: cate
      }
    })
  })
}