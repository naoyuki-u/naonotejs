import React, {Component, /*Children*/} from "react"
import { css } from "@emotion/core"

import { rhythm } from "../../utils/typography"

import { Layout } from 'antd';

import NavBar from "../navbar"
import Sidebar from "../blog_right_sidebar"

import styled from "./main_layout.module.css";

const {
  Footer, /*Content,*/
} = Layout;

class MainLayout extends Component {
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
            width: 650px;
            padding-left: ${rhythm(0.5)};
          `}
        >
          {children}
        </div>
        <Sidebar></Sidebar>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    </div>
    )
  }
}

export default MainLayout;
