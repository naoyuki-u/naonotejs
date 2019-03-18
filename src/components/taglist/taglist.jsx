import React, {Component} from "react"

import {Tag} from "antd"
import styled from "./taglist.module.css"

class TagList extends Component {
  render() {
    const {edges} = this.props;
    const tagSet = new Set();
    edges.forEach(edge => {
      if (edge.node.frontmatter.tags){
        edge.node.frontmatter.tags.map((tag) => tagSet.add(tag));
      }
    })

    const tagArray = Array.from(tagSet);
    tagArray.sort((a, b) =>{
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    });
    console.log(tagArray);
    return(
      <div>
        <br/>
        <h3>タグ</h3>
        <p></p>
        <div>
          {tagArray.map((tag) => (
            <Tag className={styled.ant-tag} size="large">
              <a href={`/tags/${(tag)}`}>{tag}</a>
            </Tag>
          ))}
          <p></p>
        </div>
      </div>
    );
  }
}

export default TagList;
