import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import RDialog from 'rmc-dialog'

function noop() {}

class Dialog extends Component {
  render() {
    const {
      prefixCls,
      confirmText,
      cancelText,
      onConfirm,
      onCancel,
      center,
      noClose,
      ...restProps
    } = this.props

    const { footer } = { ...restProps }

    const confirmButton = (
      <a className="pf-dialog-button" onClick={onConfirm}>
        {confirmText}
      </a>
    )

    const cancelButton = (
      <a className="pf-dialog-button" onClick={onCancel}>
        {cancelText}
      </a>
    )

    const dialogFooter = (
      <div className="pf-dialog-footer-box">
        {cancelText && cancelButton}
        {confirmText && confirmButton}
      </div>
    )

    const centerClass = classNames({
      [`dialog-center`]: center,
      [`dialog-has-no-close`]: noClose
    })

    return (
      <RDialog
        prefixCls={prefixCls}
        wrapClassName={centerClass}
        {...restProps}
        footer={footer || dialogFooter}
      />
    )
  }
}

Dialog.propTypes = {
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  center: PropTypes.bool,
  noClose: PropTypes.bool
}

Dialog.defaultProps = {
  prefixCls: 'pf-dialog',
  onConfirm: noop,
  onCancel: noop,
  center: true,
  noClose: false
}

export default Dialog
