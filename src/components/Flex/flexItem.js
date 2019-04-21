import React, { Component } from 'react'
import classnames from 'classnames'

export default class FlexItem extends Component {
  render() {
    const { children, className, prefixCls, style, ...restProps } = this.props
    const wrapCls = classnames(`${prefixCls}-item`, className)
    return (
      <div className={wrapCls} style={style} {...restProps}>
        {children}
      </div>
    )
  }
}

FlexItem.defaultProps = {
  prefixCls: 'pf-flexbox'
}
