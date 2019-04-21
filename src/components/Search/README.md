## Search(搜索)

#### 属性

| 属性名      | 类型                                                                                 | 默认值   | 说明                   | 其他值 |
| :---------- | :----------------------------------------------------------------------------------- | :------- | :--------------------- | :----- |
| placeholder | string                                                                               | "请输入" | 输入框中的默认的文字   |        |
| onChange    | function(target,value) 注：target 是事件属性可返回事件的目标节点，value 是输入框内容 | ""       | 输入框内容变化时的回调 |

注：Input 的其他属性和 React 自带的 input 一致。

#### 例子

```
  state = {
    value: ''
  }

 dataChange = (target, value) => {
    this.setState({
      value: value
    })
  }

 <Search id="input" onChange={this.dataChange} onClear={this.onClear} />
```
