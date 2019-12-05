import React, {Component} from "react"
import { StaticQuery, graphql } from "gatsby"

import {Layout} from "antd"

import styled from "./blog_right_sidebar.module.css";
import TagList from "../taglist"
import CateList from "../catelist"

import TOC from "../toc"
const {Sider} = Layout

class BlogRightSidebar extends Component {
  state = {
    collapsed: "false"
  }

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
        const onCollapsed = this.props.onCollapse;

        return(
          <div>
            <Sider
              className={styled.sidebar}
              theme="light"
              breakpoint="lg"
              collapsedWidth="0"
              style={{overflow: 'auto', height: '100vh'}}
              onCollapse={(collapsed, type) => {
                onCollapsed(collapsed);
              }}
            >
              {
                isArticle ?
                  <TOC headings={this.props.headings}/>
                  :
                  (<div>
                    <CateList edges={data.allMarkdownRemark.edges}/>
                    <TagList edges={data.allMarkdownRemark.edges}/>
                  </div>)
              }
            </Sider>
          </div>
        )
      }}
    />
  );
  }
}

export default BlogRightSidebar;
