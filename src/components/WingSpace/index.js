import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class WingSpace extends Component {
  render() {
    const { size, WingSpacePreCls, children } = this.props
    const wingspaceClass = classNames(
      WingSpacePreCls,
      `${WingSpacePreCls}-${size}`
    )
    return <div className={wingspaceClass}>{children}</div>
  }
}

WingSpace.propTypes = {
  size: PropTypes.string
}

WingSpace.defaultProps = {
  size: 'lg',
  WingSpacePreCls: 'pf-wingspace'
}

export default WingSpace
