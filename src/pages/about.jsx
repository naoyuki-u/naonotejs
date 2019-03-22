import React from "react"
import { css } from "@emotion/core"
import { Card, Avatar, List, Icon } from "antd"
import Layout from "../components/main_layout"

import avatar from "../images/avatar.png"
const { Meta } = Card;

const contrib_list =[
  { title: "gatsbyjs",
    url: "https://www.gatsbyjs.org/"},
  { title: "Ant Design",
    url: "https://ant.design/"},
]

export default ({data}) => {
  console.log(data)
  return (
    <Layout>
      <div>
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
        `}
      >
        About
      </h1>
      <div>
        <Card
          style={{width: 500}}
        >
          <Meta 
            avatar={<Avatar size="large" src={avatar}/>}
            title="naoyuki-u"
          />
          <p>hogehogehoge</p>
        </Card>
      </div>
      <br/>
      <br/>
      <h3>
        Powered by
      </h3>
      <List
        itemLayout="horizontal"
        dataSource={contrib_list}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={<a href={item.url}>{item.url}</a>}
            />
          </List.Item>
        )}
      />
      <br/>
      <br/>
      <h3>
        Source code
      </h3>
      <a href="https://github.com/naoyuki-u/naonotejs/">
        <Icon type="github" />
        github
      </a>
    </div>
  </Layout>
  )
}
