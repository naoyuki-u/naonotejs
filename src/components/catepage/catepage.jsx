import React, {Component} from "react"
import { Card, List, Avatar } from "antd";

import MainLayout from "../main_layout"

import "../../styles/codeblock.scss"
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'katex/dist/katex.min.css'

// import styled from "./layout_blog.modules.css";

class CatePage extends Component {
  render() {
    const { edges } = this.props
    return(
    <div>
      <MainLayout>
        <Card>
          <h1>Article list posted as hoge</h1>
          <List
            itemLayout="vertical"
            dataSource={edges}
            renderItem={edge => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <a href={edge.node.fields.slug}>
                      {edge.node.frontmatter.title}
                    </a>
                  }
                  description={edge.node.excerpt}
                />
              </List.Item>
            )} />
        </Card>

      </MainLayout>
    </div>
    )
  }
}

export default CatePage;
