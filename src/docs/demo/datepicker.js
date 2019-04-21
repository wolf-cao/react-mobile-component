import React, { Component } from 'react'
import { DatePicker, List,Button } from '../../components/index'

export default class DatepickerDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dates: null
    }
  }
  format = date => {
    let mday = date.getDate()
    let month = date.getMonth() + 1
    month = month < 10 ? `0${month}` : month
    mday = mday < 10 ? `0${mday}` : mday
    return `${date.getFullYear()}-${month}-${mday} ${date.getHours()}:${date.getMinutes()}`
  }
  onChange = date => {
    this.setState({
      dates: this.format(date)
    })
  }
  render() {
    const { dates } = this.state
    return (
      <div>
        <List>
          <List.Item extra={dates}>现在选择的是</List.Item>
        </List>
        <DatePicker
          minDate={new Date(2015, 8, 15, 10, 30, 0)}
          maxDate={new Date(2019, 8, 15, 10, 30, 0)}
          mode={'datetime'}
          defaultDate={new Date()}
          title={'选择日期'}
          onChange={this.onChange}
        >
          <Button type="primary">{'打开时间控件'}</Button>
        </DatePicker>
      </div>
    )
  }
}
