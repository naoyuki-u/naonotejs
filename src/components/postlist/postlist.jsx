import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import { Pagination } from "antd"
import PostCard from "../postcard"

class PostList extends Component {
  render() {
    const { edges, index } = this.props;
    const total_post = edges.length;
    return (
      <StaticQuery
        query={graphql`
          query{
            site{
              siteMetadata{
                postNumberPerPage
              }
            }
          }
        `}
        render={data => {
          const total_page = Math.ceil(
                        total_post / data.site.siteMetadata.postNumberPerPage);
          return (
            <div>
              {
                edges.map(({ node }) => (
                  <PostCard node={node}>
                  </PostCard>
                ))
              }
              <Pagination total={total_page * 10} defaultCurrent={Number(index)} />
            </div>
          )
        }}
      />
    )
  }
}

export default PostList
