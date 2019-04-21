import React, { Component } from 'react'
import Tooltip from 'rc-tooltip'
import Item from './Item'

export default class Popover extends Component {
  static Item = Item

  renderItems() {
    const { renderContent, onSelect } = this.props
    return React.Children.map(renderContent, (child, index) => {
      return React.cloneElement(child, {
        handleClick: () => {
          onSelect(child, index)
        }
      })
    })
  }

  render() {
    const { children, ...restProps } = this.props
    return (
      <Tooltip
        {...restProps}
        placement="bottom"
        mouseEnterDelay={0}
        mouseLeaveDelay={0.1}
        overlay={
          <div className="rc-tooltip-inner-wrapper">{this.renderItems()}</div>
        }
        trigger="click"
        transitionName={true}
      >
        {children}
      </Tooltip>
    )
  }
}
