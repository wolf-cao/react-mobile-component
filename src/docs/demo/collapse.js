import React, { Component } from 'react'
import { Collapse, Icon } from '../../components/index'
import './collapse.less'

export default class CollapseDemo extends Component {
  render() {
    const titleElement = (
      <div className="customize-title-element">
        <Icon name="gou" />
        <div className="customize-title-content">
          人民日报13篇重磅文章,解析实践中产生的新思想解析实践中产生的新思想
        </div>
      </div>
    )

    return (
      <div>
        <Collapse title={titleElement}>
          <div className="collapse-content-item">
            答：投资者主要的融资融券交易操作指令有：“融资买入”、“卖券还款”、“直接还款”、“融券卖出”、“买券还券”、“直接还券（现券还券）”、“担保品买卖”、“担保品转入、转出”等委托指令。
            <br />
            a.融资交易指令：
            <br />
            “融资买入”：投资者融进资金买入融资标的证券，成交后形成融资负债；
            “卖券还款”：投资者卖出证券偿还融资负债、利息及费用；“直接还款”
            投资者使用自有资金偿还融资负债、利息及费用。
            <br />
            b.融券交易指令：
            <br />
            “融券卖出”：投资者融入并卖出可融券标的证券，成交后形成融券负债；“买券还券”：投资者买入负债对应券种偿还融券负债以及融券费用；“直接还券（现券还券）”使投资者使用自有证券偿还该证券的融券负债。
            <br />
            c.担保物划转指令：
            <br />
            “担保物转入”与“担保物转出”：投资者普通证券账户与信用证券账户之间的担保品的提交或返还。
            <br />
          </div>
        </Collapse>
        <Collapse title="人民日报13篇重磅文章,解析实践中产生的新思想解析实践中产生的新思想">
          <div className="collapse-content-item">
            习近平强调：“时代是思想之母，实践是理论之源”，一句话道尽思想与实践之间的辩证关系。作为马克思主义中国化最新成果的习近平新时代中国特色社会主义思想，同样来源于实践，是对实践的认识深化和方法总结，反过来又指导新时代中国的一系列改革创新，同时，又在不断解决现实问题中调整、完善。
          </div>
        </Collapse>
      </div>
    )
  }
}
