import React, { Component } from 'react'
import axios from 'axios'
import {
  ImagePicker,
  WhiteSpace,
  WingSpace,
  Button,
  List,
  InputItem
} from '../../components/index'

const data = [
  {
    url:
      'https://gbres.dfcfw.com/Files/picture/20180820/950C022A45DE9696DCB4ED93837A03B0.png',
    id: '2121'
  },
  {
    url:
      'http://gbres.dfcfw.com/Files/picture/20170911/F23536BA201124069E9518F21026E4C1.png',
    id: '2122'
  }
]

class ImagePickerDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [],
      multiple: false,
      url: '',
      method: '',
      response: '',
      requestKey: ''
    }
  }
  onChange = (files, type, index) => {
    this.setState({
      files
    })
  }

  handleClick = () => {
    const { url, method, requestKey, files } = this.state
    if (!url || !method || !requestKey) {
      this.setState({
        response: 'any above param is empty'
      })
      return
    }

    let requestData = {}
    requestData[requestKey] = files

    if (method.toLowerCase() === 'get') {
      axios({
        method,
        url,
        params: requestData
      }).then(response => {
        console.log(response, 'res1')
        this.setState({
          response
        })
      })
    } else {
      axios({
        method,
        url,
        data: requestData
      }).then(response => {
        console.log(response, 'res2')
        this.setState({
          response
        })
      })
    }
  }

  handleInputUrl = url => {
    this.setState({
      url
    })
  }

  handleInputMethod = method => {
    this.setState({
      method
    })
  }

  handleInputKey = requestKey => {
    this.setState({
      requestKey
    })
  }

  render() {
    const { files, response } = this.state
    return (
      <div>
        <div className="title">图片上传</div>
        <List>
          <InputItem
            label="ajax地址"
            placeholder="请输入url"
            onInput={this.handleInputUrl}
          />
          <InputItem
            label="method"
            placeholder="请输入get/post"
            onInput={this.handleInputMethod}
          />
          <InputItem
            label="postKey"
            placeholder="请输入后端图片接受的key"
            onInput={this.handleInputKey}
          />
        </List>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 7}
          multiple={this.state.multiple}
        />
        <WhiteSpace size="lg" />
        <WingSpace size="lg">
          <Button type="primary" onClick={this.handleClick}>
            提交并审核
          </Button>
          <WhiteSpace size="lg" />
          {response}
        </WingSpace>
      </div>
    )
  }
}

export default ImagePickerDemo
