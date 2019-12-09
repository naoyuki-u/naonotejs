import React, {Component, /*Children*/} from "react"
import { Card, Divider, Icon } from "antd";

import MainLayout from "../main_layout"
import PostTag from "../post_tag"
import BreadCrumb from "../breadcrumb"
import TOC from "../toc"

import "../../styles/codeblock.scss"
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'katex/dist/katex.min.css'

import styled from "./layout_blog.module.css";

class LayoutBlog extends Component {
  render() {
    const {post} = this.props
    const title = post.frontmatter.title;
    const date = post.frontmatter.date;
    const category = post.frontmatter.category;
    const sub_category = post.frontmatter.sub_category;
    const tags = post.frontmatter.tags;

    return(
    <div>
      <MainLayout headings={post.headings} is_article={true}>
        <BreadCrumb frontmatter={post.frontmatter} />
        <Card>
          <h1 className={styled.post_title}> {title} </h1>

          <Icon type="calendar" className={styled.icon_calendar}/>
          <span className={styled.post_header}>
            {date}
            {date == null && "unkwnon date"}
          </span>
          <br/>

          <Icon type="tags" className={styled.icon_tags}/>
          {
            tags.map(
              (tag) => <PostTag className={styled.post_tags}
                                tagname={tag}>
                          <span className={styled.post_header}>{tag}</span>
                        </PostTag>
            )
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
