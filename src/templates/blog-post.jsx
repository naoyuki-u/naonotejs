import React from "react"
import {graphql} from "gatsby"
import BlogLayout from "../components/layout_blog"

export default class BlogPostTemplate extends React.Component{
  render() {
    const {data} = this.props;
    const post = data.markdownRemark;
    return (
      <BlogLayout
        title={post.frontmatter.title}
        body={post.html}
      />
    )
  }
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