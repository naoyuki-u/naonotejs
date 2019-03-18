import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import { Card, Icon, Tag } from "antd"
import PostCard from "../postcard"

class PostList extends Component {
  render() {
    const { edges } = this.props;
    return (
      <div>
        {
          edges.map(({ node }) => (
            <PostCard node={node}>
            </PostCard>
          ))
        }
      </div>
    )
  }
}

export default PostList
