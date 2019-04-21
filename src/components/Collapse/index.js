import React, { Component } from 'react'
import ClassNames from 'classnames'
import Icon from '../Icon/index'

export default class Collapse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  handleClick = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    const { preCls, title, children } = this.props
    const { visible } = this.state

    const animateClass = ClassNames(`${preCls}-header`, {
      [`${preCls}-header-animate`]: visible
    })

    const contentClass = ClassNames(`${preCls}-content`, {
      [`${preCls}-content-show`]: visible,
      [`${preCls}-content-hide`]: !visible
    })

    return (
      <dl className={`${preCls}`}>
        <dt className={animateClass} onClick={this.handleClick}>
          <div className={`${preCls}-title`}>{title}</div>
          <Icon name="tiaozhuan" className={`${preCls}-icon`} />
        </dt>
        <dd className={contentClass}>{children}</dd>
      </dl>
    )
  }
}

Collapse.defaultProps = {
  preCls: 'pf-collapse'
}
