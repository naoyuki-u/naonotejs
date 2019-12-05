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
          title={post.frontmatter.title}
          body={post.html}
          headings={post.headings}
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
      }
      headings{
        value
        depth
      }
    }
  }
`
