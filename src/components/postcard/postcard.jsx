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
        <Link to={node.fields.slug}>
          <Card
            className={styled.postcard}
            cover={<img alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />}
            title={node.frontmatter.title}
          >
            <h2>
              {node.frontmatter.title}
              {node.frontmatter.title == "" && "No Title Article"}
            </h2>
            <div className={styled.calendar}>
              <Icon type="calendar" className={styled.calendar} />
                {node.frontmatter.date}
                {node.frontmatter.date == null && "unkwnon date"}
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
            <hr/>
            <br/>
            <p>{node.excerpt}</p>
            <br/>


          </Card>
        </Link>
        </Row>
      </div>
    )
  }
}

export default PostCard