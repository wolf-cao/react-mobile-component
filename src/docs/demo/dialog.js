import React, { Component } from 'react'
import { Dialog, Button, WhiteSpace, WingSpace } from '../../components/index'

export default class DialogDemo extends Component {
  state = {
    visible1: false,
    visible2: false,
    visible3: false
  }

  handleShowEvent1 = () => {
    this.setState({
      visible1: true
    })
  }

  handleCloseEvent1 = () => {
    this.setState({
      visible1: false
    })
  }

  handleShowEvent2 = () => {
    this.setState({
      visible2: true
    })
  }

  handleCloseEvent2 = () => {
    this.setState({
      visible2: false
    })
  }

  handleShowEvent3 = () => {
    this.setState({
      visible3: true
    })
  }

  handleCloseEvent3 = () => {
    this.setState({
      visible3: false
    })
  }

  render() {
    return (
      <WingSpace size="lg">
        <WhiteSpace size="lg" />
        <Button type="primary" onClick={this.handleShowEvent1}>
          dialog提示框 - 带标题
        </Button>
        <WhiteSpace size="lg" />
        <Button type="primary" onClick={this.handleShowEvent2}>
          自定义footer的dialog
        </Button>
        <WhiteSpace size="lg" />
        <Button type="primary" onClick={this.handleShowEvent3}>
          不带close图标的dialog
        </Button>

        <Dialog
          title="提示框"
          visible={this.state.visible1}
          onClose={this.handleCloseEvent1}
          animation="zoom"
          confirmText="确认"
          cancelText="取消"
          onConfirm={this.handleCloseEvent1}
          onCancel={this.handleCloseEvent1}
        >
          <div>你确定要点我吗？</div>
        </Dialog>

        <Dialog
          visible={this.state.visible2}
          onClose={this.handleCloseEvent2}
          animation="zoom"
          footer={
            <WingSpace>
              <WhiteSpace />
              <Button
                type="primary"
                size="md"
                ghost
                inline
                onClick={this.handleCloseEvent2}
              >
                确定
              </Button>
              <WhiteSpace />
            </WingSpace>
          }
        >
          <div>你确定要点我吗？</div>
        </Dialog>

        <Dialog
          visible={this.state.visible3}
          animation="zoom"
          confirmText="拨打"
          cancelText="取消"
          noClose={true}
          onConfirm={this.handleCloseEvent3}
          onCancel={this.handleCloseEvent3}
          onClose={this.handleCloseEvent3}
        >
          <div style={{ textAlign: 'center' }}>
            <p>7×24小时客户服务热线</p>
            <WhiteSpace size="sm" />
            <p>95357</p>
          </div>
        </Dialog>
      </WingSpace>
    )
  }
}
