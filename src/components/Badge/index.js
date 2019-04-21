import React, { Component } from 'react'
import ClassNames from 'classnames'

export default class Badge extends Component {
  render() {
    const { preClass, type, size, value } = this.props
    const badgeClassName = ClassNames(preClass, {
      [`${preClass}-${type}`]: type,
      [`${preClass}-${size}`]: size
    })
    return <span className={badgeClassName}>{value}</span>
  }
}

Badge.defaultProps = {
  preClass: 'pf-badge',
  type: 'primary',
  size: 'normal'
}
