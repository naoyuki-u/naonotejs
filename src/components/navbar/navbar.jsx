import React, {Component} from "react"
import { Link, StaticQuery, graphql } from "gatsby"

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

import {get_func} from "../../utils/category_table"

const config = require("../../utils/site_config");
const {Header} = Layout;

class NavBar extends Component {
  render() {
    // alert(get_func(["satoshi", "hiroshi", "blog"]));
    return(
      <StaticQuery
        query={graphql`
          query{
            allMarkdownRemark{
              edges{
                node{
                  frontmatter{
                    category
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const edges = data.allMarkdownRemark.edges;
          const cate_set = new Set();
          edges.forEach(edge => {
            if (edge.node.frontmatter.category){
              cate_set.add(edge.node.frontmatter.category);
            }
          })
          const display_categories = get_func(Array.from(cate_set));

          return(
            <div>
              <Header className={styled.header_overall}>
              <Row className={styled.header_content} justify="center" type="flex">
                <Col span={4}>
                  <Link to="/">
                    <h2 className={styled.title}>{config.siteTitle}</h2>
                  </Link>
                </Col>
                <Col span={14} offset={1}>
                  <Menu 
                        mode="horizontal"
                        theme="dark"
                        style={{ lineHeight: '64px' }}
                  >
                    {
                      display_categories.map((cate) => {
                        return(
                          <Menu.Item key={cate.priority}>
                            <Link
                              to={`/${(config.categoryPagesRoot)}` +
                                  `/${(cate.slug)}/1`}
                              key={cate.slug}>
                                {cate.display}
                              </Link>
                          </Menu.Item>
                        )
                      })
                    }
                  </Menu>
                </Col>

                <Col span={4} offset={1} xl>
                  <Menu className={styled.menuStyle}
                        mode="horizontal"
                        theme="dark"
                        style={{ lineHeight: '64px' }}>
                                        <Menu.Item key="about">
                      <Link to="/about">ABOUT</Link>
                    </Menu.Item>

                    <Menu.Item key="email">
                        <a href={"mailto:" + config.userEmail}>E-MAIL</a>
                    </Menu.Item>
                  </Menu>
                </Col>
                {/*
                <Col span={1}>
                  <Menu className={styled.menuStyle}
                        mode="horizontal"
                        theme="dark"
                        style={{ lineHeight: '64px' }}>
                    <Menu.Item key="email">
                      <a href={"mailto:" + config.userEmail}>E-MAIL</a>
                    </Menu.Item>
                  </Menu>
                </Col> */}
              </Row>
              </Header>
            </div>
          )
        }}
      />

    )
  }
}

export default NavBar;
