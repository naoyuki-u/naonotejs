import React, {Component} from "react"
import { StaticQuery, graphql } from "gatsby"

import { Button, Affix, Icon, Drawer } from "antd"

// import styled from "./blog_right_sidebar.module.css";
import TagList from "../taglist"
import CateList from "../catelist"

class SidebarButton extends Component {

  state = {
    isMenuFolding: true,
    isShowSide: false,
  }

  onClick = (e) =>
  {
    this.setState(prevState => {
      return {
        isMenuFolding: !prevState.isMenuFolding,
        isShowSide: !prevState.isShowSide
      }
    })
  }

  onCloseDrawer = () =>
  {
    this.setState({
      isShowSide: false
    })
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
        return(
          <div>
            <Affix>
              <Button
                size="large"
                onClick={this.onClick}
              >
                <Icon
                  type={this.state.isMenuFolding ? "menu-unfold" : "menu-fold"}
                />
              </Button>
            </Affix>
            <Drawer
              visible={this.state.isShowSide}
              placement="left"
              onClose={this.onCloseDrawer}
            >
              <CateList edges={data.allMarkdownRemark.edges}/>
              <TagList edges={data.allMarkdownRemark.edges}/>
            </Drawer>
          </div>
        )
      }}
    />
  );
  }
}

export default SidebarButton;
