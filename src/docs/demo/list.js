import React, { Component } from 'react'
import { List } from '../../components/index'
import './list.less'

const Item = List.Item

export default class ListDemo extends Component {
  render() {
    const description =
      '东方财富网创办于2004年,始终坚持“用户为王”的经营理念，为全国广大投资者提供专业、及时、全面的金融信息服务。2010年3月，东方财富网成功登陆深圳证券交易所，从创立到成功上市，公司只用了5年时间，成为中国创业板IPO历程上的一颗耀眼明星。'
    return (
      <div className="main-wrapper">
        <h3 className="title">基本</h3>
        <List
          renderHeader={() => '分类列表'}
          renderFooter={() => '以上信息仅供参考'}
        >
          <Item arrow leftIcon="gou" leftIconColor="#6abf47" extra="稳健性">
            风险评估预测检查
          </Item>
          <Item extra="前海天下资本管理">基金公司</Item>
          <Item brief="描述信息" arrow>
            基金公司
          </Item>
          <Item extra="前海天下资本管理前海天下资本管理前海天下资本管理">
            基金公司
          </Item>
          <Item extra="投资顾问" arrow>
            产品基本要素
          </Item>
          <Item extra="认购起点、费率等情况" arrow>
            认购信息
          </Item>
          <Item extra={description} long>
            公司介绍
          </Item>
        </List>

        <List renderHeader={() => '列表项'}>
          <Item extra="展弘稳进1号9期" fullRow>
            产品名称
          </Item>
          <Item extra="展弘投资" fullRow>
            管理人
          </Item>
          <Item extra="R4" fullRow>
            产品风险等级
          </Item>
        </List>

        <List renderHeader={() => '结果列表项'}>
          <Item extra="展弘稳进1号9期" fullRow result noLine>
            购买产品
          </Item>
          <Item extra="100万元" fullRow result noLine>
            购买金额
          </Item>
          <Item extra="1万元" fullRow result noLine>
            认/申购费
          </Item>
        </List>
      </div>
    )
  }
}
