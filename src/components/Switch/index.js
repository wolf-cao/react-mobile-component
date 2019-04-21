import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function noop() {}

class Switch extends Component {
  handleChange = evt => {
    const checked = evt.target.checked
    if (this.props.onChange) {
      this.props.onChange(checked)
    }
  }
  handleClick = evt => {
    if (this.props.onClick) {
      let val
      if (evt && evt.target && evt.target.checked !== undefined) {
        val = evt.target.checked
      } else {
        val = this.props.checked
      }
      this.props.onClick(val)
    }
  }
  render() {
    const { handleChange, handleClick } = this
    const { checked, color, disabled, ...restProps } = this.props
    const customizeColorStyle = {}
    if (color && checked) {
      customizeColorStyle.background = color
    }

    const checkboxSpan = classNames('checkbox', {
      [`checkbox-disabled`]: disabled
    })

    return (
      <label
        className="pf-switch"
        {...(!disabled ? { onClick: handleClick } : noop)}
      >
        <input
          type="checkbox"
          className="pf-switch-checkbox"
          disabled={disabled}
          checked={checked}
          value={checked ? 'on' : 'off'}
          onChange={handleChange}
          {...(!disabled ? { onClick: handleClick } : noop)}
          {...restProps}
        />
        <span
          className={checkboxSpan}
          style={customizeColorStyle}
          {...(!disabled ? { onClick: handleClick } : noop)}
        />
      </label>
    )
  }
}

Switch.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  color: PropTypes.string,
  onClick: PropTypes.func
}

Switch.defaultProps = {
  checked: false,
  disabled: false,
  onChange: noop,
  onClick: noop,
  color: '#4dd865'
}

export default Switch
