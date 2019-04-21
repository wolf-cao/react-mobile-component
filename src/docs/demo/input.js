import React, { Component } from 'react'
import { List, InputItem } from '../../components/index'

export default class InputDeom extends Component {
  state = {
    value: ''
  }

  handleChange = value => {
    this.setState({
      value
    })
  }

  render() {
    const { value } = this.state
    return (
      <List renderHeader={() => '输入框'}>
        <InputItem
          label="账户名"
          value={value}
          placeholder="请输入卡号"
          maxLength={5}
          onChange={this.handleChange}
        />
        <List.Item extra={value}>银行卡号</List.Item>
      </List>
    )
  }
}
