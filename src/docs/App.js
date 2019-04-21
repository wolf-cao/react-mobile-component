import React, { Component } from 'react'
import { List } from '../components/index'

const Item = List.Item

export default class App extends Component {
  render() {
    return (
      <div>
        <List
          renderHeader={() => '移动web项目组件'}
          renderFooter={() => '移动web项目组件'}
        >
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('badge')
            }}
          >
            Badge
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('button')
            }}
          >
            Button
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('carousel')
            }}
          >
            Carousel
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('collapse')
            }}
          >
            Collapse
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('card')
            }}
          >
            Card
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('checkbox')
            }}
          >
            Checkbox
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('dialog')
            }}
          >
            Dialog
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('defaultpage')
            }}
          >
            DefaultPage
          </Item>
          <Item
            leftIconColor="#6abf47"
            leftIcon="gou"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('datepicker')
            }}
          >
            DatePicker
          </Item>
          <Item
            leftIconColor="#6abf47"
            leftIcon="gou"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('datepickerrange')
            }}
          >
            DatePickerRange
          </Item>
          <Item
            leftIconColor="#6abf47"
            leftIcon="gou"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('digitalkeyboard')
            }}
          >
            DigitalKeyboard
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('form')
            }}
          >
            Forms
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('flex')
            }}
          >
            Flex
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('icon')
            }}
          >
            Icons
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('input')
            }}
          >
            InputItem
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('imagepicker')
            }}
          >
            ImagePicker
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('picker')
            }}
          >
            Picker
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('popover')
            }}
          >
            Popover
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('radio')
            }}
          >
            RadioItem
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('list')
            }}
          >
            List
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('listview')
            }}
          >
            ListView
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('result')
            }}
          >
            Result
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('message')
            }}
          >
            Message
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('switch')
            }}
          >
            Switch
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('spin')
            }}
          >
            Loading
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('screen')
            }}
          >
            screen
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('steps')
            }}
          >
            steps
          </Item>
          <Item
            leftIconColor="#6abf47"
            leftIcon="gou"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('search')
            }}
          >
            Search
          </Item>
          <Item
            leftIconColor="#6abf47"
            leftIcon="gou"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('share')
            }}
          >
            Share
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('titlebar')
            }}
          >
            TitleBar
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('toast')
            }}
          >
            Toast
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('tabs')
            }}
          >
            Tabs
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('whitespace')
            }}
          >
            WhiteSpace
          </Item>
          <Item
            leftIcon="gou"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('wingspace')
            }}
          >
            Wingspace
          </Item>
        </List>
      </div>
    )
  }
}
