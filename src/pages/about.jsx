import React from "react"
import { css } from "@emotion/core"
import { Card, Avatar, Icon, Tag } from "antd"
import Layout from "../components/main_layout"

import avatar from "../images/avatar.png"
const { Meta } = Card;

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
      <div align="center">
        <Card
          style={{width: 500}}
        >
          <Meta 
            avatar={<Avatar size="large" src={avatar}/>}
            title="About me"
            description="ほっげええええええええ"
          />
        </Card>
        <h3>
          hogehogehogehoge
        </h3>
      </div>
    </div>
  </Layout>
  )
}
