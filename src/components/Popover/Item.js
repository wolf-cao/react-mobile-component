import React, { Component } from 'react'
import ClassNames from 'classnames'
import Icon from '../Icon'

export default class PopoverItem extends Component {
  render() {
    const { children, handleClick, actived } = this.props
    const popoverItemClass = ClassNames('pf-popover-item', {
      [`pf-popover-item-actived`]: actived
    })

    return (
      <div className={popoverItemClass} onClick={handleClick}>
        {children}
        {actived && <Icon name="gou" color="#e1a35e" />}
      </div>
    )
  }
}
