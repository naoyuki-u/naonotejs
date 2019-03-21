import React, {Component, /*Children*/} from "react"
import { css } from "@emotion/core"

import { rhythm } from "../../utils/typography"

import { Layout } from 'antd';
import {Button} from "antd"

import NavBar from "../navbar"
import Sidebar from "../blog_right_sidebar"
import SidebarButton from "../sidebar_button"

import styled from "./main_layout.module.css";

const {
  Footer, Content,
} = Layout;

class MainLayout extends Component {

  state = {
    isShowSideButton : false
  }

  onCollapseSidebar = (collapsed) =>{
    this.setState({
      isShowSideButton: collapsed
    })
  }

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
          {this.state.isShowSideButton && <SidebarButton/>}
          <Layout className={styled.post_body}>
            <Sidebar onCollapse={this.onCollapseSidebar}></Sidebar>
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
