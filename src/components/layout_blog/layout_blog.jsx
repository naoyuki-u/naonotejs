import React, {Component} from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../../utils/typography"

import NavBar from "../navbar"

import "../../styles/codeblock.scss"
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'katex/dist/katex.min.css'

import styled from "./layout_blog.modules.css";

class Layout extends Component {
  render() {
    const {children} = this.props
    return(
    <div
      css={css`
        margin: 0 auto;
      `}
    >
    <NavBar></NavBar>
      <div
        css={css`
          margin: 0 auto;
          max-width: 1200px;
          padding-left: ${rhythm(3)};
        `}
      >
        {children}
      </div>
    </div>
    )
  }
}

export default Layout;
