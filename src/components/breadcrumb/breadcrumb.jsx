import React, {Component} from "react"
import { Link } from "gatsby"
import { Breadcrumb, Icon } from "antd"

import styled from "./breadcrumb.module.css"

const config = require("../../utils/site_config");

class MyBreadcrumb extends Component {
  render() {
    const {category, sub_category, title} = this.props.frontmatter;

    return(
      <div className={styled.my_breadcrumb}>
        <Breadcrumb separator=">" className={styled.bread_element}>
          <Breadcrumb.Item>
            <Link to="/">
              <Icon type="home" theme="twoTone" twoToneColor="#52c41a"
                    style={{fontSize: "18px", marginRight: "5px"}}
              />
              <span>Home</span>
            </Link>
          </Breadcrumb.Item>

          {
            category != null
            &&
            <Breadcrumb.Item>
              <Link to={`/${(config.categoryPagesRoot)}/${(category)}`}>
                {category}
              </Link>
            </Breadcrumb.Item>
          }

          {
            sub_category != null
            &&
            <Breadcrumb.Item>
              <Link to={`/${(config.categoryPagesRoot)}/${(category)}/`
                        + `${(sub_category)}`}>
                {sub_category}
              </Link>
            </Breadcrumb.Item>
          }

          <Breadcrumb.Item>
            {title}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default MyBreadcrumb;
