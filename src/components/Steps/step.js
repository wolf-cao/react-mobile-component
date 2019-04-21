import React, { Component } from 'react'
import classNames from 'classnames'
import Icon from '../Icon/index'

function noop() {}

class Step extends Component {
  render() {
    const { children, finished, onClick, arrow, extra, className } = this.props
    const finishStep = classNames('pf-steps-item', className, {
      [`is-finished-step`]: finished
    })

    return (
      <div className={finishStep} onClick={onClick}>
        <span className="pf-steps-block" />
        <div className="pf-steps-item-icon">
          {finished && <Icon name="gou" />}
        </div>
        <div className="pf-steps-item-content">{children}</div>
        <div className="pf-steps-item-extra">{extra}</div>
        {arrow && (
          <div className="pf-steps-item-arrow">
            <Icon name="tiaozhuan" />
          </div>
        )}
        <span className="pf-steps-block" />
      </div>
    )
  }
}

Step.defaultProps = {
  onClick: noop,
  arrow: false
}

export default Step
