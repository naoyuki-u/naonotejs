import React, {Component, /*Children*/} from "react"
import { Card, Divider, Icon } from "antd";

import MainLayout from "../main_layout"
import PostTag from "../post_tag"
import TOC from "../toc"

import "../../styles/codeblock.scss"
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'katex/dist/katex.min.css'

import styled from "./layout_blog.module.css";

class LayoutBlog extends Component {
  render() {
    const {post} = this.props
    return(
    <div>
      <MainLayout headings={post.headings} is_article={true}>
        <Card>
          <h1 className={styled.post_title}>
            {post.frontmatter.title}
          </h1>

          <Icon type="calendar" className={styled.icon_calendar}/>
          <span className={styled.post_header}>
            {post.frontmatter.date}
            {post.frontmatter.date == null && "unkwnon date"}
          </span>
          <br/>

          <Icon type="tags" className={styled.icon_tags}/>
          {
            post.frontmatter.tags.map(
              (tag) => <PostTag className={styled.post_tags}
                                tagname={tag}>
                          <span className={styled.post_header}>{tag}</span>
                        </PostTag>)
          }
          <br/>

          <Divider/>
          <div dangerouslySetInnerHTML={{ __html: post.html }}/>
        </Card>
      </MainLayout>
    </div>
    )
  }
}

export default LayoutBlog;
