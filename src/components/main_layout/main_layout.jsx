import React, {Component, /*Children*/} from "react"
import { css } from "@emotion/core"

import { rhythm } from "../../utils/typography"

import { Layout } from 'antd';

import NavBar from "../navbar"
import Sidebar from "../blog_right_sidebar"

import styled from "./main_layout.module.css";

const {
  Footer, Content,
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
        <Content>
          <Layout className={styled.post_body}>
            <Sidebar></Sidebar>
            <Content className={styled.main_content}>
              {children}
            </Content>
          </Layout>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
    )
  }
}

export default MainLayout;
