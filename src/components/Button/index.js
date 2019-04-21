import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../Icon/index'

function noop() {}

class Button extends Component {
  render() {
    const {
      children,
      type,
      size,
      className,
      icon,
      onClick,
      disabled,
      block,
      round,
      ghost,
      mode,
      inline,
      iconColor
    } = this.props

    const buttonClass = classNames(
      'pf-button',
      `pf-button-${type}`,
      `pf-button-${size}`,
      {
        [`is-disabled`]: disabled,
        [`is-block`]: block,
        [`is-text-button`]: mode === 'text',
        [`is-ghost`]: ghost || (type === 'normal' || type === 'white'),
        [`is-inline`]: inline,
        [`is-round`]: round
      },
      `${className}`
    )

    return (
      <a className={buttonClass} onClick={disabled ? noop : onClick}>
        {icon ? <Icon name={icon} color={iconColor} /> : null}
        <span>{children}</span>
      </a>
    )
  }
}

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  ghost: PropTypes.bool,
  inline: PropTypes.bool,
  mode: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  className: '',
  mode: '',
  icon: '',
  type: 'white',
  size: 'large',
  disabled: false,
  block: false,
  ghost: false,
  inline: false,
  onClick: noop
}

export default Button
