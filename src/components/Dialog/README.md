## Dialog(弹框)

#### 属性

| 属性名      | 类型     | 默认值 | 说明                           | 其他值         |
| :---------- | :------- | :----- | :----------------------------- | :------------- |
| className   |          |        | 定制的 className, 用于样式修改 |                |
| visible     | bool     | false  | 是否显示弹窗                   |                |
| animation   | string   |        | 弹窗显示的动画效果             | `zoom`, `fade` |
| confirmText | string   |        | 确认按钮的文案                 |                |
| cancelText  | string   |        | 取消按钮的文案                 |                |
| onConfirm   | function |        | 确认按钮的回调                 |                |
| onCancel    | function |        | 取消按钮的回调                 |                |
| footer      | element  |        | dialog 的 自定义 footer        |                |
| noClose     | bool     | false  | 是否隐藏 close 图标            |                |

#### 例子

```
<Dialog
  visible={this.state.visible}
  onClose={this.handleCloseEvent}
  animation="zoom"
  confirmText="确认"
  cancelText="取消"
  onConfirm={this.handleCloseEvent}
  onCancel={this.handleCloseEvent}
>
  <div>123</div>
  <div>123</div>
  <div>123</div>
</Dialog>
```
