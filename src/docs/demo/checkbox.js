import React, { Component } from 'react'
import { Checkbox, List, WingSpace, WhiteSpace } from '../../components/index'

const Item = List.Item

export default class CheckboxDemo extends Component {
  state = {
    isChecked: false
  }
  handleChange = evt => {
    this.setState({
      isChecked: evt.target.checked
    })
  }
  render() {
    return (
      <div>
        <WhiteSpace size="lg" />
        <WingSpace size="lg">
          <Checkbox
            defaultChecked
            onChange={this.handleChange}
            renderContent={() =>
              '我确认处于本人自愿购买展虹弘稳进1号9期，并同意签字确认上述交易流程无误'
            }
          />
        </WingSpace>
        <List renderHeader={() => 'Checkbox Component'}>
          <Item extra={<Checkbox defaultChecked circle />}>On Circle</Item>
          <Item extra={<Checkbox defaultChecked />}>On Default</Item>
          <Item extra={<Checkbox onChange={this.handleChange} />}>
            here is {this.state.isChecked ? 'on' : 'off'}
          </Item>
          <Item extra={<Checkbox disabled />}>Disabled</Item>
          <Item extra={<Checkbox disabled checked />}>Disabled On</Item>
        </List>
      </div>
    )
  }
}
