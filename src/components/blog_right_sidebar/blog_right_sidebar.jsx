import React, {Component} from "react"
import { StaticQuery, graphql } from "gatsby"

import {Layout} from "antd"

import styled from "./blog_right_sidebar.module.css";
import TagList from "../taglist"
import CateList from "../catelist"

const {Sider} = Layout

class BlogRightSidebar extends Component {
  render() {
    return(
      <StaticQuery
      query={graphql`
        query{
          allMarkdownRemark{
            edges{
              node{
                frontmatter{
                  tags
                  category
                }
              }
            }
          }
        }
      `}
      render={data => {
        return(
          <div>
            <Sider className={styled.sidebar} theme="light"
              breakpoint="lg"
              collapsedWidth="0"
              style={{
                overflow: 'auto', height: '100vh'}}
              // onBreakpoint={() => alert("hoge")}
            >
              <CateList edges={data.allMarkdownRemark.edges}/>
              <TagList edges={data.allMarkdownRemark.edges}/>
            </Sider>
          </div>
        )
      }}
    />
  );
  }
}

export default BlogRightSidebar;
