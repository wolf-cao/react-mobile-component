import React, { Component } from 'react'
import { Popover } from '../../components/index'

const Item = Popover.Item

export default class PopoverDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      selectedValue: ''
    }
  }

  handleVisibleChange = visible => {
    this.setState({
      visible
    })
  }

  render() {
    const { visible, selectedValue } = this.state

    return (
      <Popover
        visible={visible}
        renderContent={[
          <Item value="max" actived={selectedValue === 'max'}>
            最多发布
          </Item>,
          <Item value="newest" actived={selectedValue === 'newest'}>
            最新发布
          </Item>
        ]}
        onVisibleChange={this.handleVisibleChange}
        onSelect={val => {
          this.setState({
            visible: false,
            selectedValue: val.props.value
          })
        }}
      >
        <div>button</div>
      </Popover>
    )
  }
}
