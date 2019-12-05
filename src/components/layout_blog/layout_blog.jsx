import React, {Component, /*Children*/} from "react"
import { Card } from "antd";

import MainLayout from "../main_layout"
import TOC from "../toc"

import "../../styles/codeblock.scss"
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'katex/dist/katex.min.css'

// import styled from "./layout_blog.modules.css";

class LayoutBlog extends Component {
  render() {
    const {title, body, headings} = this.props
    return(
    <div>
      <MainLayout headings={headings} is_article={true}>
        <Card>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: body }}/>
        </Card>
      </MainLayout>
    </div>
    )
  }
}

export default LayoutBlog;
