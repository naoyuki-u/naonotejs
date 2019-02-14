import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout_blog"

export default ({data}) => {
  const post = data.markdownRemark
    return (
    <Layout>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}/>
        <div>Hello blog post</div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`