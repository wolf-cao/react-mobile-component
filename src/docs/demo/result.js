import React, { Component } from 'react'
import { Result, Button, WingSpace, WhiteSpace } from '../../components/index'
import './result.less'

export default class ResultDemo extends Component {
  state = {
    result: ''
  }

  handleToCus = () => {
    this.setState({
      result: 'customizeImageIcon'
    })
  }

  handleToErr = () => {
    this.setState({
      result: 'error'
    })
  }

  handleToWait = () => {
    this.setState({
      result: 'wait'
    })
  }

  handleToOff = () => {
    this.setState({
      result: 'off'
    })
  }

  handleToSuccess = () => {
    this.setState({
      result: 'success'
    })
  }

  handleToCustomize = () => {
    this.setState({
      result: 'customize'
    })
  }

  handleToCustomizeButton = () => {
    this.setState({
      result: 'customize-button'
    })
  }

  handleReset = () => {
    this.setState({
      result: ''
    })
  }

  getRenderContent() {
    return (
      <div className="invest-result-custom-list">
        <div className="invest-result-custom-list-item">
          <div className="invest-result-custom-list-label">您的投资者类型</div>
          <div className="invest-result-custom-list-value">合格投资者</div>
        </div>
        <div className="invest-result-custom-list-item">
          <div className="invest-result-custom-list-label">认证有效期</div>
          <div className="invest-result-custom-list-value">1个月</div>
        </div>
        <div className="invest-result-custom-list-item">
          <div className="invest-result-custom-list-label">有效期至</div>
          <div className="invest-result-custom-list-value">2018年09月25日</div>
        </div>
      </div>
    )
  }

  getRenderButton() {
    return (
      <div>
        <Button type="primary">
          认证普通合格投资者
          <p className="complex-button-text">
            (金融资产≥300万元或最近三年个人年均收入≥50万元)
          </p>
        </Button>
        <WhiteSpace size="md" />
        <Button type="primary">银证转账</Button>
        <WhiteSpace size="md" />
        <Button type="primary">上传材料认证</Button>
      </div>
    )
  }

  render() {
    const { result } = this.state
    return (
      <div>
        {result === 'customizeImageIcon' && (
          <Result
            imageIcon="https://resource.uufund.com/pe_v1.2/resource/img/trade/warm2.png"
            title={() => '订单审核失败，可用资金不足'}
            subTitle={() => (
              <div>
                请注意相关要求并重新提交订单，下单过程中如有疑问，请联系客服
                <em style={{ fontStyle: 'normal', color: '#e1a35e' }}>95357</em>
              </div>
            )}
            buttonText="重新下单"
            onClick={this.handleReset}
          />
        )}

        {result === 'error' && (
          <Result
            mode="error"
            title={() => '订单审核失败，可用资金不足'}
            subTitle={() => (
              <div>
                请注意相关要求并重新提交订单，下单过程中如有疑问，请联系客服
                <em style={{ fontStyle: 'normal', color: '#e1a35e' }}>95357</em>
              </div>
            )}
            buttonText="重新下单"
            onClick={this.handleReset}
          />
        )}

        {result === 'wait' && (
          <Result
            mode="wait"
            title={() => '您的资产或收入证明材料不符合要求，请重新提交'}
            subTitle={() => (
              <div>
                请注意相关要求并重新提交订单，下单过程中如有疑问，请联系客服
                <em style={{ fontStyle: 'normal', color: '#ea5504' }}>95357</em>
              </div>
            )}
            buttonText="重新下单"
            onClick={this.handleReset}
          />
        )}

        {result === 'off' && (
          <Result
            mode="off"
            title={() => '订单审核失败，可用资金不足'}
            subTitle={() => (
              <div>
                请注意相关要求并重新提交订单，下单过程中如有疑问，请联系客服
                <em style={{ fontStyle: 'normal', color: '#ea5504' }}>95357</em>
              </div>
            )}
            buttonText="重新下单"
            onClick={this.handleReset}
          />
        )}

        {result === 'success' && (
          <Result
            mode="success"
            title={() => '订单审核失败，可用资金不足'}
            subTitle={() => (
              <div>
                请注意相关要求并重新提交订单，下单过程中如有疑问，请联系客服
                <em style={{ fontStyle: 'normal', color: '#ea5504' }}>95357</em>
              </div>
            )}
            buttonText="重新下单"
            onClick={this.handleReset}
          />
        )}

        {result === 'customize' && (
          <Result
            mode="success"
            title={() => '认证成功!'}
            renderContent={this.getRenderContent}
            buttonText="重新下单"
            onClick={this.handleReset}
          />
        )}

        {result === 'customize-button' && (
          <Result
            mode="success"
            title={() => '认证成功!'}
            renderButton={this.getRenderButton}
          />
        )}

        {!result && (
          <WingSpace size="lg">
            <WhiteSpace size="lg" />
            <Button type="primary" onClick={this.handleToCus}>
              Customize Result
            </Button>
            <WhiteSpace size="lg" />
            <Button type="primary" onClick={this.handleToErr}>
              Error Result
            </Button>
            <WhiteSpace size="lg" />
            <Button type="primary" onClick={this.handleToWait}>
              Wait Result
            </Button>
            <WhiteSpace size="lg" />
            <Button type="primary" onClick={this.handleToOff}>
              Off Result
            </Button>
            <WhiteSpace size="lg" />
            <Button type="primary" onClick={this.handleToSuccess}>
              Success Result
            </Button>
            <WhiteSpace size="lg" />
            <Button type="primary" onClick={this.handleToCustomize}>
              定制结果页
            </Button>
            <WhiteSpace size="lg" />
            <Button type="primary" onClick={this.handleToCustomizeButton}>
              定制结果页button部分
            </Button>
          </WingSpace>
        )}
      </div>
    )
  }
}
