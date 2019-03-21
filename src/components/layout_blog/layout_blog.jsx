import React, {Component, /*Children*/} from "react"
import { css } from "@emotion/core"

import MainLayout from "../main_layout"

import "../../styles/codeblock.scss"
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'katex/dist/katex.min.css'

// import styled from "./layout_blog.modules.css";

class LayoutBlog extends Component {
  render() {
    const {children} = this.props
    return(
    <div
      css={css`
        margin: 0 auto;
      `}
    >
      <MainLayout>
        {children}
      </MainLayout>
    </div>
    )
  }
}

export default LayoutBlog;
