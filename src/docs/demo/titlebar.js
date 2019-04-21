import React, { Component } from 'react'
import {
  TitleBar,
  WingSpace,
  WhiteSpace,
  Button,
  Icon
} from '../../components/index'
import './titlebar.less'

export default class TitleBarDemo extends Component {
  render() {
    return (
      <div className="assets-auth-box">
        <TitleBar
          title="需要提供的材料形式有3种，任选其一："
          onClick={() => {
            console.log(321)
          }}
        />
        <div className="assets-auth-summary">
          <WingSpace size="lg">
            <p>A、2年投资经验+500万家庭金融资产+新版承诺函</p>
            <p>B、2年投资经验+300万家庭金融净资产+新版承诺函</p>
            <p>C、2年投资经验+最近3年40万年均收入证明+新版承诺</p>
          </WingSpace>
        </div>
        <WhiteSpace size="md" />
        <TitleBar
          title={
            <span>
              具体材料形式及说明
              <Icon name="wenhao" color="#ff6600" className="customize-icon" />
            </span>
          }
          extra={
            <Button
              type="primary-text"
              size="md"
              inline
              onClick={() => {
                console.log('123')
              }}
            >
              更多
            </Button>
          }
        />
        <div className="assets-auth-summary">
          <WingSpace size="lg">
            <p>
              1、近三年个人年均收入超过40万元的收入证明（加盖公章）；收入证明模板可按附件提供，如投资者无法按照公司模板提供收入证明，须能证明近3年的年均收入超过40万元。比如客户只提供了最近1年的收入，但收入在120万以上，也可以认定为年均收入在40万元以上。
            </p>
            <p>
              2、客户在所有金融机构拥有的家庭金融资产前20日日均超过500万元或者家庭金融资产在扣除负债之后300万以上，具体可以为以下形式：
            </p>
            <p>
              (1) 银行存款：银行流水、存款证明 (满足申请日前20日日均要求即可）；
            </p>
            <p>
              (2) 债券：加盖银行或者证券公司专用
              章的国债、企业债、公司债、可转债等证 明基金份额、对账单、合同；
            </p>
            <p>(3) 基金：对账单、份额确认书、合同；</p>
            <p>(4) 资管计划：对账单、份额确认书、合同；</p>
            <p>(5) 银行理财：对账单、理财产品证 明；</p>
            <p>(6) 信托计划：对账单、份额确认书、合同；</p>
            <p>(7) 保险产品：对账单、合同；</p>
            <p>(8) 期货权益：期货结算单；</p>
            <p>
              3、2年以上投资经历须以客户参与场内交易曰期，或者购买资管产品曰期来证明。如能查询到客户中登场内交易经验在2年以上，则无需提供2年投资经历证明。如无法查询到，则需要客户通过提供购买资管产品（现金管理类产品除外）日期来证明。
            </p>
          </WingSpace>
        </div>
      </div>
    )
  }
}
