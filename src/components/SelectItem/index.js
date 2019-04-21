import React, { Component } from 'react'

export default class SelectItem extends Component {
  render() {
    const {
      data,
      preClass,
      placeholder,
      label,
      value,
      ...restProps
    } = this.props

    return (
      <div className="pf-list-item">
        <div className={`pf-list-inline ${preClass}-inline`}>
          <label className={`${preClass}-label`}>{label}</label>
          <select className={preClass} {...restProps}>
            <option
              value=""
              disabled
              selected={!value}
              style={{ display: 'none' }}
            >
              {placeholder}
            </option>
            {data.map(item => (
              <option value={item.value} selected={item.value === value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}

SelectItem.defaultProps = {
  preClass: 'pf-select-item'
}
