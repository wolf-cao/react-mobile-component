import React, { Component } from 'react'
import RMCPicker from 'rmc-picker'
import RMCMultiPicker from 'rmc-picker/lib/MultiPicker'
import RMCPickerPopup from 'rmc-picker/lib/Popup'

export default class Picker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pickerValue: undefined
    }
  }

  getPopupContent() {
    const { data } = this.props
    return data.map((col, index) => {
      return (
        <RMCPicker key={index} style={{ flex: 1 }}>
          {col.map(item => {
            return (
              <RMCPicker.Item key={item.value} value={item.value}>
                {item.label}
              </RMCPicker.Item>
            )
          })}
        </RMCPicker>
      )
    })
  }

  setPickerValue = value => {
    this.setState({
      pickerValue: value
    })
  }

  onDismiss = () => {
    this.setPickerValue(undefined)
  }

  onOk = value => {
    if (this.props.value) {
      value = this.props.value
    }
    if (this.state.pickerValue !== undefined) {
      value = this.state.pickerValue
    }
    if (this.props.onChange) {
      this.props.onChange(value)
    }
    if (this.props.onOk) {
      this.props.onOk(value)
    }
  }

  onVisibleChange = visible => {
    !visible && this.setPickerValue(undefined)
    if (this.props.onVisibleChange) {
      this.props.onVisibleChange(visible)
    }
  }

  render() {
    const { pickerValue } = this.state
    const { children, title, value } = this.props

    let pickerContent = null
    pickerContent = (
      <RMCMultiPicker
        selectedValue={pickerValue || value}
        onScrollChange={this.setPickerValue}
      >
        {this.getPopupContent()}
      </RMCMultiPicker>
    )
    return (
      <RMCPickerPopup
        ref={pickermc => (this.pickermc = pickermc)}
        transitionName="rmc-picker-popup-slide-fade"
        maskTransitionName="rmc-picker-popup-fade"
        title={title}
        content={pickerContent}
        dismissText="取消"
        okText="确定"
        onDismiss={this.onDismiss}
        onOk={this.onOk}
        onVisibleChange={this.onVisibleChange}
      >
        {children}
      </RMCPickerPopup>
    )
  }
}

RMCPicker.defaultProps = {
  preCls: 'pf-picker'
}
