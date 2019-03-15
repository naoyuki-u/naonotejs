import React, {Component, Children} from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../../utils/typography"

import { Layout } from 'antd';

import NavBar from "../navbar"
import Sidebar from "../blog_right_sidebar"

import "../../styles/codeblock.scss"
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'katex/dist/katex.min.css'

import styled from "./layout_blog.modules.css";

const {
  Footer, Content,
} = Layout;

class LayoutBlog extends Component {
  render() {
    const {children} = this.props
    return(
    <div
      css={css`
        margin: 0 auto;
      `}
    >
    <Layout>
      <NavBar></NavBar>
      <Layout className={styled.post_body}>
        <div
          css={css`
            margin: 0 auto;
            max-width: 5000px;
            padding-left: ${rhythm(0.5)};
          `}
        >
          {children}
          {/* <Content className={styled.post_body}>{children}</Content> */}
        </div>
        <Sidebar>chxild</Sidebar>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    </div>
    )
  }
}

export default LayoutBlog;
