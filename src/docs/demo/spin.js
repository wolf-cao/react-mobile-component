import React, { Component } from 'react'
import {
  Spin,
  SpinUU,
  Button,
  WhiteSpace,
  WingSpace,
  Tabs
} from '../../components/index'

export default class SpinDeom extends Component {
  state = {
    loading: false
  }

  handleLoading = () => {
    this.setState(
      {
        loading: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            loading: false
          })
        }, 3000)
      }
    )
  }

  handleUufundLoading = () => {
    SpinUU().show('页面加载中...')
    setTimeout(() => {
      SpinUU().hide()
    }, 2000)
  }

  render() {
    const tab = [
      {
        name: '菊花加载'
      },
      {
        name: 'uufund图标加载'
      }
    ]

    return (
      <Tabs tab={tab}>
        <div>
          {this.state.loading ? <Spin /> : null}
          <WhiteSpace size="xl" />
          <WingSpace size="lg">
            <Button type="primary" onClick={this.handleLoading}>
              点击出现菊花
            </Button>
            <div>
              点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花点击出现菊花
            </div>
          </WingSpace>
        </div>
        <div>
          <div>
            <WhiteSpace size="xl" />
            <WingSpace size="lg">
              <WhiteSpace size="xl" />
              <Button type="primary" onClick={this.handleUufundLoading}>
                点击uufund加载
              </Button>
            </WingSpace>
          </div>
        </div>
      </Tabs>
    )
  }
}
