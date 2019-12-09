import React, {Component, /*Children*/} from "react"
import { css } from "@emotion/core"

import { rhythm } from "../../utils/typography"

import { Layout, Row } from 'antd';
import {Button} from "antd"

import NavBar from "../navbar"
import Sidebar from "../blog_right_sidebar"
import SidebarButton from "../sidebar_button"
import TOC from "../toc"

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
    const {children, headings, is_article} = this.props

    return(
    <div
      css={css`
        margin: 0 auto;
      `}
    >
      <Layout>
        <NavBar></NavBar>
        {/* <Row> */}
          <Content>
            {this.state.isShowSideButton && <SidebarButton/>}
            <Layout className={styled.mainbody}>
              <Content className={styled.content}>
                {children}
              </Content>
                <Sidebar
                  className={this.isShowSideButton ?
                             styled.hidden_sidebar : styled.sidebar }
                  onCollapse={this.onCollapseSidebar}
                  isArticle={is_article}
                  headings={headings}
                />
            </Layout>
          </Content>
        {/* </Row> */}
        <Footer>Footer</Footer>
      </Layout>
    </div>
    )
  }
}

export default MainLayout;
