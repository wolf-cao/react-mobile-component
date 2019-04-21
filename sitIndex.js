import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'

import PageIndex from './src/docs/index'
import App from './src/docs/App'
import Badge from './src/docs/demo/badge'
import Button from './src/docs/demo/button'
import Card from './src/docs/demo/card'
import Carousel from './src/docs/demo/carousel'
import Checkbox from './src/docs/demo/checkbox'
import Collapse from './src/docs/demo/collapse'
import Dialog from './src/docs/demo/dialog'
import DatePicker from './src/docs/demo/datepicker'
import DatePickerRange from './src/docs/demo/datepickerrange'
import DefaultPage from './src/docs/demo/defaultpage'
import DigitalKeyboard from './src/docs/demo/digitalkeyboard'
import Forms from './src/docs/demo/form'
import Flex from './src/docs/demo/flex'
import Icon from './src/docs/demo/icon'
import Input from './src/docs/demo/input'
import ImagePicker from './src/docs/demo/imagepicker'
import List from './src/docs/demo/list'
import ListView from './src/docs/demo/listview'
import Message from './src/docs/demo/message'
import Picker from './src/docs/demo/picker'
import Popover from './src/docs/demo/popover'
import Radio from './src/docs/demo/radio'
import Result from './src/docs/demo/result'
import SwitchButton from './src/docs/demo/switch'
import Spin from './src/docs/demo/spin'
import Screen from './src/docs/demo/screen'
import Steps from './src/docs/demo/steps'
import Search from './src/docs/demo/search'
import Share from './src/docs/demo/share'
import Tabs from './src/docs/demo/tabs'
import Toast from './src/docs/demo/toast'
import TitleBar from './src/docs/demo/titlebar'
import WhiteSpace from './src/docs/demo/whitespace'
import WingSpace from './src/docs/demo/wingspace'

import './src/docs/App.less'

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" exact component={PageIndex} />
      <Route path="/api" exact component={App} />
      <Route path="/badge" component={Badge} />
      <Route path="/button" component={Button} />
      <Route path="/card" component={Card} />
      <Route path="/carousel" component={Carousel} />
      <Route path="/checkbox" component={Checkbox} />
      <Route path="/collapse" component={Collapse} />
      <Route path="/dialog" component={Dialog} />
      <Route path="/datepicker" component={DatePicker} />
      <Route path="/datepickerrange" component={DatePickerRange} />
      <Route path="/defaultpage" component={DefaultPage} />
      <Route path="/digitalkeyboard" component={DigitalKeyboard} />
      <Route path="/flex" component={Flex} />
      <Route path="/form" component={Forms} />
      <Route path="/icon" component={Icon} />
      <Route path="/input" component={Input} />
      <Route path="/imagepicker" component={ImagePicker} />
      <Route path="/list" component={List} />
      <Route path="/listview" component={ListView} />
      <Route path="/message" component={Message} />
      <Route path="/picker" component={Picker} />
      <Route path="/popover" component={Popover} />
      <Route path="/radio" component={Radio} />
      <Route path="/result" component={Result} />
      <Route path="/spin" component={Spin} />
      <Route path="/screen" component={Screen} />
      <Route path="/steps" component={Steps} />
      <Route path="/switch" component={SwitchButton} />
      <Route path="/search" component={Search} />
      <Route path="/share" component={Share} />
      <Route path="/titlebar" component={TitleBar} />
      <Route path="/toast" component={Toast} />
      <Route path="/tabs" component={Tabs} />
      <Route path="/wingspace" component={WingSpace} />
      <Route path="/whitespace" component={WhiteSpace} />
    </Switch>
  </HashRouter>,
  document.getElementById('App')
)
