import React, { Component } from 'react'
import { SelectTabs } from '../../components/index'

export default class screenDemo extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          value: "投资策略",
          label:'fsfsdfdsfdsdf',
          screenType: 1,
          children: [
            {
              value: "股票策略",
              id: false,
              state: true
            },
            {
              value: "事件驱动策略",
              id: false
            },
            {
              value: "相对价值",
              id: false
            },
            {
              value: "债券策略",
              id: false
            },
            {
              value: "管理期货策略",
              id: false
            },
            {
              value: "组合策略",
              id: false
            },
            {
              value: "相对价值",
              id: false
            },
            {
              value: "债券策略",
              id: false
            },
            {
              value: "相对价值",
              id: false
            },
            {
              
              value: "债券策略",
              id: false
            }
          ],
          selects: true
        },
        {
          value: "全部--",
          title: "今年以来",
          label:'fsfsdfdsfdsdfjjj',          
          screenType: 1,
          children: [
            {
              value: "全部时间",
              showValue: "全部--",
              id: false,
              state: true
              
            },
            {
              value: "事件驱动",
              id: false
            },
            {
              value: "今年以来",
              id: false
            }
          ],
          selects: false
        },
        {
          value: "产品状态",
          screenType: 1,
          children: [
            {
              value: "正在运行",
              id: false
            },
            {
              value: "已清盘",
              id: false
            }
          ],
          selects: true
        },
        {
          value: "成立时间",
          screenType: 1,
          children: [
            {
              value: "2018",
              id: false
            },
            {
              value: "2017",
              id: false
            }
          ],
          selects: false
        }
      ]
    }
  }

  // 筛选好的数据
  returnSelect = (data) => {
    console.log("筛选好的数据：1、原数据整理好的，2、元数据结构下的确认选项，3、所有选中的选项的列表")
    console.log(data)
    this.setState({
      data: data.newData
    })
  }

  render() {
    return (
      <div>
        <SelectTabs data={this.state.data}
          onSelect={this.returnSelect}
          color={'#a98b31'}
        />

        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1><h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1><h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1><h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        
      </div>
    )
  }
}
