import React, { Component } from 'react'
import { Toast, Button, WhiteSpace, WingSpace } from '../../components/index'

export default class ToastDemo extends Component {
  toastSuccess = () => {
    Toast.success('您的审核材料已上传成功!')
  }

  toastFailed = () => {
    Toast.fail('您的审核材料不符合要求!')
  }

  toastInfo = () => {
    Toast.info('请上传投资审核的材料!', () => {
      console.log(123)
    })
  }

  render() {
    return (
      <WingSpace size="lg">
        <WhiteSpace size="lg" />
        <Button onClick={this.toastSuccess}>success</Button>
        <WhiteSpace size="lg" />
        <Button onClick={this.toastFailed}>failed</Button>
        <WhiteSpace size="lg" />
        <Button onClick={this.toastInfo}>info</Button>
      </WingSpace>
    )
  }
}
