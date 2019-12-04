import React, { Component } from "react"
import { /*graphql,*/ Link } from "gatsby"
import { Card, Icon, Tag, Row } from "antd"

import styled from "./postcard.module.css"

const { Meta } = Card

class PostCard extends Component {
  render() {
    const { node } = this.props;
    const tags = node.frontmatter.tags;

    return (
      <div key={node.id}>
        <Row>
        <Card
          className={styled.postcard}
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

          <div className={styled.taglist}>
            <Icon type="tags" className={styled.taglist} />
            {tags != null
             &&
             tags.map((tag) => {
              return(
                <Link to={`/tags/${(tag)}/1`} key={tag}>
                  <Tag className={styled.tag}>{tag}</Tag>
                </Link>
              )
            })}
          </div>
        </Card>
        </Row>
      </div>
    )
  }
}

export default PostCard