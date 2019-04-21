import React, { Component } from 'react'
import moment from 'moment-mini'
import { DatePickerRange, List } from '../../components/index'

export default class DatePickerRangeDemo extends Component {
  state = {
    rangeValue: {
      start: '',
      end: ''
    }
  }

  render() {
    const { rangeValue } = this.state

    return (
      <List>
        <DatePickerRange
          title="时间范围选择"
          maxRange={15}
          onRangeConfirm={rangeValue => {
            this.setState({
              rangeValue
            })
          }}
        >
          <List.Item
            extra={
              !rangeValue.start || !rangeValue.end
                ? ''
                : `${moment(rangeValue.start).format('YYYY.MM.DD')}-${moment(
                    rangeValue.end
                  ).format('YYYY.MM.DD')}`
            }
            arrow
          >
            选择时间范围
          </List.Item>
        </DatePickerRange>
      </List>
    )
  }
}
