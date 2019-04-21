import React, { Component } from 'react'
import { Steps, WhiteSpace, Button } from '../../components/index'
import './steps.less'

export default class StepsDemo extends Component {
  handleClick = () => {
    console.log(123)
  }

  render() {
    return (
      <div style={{ backgroundColor: '#fff' }}>
        <WhiteSpace size="lg" />
        <Steps>
          <Steps.Item finished>
            <div className="test-title">账户信息</div>
            <div className="test-sub-title">*添 / 541*******5159</div>
          </Steps.Item>
          <Steps.Item finished>
            <div className="test-title">投资者类型</div>
            <div className="test-sub-title">合格投资者</div>
          </Steps.Item>
          <Steps.Item arrow onClick={this.handleClick}>
            <div className="test-title">签署电子签名书</div>
          </Steps.Item>
          <Steps.Item arrow onClick={this.handleClick}>
            <div className="test-title">确认产品要素</div>
          </Steps.Item>
          <Steps.Item>
            <div className="test-title">风险等级匹配</div>
            <div className="test-sub-title">成长型</div>
          </Steps.Item>
          <Steps.Item arrow onClick={this.handleClick}>
            <div className="test-title">签署适当性评估结果确认书</div>
          </Steps.Item>
          <Steps.Item arrow onClick={this.handleClick}>
            <div className="test-title">签署风险揭示书</div>
          </Steps.Item>
          <Steps.Item
            extra={
              <Button size="md" mode="text" type="primary">
                修改
              </Button>
            }
          >
            <div className="test-title">填写购买金额130万元人民币</div>
            <div className="test-sub-title">
              认/申购费6万元(费率1%,外扣),合计需支付606万元
            </div>
          </Steps.Item>
          <Steps.Item arrow onClick={this.handleClick}>
            <div className="test-title">双向视频认证</div>
          </Steps.Item>
          <Steps.Item arrow onClick={this.handleClick}>
            <div className="test-title">签署划款授权书</div>
          </Steps.Item>
          <Steps.Item arrow onClick={this.handleClick}>
            <div className="test-title">签署基金合同</div>
          </Steps.Item>
        </Steps>
        <WhiteSpace size="lg" />
      </div>
    )
  }
}
