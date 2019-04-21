import React, { Component } from 'react'
import { Button } from '../components/index'
import '../components/Badge/style/index'
import '../components/Button/style/index'
import '../components/Card/style/index'
import '../components/Carousel/style/index'
import '../components/Checkbox/style/index'
import '../components/Collapse/style/index'
import '../components/Dialog/style/index'
import '../components/DefaultPage/style/index'
import '../components/DatePicker/style/index'
import '../components/DatePickerRange/style/index'
import '../components/DigitalKeyboard/style/index'
import '../components/Flex/style/index'
import '../components/Icon/style/index'
import '../components/InputItem/style/index'
import '../components/ImagePicker/style/index'
import '../components/List/style/index'
import '../components/ListView/style/index'
import '../components/Message/style/index'
import '../components/Picker/style/index'
import '../components/Popover/style/index'
import '../components/RadioItem/style/index'
import '../components/Result/style/index'
import '../components/Switch/style/index'
import '../components/Spin/style/index'
import '../components/SpinUU/style/index'
import '../components/Steps/style/index'
import '../components/SelectItem/style/index'
import '../components/Search/style/index'
import '../components/SelectTabs/style/index'
import '../components/Share/style/index'
import '../components/Tabs/style/index'
import '../components/TitleBar/style/index'
import '../components/Toast/style/index'
import '../components/WingSpace/style/index'
import '../components/WhiteSpace/style/index'

export default class PageIndex extends Component {
  render() {
    return (
      <Button
        onClick={() => {
          location.hash = '/api'
        }}
      >
        进入组件库
      </Button>
    )
  }
}
