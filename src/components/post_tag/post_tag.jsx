import React, {Component} from "react"
import { Link } from "gatsby"
import {Tag} from "antd"

import styled from "./post_tag.module.css"

const config = require("../../utils/site_config");

class PostTag extends Component {
  render() {
    const {tagname, children} = this.props;
    return(
      <span className={styled.post_tag}>
        <Link to={`/${(config.tagPagesRoot)}/${(tagname)}/1`} key={tagname}>
          <Tag className={styled.tag}>
            {children}
          </Tag>
        </Link>
      </span>
    );
  }
}

export default PostTag;