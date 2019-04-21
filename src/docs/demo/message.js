import React, { Component } from 'react'
import { Message, WhiteSpace } from '../../components/index'

export default class MessageDemo extends Component {
  handleClick = element => {
    element.style.display = 'none'
  }

  handleLink = () => {
    location.hash = '/'
  }

  render() {
    return (
      <div>
        <Message mode="warning" icon="tishi">
          请注意：订单提交后不可修改，订单信息以所提交相关合同协议内容为准。
        </Message>
        <WhiteSpace size="lg" />
        <Message
          mode="warning"
          icon="tishi"
          action="link"
          onClick={this.handleLink}
        >
          请注意：订单提交后不可修改，订单信息以。
        </Message>
        <WhiteSpace size="lg" />
        <Message
          mode="warning"
          icon="tishi"
          action="close"
          onClick={this.handleClick}
        >
          请注意：订单提交后不可修改，订单信息以。
        </Message>
      </div>
    )
  }
}
