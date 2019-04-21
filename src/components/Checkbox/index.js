import React, { Component } from 'react'
import classNames from 'classnames'
import RcCheckbox from 'rc-checkbox'
import 'rc-checkbox/assets/index.css'

class CheckBox extends Component {
  render() {
    const { circle, renderContent } = this.props
    const { ...restProps } = this.props
    const checkboxClass = classNames('pf-checkbox', {
      [`pf-checkbox-circle`]: circle
    })

    if (renderContent) {
      return (
        <label className="pf-checkbox-wrapper pf-checkbox-label">
          <RcCheckbox className={checkboxClass} {...restProps} />
          {renderContent()}
        </label>
      )
    }

    return <RcCheckbox className={checkboxClass} {...restProps} />
  }
}

CheckBox.defaultProps = {
  circle: false
}

export default CheckBox
