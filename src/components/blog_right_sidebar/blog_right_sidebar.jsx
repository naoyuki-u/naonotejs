import React, {Component} from "react"
import { StaticQuery, graphql } from "gatsby"

import {Layout} from "antd"

import styled from "./blog_right_sidebar.modules.css";
import TagList from "../taglist"

const {Sider} = Layout

class BlogRightSidebar extends Component {
  render() {
    const {children} = this.props;
    return(
    <StaticQuery
    query={graphql`
      query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                tags
              }
            }
          }
        }
      }
    `}
    render={data => {
      var tags = null;
      data.allMarkdownRemark.edges.forEach(edge => {
        if (edge.node.frontmatter.tags){
          tags = edge.node.frontmatter.tags;
        }
      })
      return(
        <div>
          <Sider className={styled.sidebar} width={250}>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <TagList edges={data.allMarkdownRemark.edges}/>
          </Sider>
        </div>
      )
    }}
  />
  );
    const {data} = this.props;
    console.log("hogehoghhogehoghhogehoghhogehoghhogehogh");
    // data.allMarkdownRemark.edges.forEach(edge => {
    //   if (edge.node.frontmatter.tags) {
    //     edge.node.frontmatter.tags.forEach(tag => {
    //       console.log(tag);
    //     });
    //   }
    // });
    console.log("hogehoghhogehoghhogehoghhogehoghhogehogh")
    return(
    <div>
      <Sider className={styled.sidebar} width={400}>
        data.forEach(tag =>{
          <p>tag</p>
        })
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


export const query = graphql`
  query{
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            tags
          }
        }
      }
    }
  }
`