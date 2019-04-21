import React, { Component } from 'react'
import { List, RadioItem, WhiteSpace } from '../../components/index'

export default class RadioDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: ''
    }
  }

  handleChange(values) {
    this.setState({
      values
    })
  }

  renderList(list) {
    const { values } = this.state
    return list.map(item => (
      <RadioItem
        key={item.value}
        checked={item.value === values.value}
        label={item.label}
        onChange={() => {
          this.handleChange(item)
        }}
      />
    ))
  }

  render() {
    const { values } = this.state
    const data = [
      {
        value: 'meixi',
        label: '梅西'
      },
      {
        value: 'cluo',
        label: 'C罗'
      },
      {
        value: 'luonaerduo',
        label: '罗纳尔多'
      }
    ]
    return (
      <div>
        <List>{this.renderList(data)}</List>
        <WhiteSpace size="lg" />
        <List renderHeader={() => '显示结果'}>
          <List.Item extra={values.label} result>
            勾选的是
          </List.Item>
        </List>
      </div>
    )
  }
}
