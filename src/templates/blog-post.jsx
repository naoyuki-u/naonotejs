import React from "react"
import {graphql} from "gatsby"
import BlogLayout from "../components/layout_blog"
import SEO from "../components/seo"

export default class BlogPostTemplate extends React.Component{
  render() {
    const {data} = this.props;
    const post = data.markdownRemark;
    const { slug } = this.props.pageContext;

    return (
      <div>
        <SEO
          postNode={post}
          isPost={true}
          slug={slug}
        />
        <BlogLayout
          post={post}
        />
      </div>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
        category
        chapter
        tags
      }
      headings{
        value
        depth
      }
    }
  }
`
