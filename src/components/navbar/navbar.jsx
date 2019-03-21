import React, {Component} from "react"
import { Link } from "gatsby"
// import styled from "styled-components"

// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Typography from '@material-ui/core/Typography';
import {Layout, /*Button,*/ Menu} from 'antd';
import { Row, Col } from 'antd';


import styled from "./navbar.module.css"
import "antd/dist/antd.less";

const config = require("../../utils/site_config");
const {Header} = Layout;

class NavBar extends Component {
  render() {
    return(
    <div>
      <Header className={styled.head_bar}>
      <Row>
        <Col span={2}>
          <Link to="/">
            <h2 className={styled.title}>{config.siteTitle}</h2>
          </Link>
        </Col>
        <Col span={8} offset={14}>
          <Menu className={styled.menuStyle} mode="horizontal" theme="dark" style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">
              <Link to="/">BLOG</Link>
            </Menu.Item>
            <Menu.Item key="2">
              CATEGORY
            </Menu.Item>
            <Menu.Item key="3">
              <a href={"mailto:" + config.userEmail}>E-MAIL</a>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
      </Header>
    </div>
    )
  }
}

export default NavBar;
