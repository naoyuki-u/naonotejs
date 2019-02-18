import React, {Component} from "react"

import {Layout} from "antd"

import styled from "./blog_right_sidebar.modules.css";

const {Sider} = Layout

class BlogRightSidebar extends Component {
  render() {
    const {children} = this.props
    return(
    <div>
      <Sider className={styled.sidebar} width={400}>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>{children}</p>
      </Sider>
    </div>
    )
  }
}

export default BlogRightSidebar;
