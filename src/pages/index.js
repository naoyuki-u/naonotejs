import React from "react"
import { graphql, /*Link*/ } from "gatsby"
import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
// import { Card, Icon, Tag } from "antd"
import Layout from "../components/main_layout"
import PostList from "../components/postlist"

export default ({data}) => {
  return (
    <Layout>
      <div>
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
        `}
      >
        Amazing Pandas Eating Things
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      <PostList edges={data.allMarkdownRemark.edges} index="1"></PostList>
    </div>
  </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort:{fields:frontmatter___date, order:DESC})
    {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`