import React, {Component} from "react"
import { Link } from "gatsby"
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
        <h3>ã‚¿ã‚°</h3>
        <p></p>
        <div>
          {tagArray.map((tag) => (
            <Link to={`/tags/${(tag)}/1`}>
              <Tag className={styled.ant-tag} size="large">
                {tag}
              </Tag>
            </Link>
          ))}
          <p></p>
        </div>
      </div>
    );
  }
}

export default TagList;
