import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import { Card, Icon, Tag } from "antd"

import styled from "./postcard.modules.css"

const { Meta } = Card

class PostCard extends Component {
  render() {
    const { node } = this.props;
    const tags = node.frontmatter.tags;

    return (
      <div key={node.id}>
        <Card
          style={{width: 650}}
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          title={node.frontmatter.title}
        >
          <Link to={node.fields.slug}>
            <Meta
              description={node.excerpt}
            >
            </Meta>
          </Link>
          <br/>
          <div className={styled.calendar}>
            <Icon type="calendar" className={styled.calendar} />
            {node.frontmatter.date}
            <br/>
          </div>

          <Icon type="tags" />
          {tags.map((tag) => {
            return(
              <Link to={`/tags/${(tag)}`}>
                <Tag>{tag}</Tag>
              </Link>
            )
          })}
        </Card>
      </div>
    )
  }
}

export default PostCard