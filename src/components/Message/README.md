## Message(重要提示信息)

#### 属性

| 属性名          | 类型                  | 默认值  | 说明                     | 其他值          |
| :-------------- | :-------------------- | :------ | :----------------------- | :-------------- |
| mode            | string                |         | 颜色类型                 | `warning`       |
| icon            | string                |         | 左侧 icon                |
| color           | string                | #f76a24 | 字体颜色                 |
| backgroundColor | string                | #fefcec | 背景颜色                 |
| action          | string                |         | 关闭类型、链接跳转类型   | `close`, `link` |
| onClick         | function(elementNode) |         | 点击关闭或跳转链接的回调 |

#### 例子

```
handleClick = element => {
  element.style.display = 'none'
}

<Message mode="warning" action="close" icon="systemprompt" onClick={this.handleClick}>火速预定中</Message>
```
