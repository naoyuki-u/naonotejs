import React, {Component} from "react"
import { Link } from "gatsby"
import {Tag} from "antd"
import styled from "./taglist.module.css"

const config = require("../../utils/site_config");

class TagList extends Component {
  render() {
    const {edges} = this.props;
    const tagSet = new Set();

    edges.forEach(edge => {
      if (edge.node.frontmatter.tags){
        edge.node.frontmatter.tags.map((tag) => tagSet.add(tag))
      }
    })

    const tagArray = Array.from(tagSet);
    tagArray.sort((a, b) =>{
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    });

    return(
      <div className={styled.block}>
        <br/>
        <h3>タグ</h3>
        <p></p>
        <div>
          {tagArray.map((tag) => (
            <Link to={`${(config.tagPagesRoot)}/${(tag)}/1`}
                  key={tag}
            >
              <Tag
                className={styled.mytags}
              >
                {tag}
              </Tag>
              <br/>
            </Link>
          ))}
          <p></p>
        </div>
      </div>
    );
  }
}

export default TagList;
