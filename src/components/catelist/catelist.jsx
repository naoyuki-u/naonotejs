import React, {Component} from "react"
import { Link } from "gatsby"
import {Menu} from "antd"
import styled from "./catelist.module.css"

const config = require("../../utils/site_config");

class CateList extends Component {
  render() {
    const {edges} = this.props;
    const cateSet = new Set();
    edges.forEach(edge => {
      if (edge.node.frontmatter.category){
          cateSet.add(edge.node.frontmatter.category);
      }
    })

    const cateArray = Array.from(cateSet);
    cateArray.sort((a, b) =>{
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    });
    return(
      <div className={styled.barcateblock}>
        <br/>
        <h3>カテゴリー</h3>
        <p></p>
        <div>
          <Menu>
            {cateArray.map((category) => (
              <Menu.Item key={category}>
                <Link to={`${(config.categoryPagesRoot)}/${(category)}`} 
                      key={category}
                >
                  {category}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
          <p></p>
        </div>
      </div>
    );
  }
}

export default CateList;
