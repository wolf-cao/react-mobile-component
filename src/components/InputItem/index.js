import React, { Component } from 'react'
import Icon from '../Icon/index'
import classNames from 'classnames'

function normalizeValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return ''
  }
  return value + ''
}

export default class InputItem extends Component {
  handleClear = () => {
    const { onChange } = this.props

    if (onChange) {
      setTimeout(() => onChange(''))
    }
  }
  handleInputChange = evt => {
    const { value } = evt.target
    const { onChange } = this.props

    if (onChange) {
      setTimeout(() => onChange(value))
    }
  }
  render() {
    const {
      inputPreCls,
      label,
      placeholder,
      maxLength,
      error,
      value,
      ...restProps
    } = this.props
    console.log(error)

    const { name } = restProps

    const inputItemClass = classNames('pf-list-item', inputPreCls)
    const inputItemInlineClass = classNames(
      'pf-list-inline',
      `${inputPreCls}-inline`
    )
    const inputItemLabelClass = classNames(`${inputPreCls}-label`)

    return (
      <div className={inputItemClass}>
        <div className={inputItemInlineClass}>
          <label className={inputItemLabelClass}>{label}</label>
          <input
            {...restProps}
            ref={input => (this.inputItem = input)}
            type="text"
            name={name}
            maxLength={maxLength}
            className={`${inputPreCls}-input`}
            placeholder={placeholder}
            value={value}
            onChange={this.handleInputChange}
          />
          {value ? (
            <em className={`${inputPreCls}-clear`} onClick={this.handleClear} />
          ) : null}
        </div>
        {error && (
          <div className={`${inputPreCls}-error`}>
            <Icon name="shibai" className={`${inputPreCls}-error-icon`} />
            {error}
          </div>
        )}
      </div>
    )
  }
}

InputItem.defaultProps = {
  inputPreCls: 'pf-input-item',
  error: null
}
