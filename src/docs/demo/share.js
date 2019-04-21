import React, { Component } from 'react'
import { Share, Button, WhiteSpace } from '../../components/index'

export default class ShareDemo extends Component {
  render() {
    const configs = {
      title: '用nodejs搭建代理服务器',
      desc: '用nodejs搭建',
      link: window.location.href,
      imgUrl: 'https://avator.eastmoney.com/qface/2513055024179158/50',
      from: '东方财富私募移动版'
    }
    return (
      <div>
        <WhiteSpace />
        <Share config={configs}>
          <Button type="primary">默认分享按钮</Button>
        </Share>
        <WhiteSpace />
        <Share config={configs} type="message">
          <Button type="primary">分享到微信好友</Button>
        </Share>
        <WhiteSpace />
        <Share config={configs} type="timeline">
          <Button type="primary">分享到微信朋友圈</Button>
        </Share>
        <WhiteSpace />
        <Share config={configs} type="qzone">
          <Button type="primary">分享到qqZone</Button>
        </Share>
        <WhiteSpace />
        <Share config={configs} type="weibo">
          <Button type="primary">分享到微博</Button>
        </Share>
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
        <br />
        123123213
      </div>
    )
  }
}
