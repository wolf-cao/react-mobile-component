import React, { Component } from 'react'

export default class Spin extends Component {
  render() {
    const { SpinPreCls } = this.props

    return (
      <div className={SpinPreCls}>
        <div className={`${SpinPreCls}-icon-box`}>
          <span className={`${SpinPreCls}-icon`} />
        </div>
        <div className={`${SpinPreCls}-mask`} />
      </div>
    )
  }
}

Spin.defaultProps = {
  SpinPreCls: 'pf-spin'
}
