## Share(分享组件)

#### 属性

| 属性名 | 类型   | 默认值 | 说明     | 其他值                                  |
| :----- | :----- | :----- | :------- | :-------------------------------------- |
| type   | string |        | 分享类型 | `timeline`, `message`, `qzone`, `weibo` |
| config | object |        | 分享内容 |

#### config 属性

| 属性名 | 类型   | 默认值 | 说明                                                                 | 其他值 |
| :----- | :----- | :----- | :------------------------------------------------------------------- | :----- |
| title  | string |        | 分享标题                                                             |        |
| desc   | string |        | 分享描述                                                             |        |
| link   | string |        | 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致 |        |
| imgUrl | string |        | 分享图标                                                             |        |
| from   | string |        | 分享来源                                                             |        |

#### 例子

```
const configs = {
  title: '用nodejs搭建代理服务器',
  desc: '用nodejs搭建',
  link: window.location.href,
  imgUrl: 'https://avator.xxxxx.com/xxxxx/2513055024179158/50',
  from: '移动版'
}

缺省type: 选择分享类型
指定type: 分享指定类型

<Share config={configs}>
  <a>click me</a>
</Share>
```
