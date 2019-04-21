import React, { Component } from 'react'
import { Switch, List } from '../../components/index'

const Item = List.Item

export default class SwitchDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      switchChecked: false
    }
  }
  handleClick = val => {
    this.setState({
      switchChecked: val
    })
  }
  render() {
    const { switchChecked } = this.state
    return (
      <List renderHeader={() => 'Switch Component'}>
        <Item extra={<Switch defaultChecked />}>On Default</Item>
        <Item
          extra={<Switch checked={switchChecked} onClick={this.handleClick} />}
        >
          Off Default
        </Item>
        <Item
          extra={
            <Switch
              checked={switchChecked}
              color="red"
              onClick={this.handleClick}
            />
          }
        >
          Custom Color
        </Item>
        <Item extra={<Switch disabled />}>
          Disabled {switchChecked ? 'On' : 'Off'}
        </Item>
        <Item extra={<Switch checked={true} disabled />}>Disabled On</Item>
      </List>
    )
  }
}
