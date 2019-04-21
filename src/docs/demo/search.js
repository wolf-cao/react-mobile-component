import React, { Component } from 'react'
import { Search, WhiteSpace, WingSpace } from '../../components/index'

export default class SearchDemos extends Component {
  state = {
    value: ''
  }

  dataChange = (target, value) => {
    this.setState({
      value
    })
  }

  render() {
    const { value } = this.state
    return (
      <div style={{ backgroundColor: '#FFF', height: '100%' }}>
        <WingSpace>
          <WhiteSpace size="lg" />
          <Search onChange={this.dataChange} onClear={this.onClear} />
          <div style={{ textAlign: 'center' }}>{value}</div>
        </WingSpace>
      </div>
    )
  }
}
