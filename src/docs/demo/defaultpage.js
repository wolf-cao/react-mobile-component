import React, { Component } from 'react'
import { DefaultPage, WhiteSpace, Button, Icon } from '../../components/index'
import './defaultpage.less'

export default class DefaultPageDemo extends Component {
  state = {
    type: ''
  }

  getRenderText = () => {
    return (
      <a className="customize-default-no-product">
        查看在售产品 <Icon name="tiaozhuan" color="#999" />
      </a>
    )
  }

  getDefaultPage() {
    const { type } = this.state
    if (type === 'nodata') {
      return <DefaultPage type="nodata" text="暂无数据" />
    }
    if (type === 'noproduct') {
      return (
        <DefaultPage
          type="noproduct"
          text="暂无产品"
          renderText={this.getRenderText}
        />
      )
    }
    if (type === 'nocomment') {
      return <DefaultPage type="nocomment" text="你还没有发言" />
    }
    if (type === 'nonetwork') {
      return (
        <DefaultPage
          type="nonetwork"
          onClick={() => {
            location.reload()
          }}
        />
      )
    }
    if (type === 'syserr') {
      return (
        <DefaultPage
          type="syserr"
          onClick={() => {
            location.reload()
          }}
        />
      )
    }
  }

  setNoProduct = () => {
    this.setState({
      type: 'noproduct'
    })
  }

  setNoData = () => {
    this.setState({
      type: 'nodata'
    })
  }

  setNoComment = () => {
    this.setState({
      type: 'nocomment'
    })
  }

  setNoNetwork = () => {
    this.setState({
      type: 'nonetwork'
    })
  }

  setSysError = () => {
    this.setState({
      type: 'syserr'
    })
  }

  render() {
    const { type } = this.state
    return (
      <div>
        {!type && (
          <div>
            <Button type="primary" onClick={this.setNoProduct}>
              暂无产品
            </Button>
            <WhiteSpace />
            <Button type="primary" onClick={this.setNoData}>
              暂无数据
            </Button>
            <WhiteSpace />
            <Button type="primary" onClick={this.setNoComment}>
              你还没有发言
            </Button>
            <WhiteSpace />
            <Button type="primary" onClick={this.setNoNetwork}>
              暂无网络
            </Button>
            <WhiteSpace />
            <Button type="primary" onClick={this.setSysError}>
              系统错误
            </Button>
          </div>
        )}

        {type && this.getDefaultPage()}
      </div>
    )
  }
}
