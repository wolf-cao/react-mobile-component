import React, { Component } from 'react'
import RcCheckbox from 'rc-checkbox'
import List from '../List/index'

export default class RadioItem extends Component {
  render() {
    const { label, ...restProps } = this.props

    return (
      <label className="pf-radio-label">
        <List.Item
          fullText
          extra={
            <RcCheckbox prefixCls="pf-radio" type="radio" {...restProps} />
          }
        >
          {label}
        </List.Item>
      </label>
    )
  }
}

RadioItem.defaultProps = {
  prefixCls: 'pf-radio'
}
