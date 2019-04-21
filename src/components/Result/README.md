## Result(结果页)

#### 属性

| 属性名        | 类型     | 默认值 | 说明                                | 其他值                            |
| :------------ | :------- | :----- | :---------------------------------- | :-------------------------------- |
| mode          | string   |        | 结果页的类型                        | `error`, `wait`, `off`, `success` |
| imageIcon     | string   |        | 自定义头部图片 url，替换上方的 icon |                                   |
| title         | function |        | 主标题                              |
| subTitle      | function |        | 副标题                              |
| renderContent | function |        | 副标题区域自定义                    |
| buttonText    | string   |        | 按钮文字                            |
| onClick       | function |        | 点击关闭的回调                      |

#### 例子

```
<Result
  mode="error"
  title={() => '订单审核失败，可用资金不足'}
  subTitle={() => (
    <div>
      请注意相关要求并重新提交订单，下单过程中如有疑问，请联系客服
      <em style={{ fontStyle: 'normal', color: '#ea5504' }}>95357</em>
    </div>
  )}
  buttonText="重新下单"
  onClick={this.handleReset}
/>
```
