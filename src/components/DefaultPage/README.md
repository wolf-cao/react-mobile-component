## DefaultPage(缺省页)

#### 属性

| 属性名     | 类型     | 默认值 | 说明           | 其他值                                          |
| :--------- | :------- | :----- | :------------- | :---------------------------------------------- |
| type       | string   |        | 缺省类型       | `noproduct`, `nodata`, `nocomment`, `nonetwork` |
| text       | string   |        | 提示文案       |
| renderText | string   |        | 自定义提示文案 |
| onClick    | function |        | 点击回调       |

#### 例子

```
<DefaultPage
  type="noproduct"
  text="暂无产品"
  renderText={this.getRenderText}
/>
```
