import React, { Component } from 'react'
import { Tabs } from '../../components/index'

class TabsDemo extends Component {
  constructor(props) {
    super(props)
  }
  onChange = value => {
    console.log(value, 'value')
  }

  render() {
    const tab = [
      {
        name: '认识私募'
      },
      {
        name: '投资要点'
      },
      {
        name: '风险风范'
      },
      {
        name: '法律法规'
      }
    ]

    const tabsStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '800px',
      backgroundColor: '#fff'
    }

    return (
      <Tabs tab={tab} onChange={this.onChange} defaultActiveKey="2">
        <div style={tabsStyle}>{`我爱音乐音1`}</div>
        <div style={tabsStyle}>{`我爱电影2`}</div>
        <div style={tabsStyle}>{`我爱电视剧3`}</div>
        <div style={tabsStyle}>{`我爱篮球4`}</div>
      </Tabs>
    )
  }
}

export default TabsDemo
