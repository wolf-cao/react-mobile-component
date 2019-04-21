import React, { Component } from 'react'
import ClassNames from 'classnames'
import Step from './step'

class Steps extends Component {
  static Item = Step

  render() {
    const { children, className } = this.props
    const stepsClassName = ClassNames('pf-steps', className)
    return <div className={stepsClassName}>{children}</div>
  }
}

export default Steps
