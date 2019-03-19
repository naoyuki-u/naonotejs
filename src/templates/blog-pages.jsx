import React from "react";
// import Helmet from "react-helmet";
import MainLayout from "../components/main_layout"
import PostList from "../components/postlist"

export default class BlogPagesTemplate extends React.Component {
  render() {
    const { index, edges } = this.props.pageContext;

    return (
      <MainLayout>
        <div>
          <PostList edges={edges} index={index}></PostList>
        </div>
      </MainLayout>
    );
  }
}

// export const pageQuery = graphql`
//   query TagPage($tag: String) {
//     allMarkdownRemark(
//       limit: 1000
//       sort: { fields: [fields___date], order: DESC }
//       filter: { frontmatter: { tags: { in: [$tag] } } }
//     ) {
//       totalCount
//       edges {
//         node {
//           fields {
//             slug
//             date
//           }
//           excerpt
//           timeToRead
//           frontmatter {
//             title
//             tags
//             cover
//             date
//           }
//         }
//       }
//     }
//   }
// `;
