import React, { Component } from 'react'
import { Card, Tabs, Icon } from '../../components/index'

export default class CardDemo extends Component {
  render() {
    const tableData = [
      {
        name: '跳转卡片'
      },
      {
        name: '评论卡片'
      },
      {
        name: '新闻卡片'
      }
    ]

    return (
      <Tabs tab={tableData}>
        <React.Fragment>
          <Card
            arrow={true}
            title="上海泰旸资产管理有限公司"
            subTitle="2018-06-06 14:20"
            avator="http://172.30.64.81/uploads/-/system/appearance/header_logo/1/dfcf.png"
            onClick={() => {
              console.log('click here')
            }}
          />
          <Card
            arrow={true}
            title="上海泰旸资产管理有限公司"
            subTitle="2018-06-06 14:20"
            avator="http://172.30.64.81/uploads/-/system/appearance/header_logo/1/dfcf.png"
            onClick={() => {
              console.log('click here')
            }}
          />
          <Card
            arrow={true}
            title="上海泰旸资产管理有限公司"
            subTitle="2018-06-06 14:20"
            avator="http://172.30.64.81/uploads/-/system/appearance/header_logo/1/dfcf.png"
            onClick={() => {
              console.log('click here')
            }}
          />
        </React.Fragment>
        <React.Fragment>
          <Card
            title="上海泰旸资产管理有限公司"
            subTitle="2018-06-06 14:20"
            avator="http://172.30.64.81/uploads/-/system/appearance/header_logo/1/dfcf.png"
            content="释老毛：山西证券(002500) 在投资者互动平台表示，公司目前没有贾跃亭质押的乐视网股票；国金证券(600109)表示，公司无在途乐视网股票质押交易，截至目前，山西证券(002500)"
            footer={[
              <span
                onClick={() => {
                  console.log('click here')
                }}
              >
                <Icon name="gou" />
                123
              </span>,
              <span>123</span>,
              <span>123</span>,
              <span>阅读 123</span>
            ]}
          />
          <Card
            title="上海泰旸资产管理有限公司"
            subTitle="2018-06-06 14:20"
            avator="http://172.30.64.81/uploads/-/system/appearance/header_logo/1/dfcf.png"
            content="释老毛：山西证券(002500) 在投资者互动平台表示，公司目前没有贾跃亭质押的乐视网股票；国金证券(600109)表示，公司无在途乐视网股票质押交易，截至目前，山西证券(002500)"
            footer={[
              <span>
                <Icon name="gou" />
                123
              </span>,
              <span>123</span>,
              <span>123</span>,
              <span>阅读 123</span>
            ]}
          />
          <Card
            title="上海泰旸资产管理有限公司"
            subTitle="2018-06-06 14:20"
            avator="http://172.30.64.81/uploads/-/system/appearance/header_logo/1/dfcf.png"
            content="释老毛：山西证券(002500) 在投资者互动平台表示，公司目前没有贾跃亭质押的乐视网股票；国金证券(600109)表示，公司无在途乐视网股票质押交易，截至目前，山西证券(002500)"
            footer={[
              <span>
                <Icon name="gou" />
                123
              </span>,
              <span>123</span>,
              <span>123</span>,
              <span>阅读 123</span>
            ]}
          />
        </React.Fragment>
        <React.Fragment>
          <Card
            type="news"
            title="释老毛：山西证券(002500) 在投资者互动平台表示，公司目前没有贾跃亭质押的乐视网股票；国金证券(600109)表示，公司无在途乐视网股票质押交易，截至目前，山西证券(002500)"
            avator="http://172.30.64.81/uploads/-/system/appearance/header_logo/1/dfcf.png"
            footer={[<span>东方财富网</span>, <span>今日 10:30</span>]}
            onClick={() => {
              console.log('click here')
            }}
          />
          <Card
            type="news"
            title="释老毛：山西证券(002500) 在投资者互动平台表示，公司目前没有贾跃亭质押的乐视网股票；国金证券(600109)表示，公司无在途乐视网股票质押交易，截至目前，山西证券(002500)"
            avator="http://172.30.64.81/uploads/-/system/appearance/header_logo/1/dfcf.png"
            footer={[<span>东方财富网</span>, <span>今日 10:30</span>]}
          />
          <Card
            type="news"
            title="释老毛：山西证券(002500) 在投资者互动平台表示，公司目前没有贾跃亭质押的乐视网股票；国金证券(600109)表示，公司无在途乐视网股票质押交易，截至目前，山西证券(002500)"
            avator="http://172.30.64.81/uploads/-/system/appearance/header_logo/1/dfcf.png"
          />
        </React.Fragment>
      </Tabs>
    )
  }
}
