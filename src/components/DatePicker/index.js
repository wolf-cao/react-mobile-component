import 'rmc-picker/assets/index.css'
import 'rmc-date-picker/assets/index.css'
import 'rmc-picker/assets/popup.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePickers from 'rmc-date-picker/lib/DatePicker'
import PopPicker from 'rmc-date-picker/lib/Popup'
import zh_CN from 'rmc-date-picker/lib/locale/zh_CN'
import en_US from 'rmc-date-picker/lib/locale/en_US'
import { cn, format, minDate, maxDate, now } from './utils'

class DatePicker extends Component {
  render() {
    const { children, ...restProps } = this.props
    const datePicker = <DatePickers {...restProps} locale={zh_CN} />
    return (
      <div>
        <PopPicker
          {...restProps}
          datePicker={datePicker}
          okText={'确认'}
          dismissText={'取消'}
          transitionName="rmc-picker-popup-slide-fade"
          maskTransitionName="rmc-picker-popup-fade"
        >
          {children}
        </PopPicker>
      </div>
    )
  }
}
export default DatePicker
