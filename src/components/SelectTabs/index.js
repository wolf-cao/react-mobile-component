import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import SelectBox from './selectBox'
import SelectListBox from './selectListBox'

import TabTag from './tabTag'

function noop() {}

class SelectTabs extends Component {
  static childContextTypes = {
    onTag: PropTypes.func,
    onStateShow: PropTypes.func,
    color: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      dataList: [],
      active: null,
      screenData: {},
      selectState: false,
      selectData: {},
      selectStateShow: false
    }
  }

  // 基础数据处理
  componentWillMount() {
    let dataList = JSON.parse(JSON.stringify(this.props.data))
    let screenData = {}
    screenData.id = 'shaixuan'
    screenData.data = []

    dataList.map((item, index) => {
      // 是否含有“筛选的选项”
      if(item.screenType == 0 || item.screenType == 2){
        this.setState({
          selectStateShow: true
        })
      }
      item.state = false
      // 是否有默认显示的值
            
      if(!item.title){
        item.title = item.value
      }

      item.stateShow = false
      if (!item.id) {
        item.id = index
      }
      if (item.children) {
        item.children.map((items, index) => {
          if(!items.state){
            items.state = false
          }
          if (!items.id) {
            items.id = `${item.id}-${index}`
          }
        })
      }
    })
    // console.log(dataList)
    // 初始化
    // console.log(screenData.data)
    this.setState({
      dataList,
      screenData
    })
  }

  // 单筛选
  tabClick = data => {
    let screenData = this.state.screenData
    screenData.state = false
    screenData.data = []

    const id = data.id
    let selectData = {}
    let screenArr = []
    const dataList = this.state.dataList.map(item => {
      const newItem =
        id === item.id
          ? {
              ...item,
              state: !item.state
            }
          : {
              ...item,
              state: false
            }
      // 非筛选数列的
      if (id === item.id) {
        if (item.screenType > 0) {
          selectData.children = item.children ? item.children : []
          selectData.title = item.title
          selectData.selects = item.selects
          selectData.id = item.id
        }
      }
      return newItem
    })
    let selectState = false
    dataList.map(item => {
      selectState = selectState || item.state
    })

    this.setState({
      active: id,
      dataList,
      selectState,
      selectData,
      screenData
    })
  }
  // 复筛选
  tabScreenClick = data => {
    this.closeSelect()
    let screenData = this.state.screenData
    screenData.state = !screenData.state
    screenData.data = []
    // 从 state.dataList 刷新
    this.state.dataList.map(item => {
      if (!item.screenType || item.screenType === 2) {
        screenData.data.push(item)
      }
    })
    this.setState({
      active: data.id,
      screenData
    })
  }

  getChildContext() {
    return {
      onTag: this.tagClick,
      onStateShow: this.stateShow,
      color: this.props.color
    }
  }

  initTabState = () => {
    const dataList = this.state.dataList.map(item => {
      const newItem = {
        ...item,
        state: false
      }
      return newItem
    })
    this.setState({
      dataList
    })
  }

  closeSelect = () => {
    this.initTabState()
    let screenData = this.state.screenData
    screenData.state = false
    screenData.data = []
    this.setState({
      selectState: false,
      screenData
    })
  }

  // 点击收起
  stateShow = data => {
    const dataList = this.state.dataList.map(item => {
      const newItem =
        data.id === item.id
          ? {
              ...item,
              stateShow: !data.stateShow
            }
          : item
      return newItem
    })
    this.setState({
      dataList
    })
    // 刷新
    let screenData = this.state.screenData
    screenData.data = []
    dataList.map(item => {
      if (!item.screenType || item.screenType === 2) {
        screenData.data.push(item)
      }
    })
    this.setState({
      screenData
    })
  }

  // 点击标签
  tagClick = item => {
    // 单选
    if (!item.selects) {
      this.setState({
        selectState: false
      })
      this.initTab(item)
      return
    }
    // 多选
    this.initTab(item)
  }

  initTab = data => {
    let dataList = this.state.dataList
    // 父级 id
    let ids = data.id.slice(0, data.id.indexOf('-'))
    dataList.map((item, index) => {
      if (!data.selects) {
        item.state = false
      }
      if (!data.selects && item.id == ids) {
        // console.log(data)
        if(data.showValue){
          item.value = data.showValue
        }else{
          item.value = data.value
        }
      }
      if (item.children && item.id == ids) {
        item.children.map(child => {
          if (!data.selects) {
            child.state = false
          }
          if (child.id == data.id) {
            child.state = !child.state
          }
        })
      }
    })

    this.setState({
      dataList
    })
    // 单选且不是多列筛选的时候输出结果
    if (!data.selects && this.state.active !== 'shaixuan') {
      this.returnSelectEnd(dataList)
    }
  }
  isInArray = (arr, val) => {
    let testStr = '|' + arr.join('|') + '|'
    return testStr.indexOf('|' + val + '|') != -1
  }
  // 确定和重置
  resetBtn = (data, type) => {
    let dataId = []
    type
      ? data.map(item => {
          dataId.push(item.id)
        })
      : dataId.push(data.id)
    let dataList = this.state.dataList
    dataList.map((item, index) => {
      if (this.isInArray(dataId, item.id)) {
        if (item.children) {
          item.children.map(child => {
            child.state = false
          })
        }
      }
    })
    this.setState({
      dataList
    })
  }

  confirmBtn = () => {
    this.closeSelect()
    this.returnSelectEnd(this.state.dataList)
  }

  // 输出结果：
  returnSelectEnd = data => {
    let screenList = {
      newData: data,
      screenData: [],
      screenList: []
    }
    data.map(item => {
      let newItem = {}
      newItem.id = item.id
      newItem.label = item.label
      newItem.value = item.value
      newItem.children = []
      item.children.map(child => {
        if (child.state) {
          let newChild = {}
          newChild = child
          newChild.label = item.label
          newItem.children.push(newChild)
          screenList.screenList.push(newChild)
        }
      })
      if (newItem.children.length > 0) {
        screenList.screenData.push(newItem)
      }
    })

    this.props.onSelect(screenList)
  }

  // 右边的筛选
  render() {
    const selectClassName = classNames('pf-select-tabs', {
      [`pf-select-tabs-active`]:
        this.state.selectState || this.state.screenData.state
    })

    // let preHandler=function(e){e.preventDefault();}
    if(this.state.selectState){
      document.body.style.overflow='hidden'
      document.body.style.position='fixed'
    }else{
      document.body.style.overflow=''
      document.body.style.position=''      
    }
    
    return (
      <div className={selectClassName}>
        <div className="pf-content-head">
          {this.state.dataList.map(
            item =>
              item.screenType > 0 ? (
                <TabTag
                  key={item.id}
                  data={item}
                  tabClicks={this.tabClick}
                  color={this.props.color}
                />
              ) : null
          )}
          {this.state.selectStateShow ? (
            <TabTag
              active={true}
              data={this.state.screenData}
              tabScreenClicks={this.tabScreenClick}
              color={this.props.color}
            />
          ) : null}
        </div>
        {this.state.selectState ? (
          <div className="pf-content-wrap" onClick={this.closeSelect}>
            <SelectBox
              data={this.state.selectData}
              resetBtn={this.resetBtn}
              confirmBtn={this.confirmBtn}
            />
          </div>
        ) : null}
        {this.state.active === 'shaixuan' && this.state.screenData.state ? (
          <div className="pf-content-wrap">
            <SelectListBox
              data={this.state.screenData.data}
              resetBtn={this.resetBtn}
              confirmBtn={this.confirmBtn}
            />
          </div>
        ) : null}
      </div>
    )
  }
}

SelectTabs.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func,
  screen: PropTypes.bool,
  color: PropTypes.string
}

SelectTabs.defaultProps = {
  data: [],
  onSelect: noop,
  screen: false,
  color: '#a98b31'
}

export default SelectTabs
