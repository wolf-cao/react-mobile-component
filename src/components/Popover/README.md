## Popover(弹出气泡)

#### 属性

| 属性名          | 类型             | 默认值 | 说明                         | 其他值                            |
| :-------------- | :--------------- | :----- | :--------------------------- | :-------------------------------- |
| renderContent   | array && element |        | 弹出层内容                   |
| visible         | bool             |        | 当前显隐状态                 | (visible: bool): void             |
| onSelect        | function         |        | 选中某选项时的回调函数       | (node: any, index?: number): void |
| onVisibleChange | function         |        | call when visible is changed |

#### Popover.Item 属性

| 属性名  | 类型   | 默认值 | 说明         | 其他值 |
| :------ | :----- | :----- | :----------- | :----- |
| value   | string |        | 选项的值     |
| actived | bool   |        | 选项是否激活 |

#### 例子

```
const Item = Popover.Item

handleVisibleChange = visible => {
  this.setState({
    visible
  })
}

<Popover
  visible={visible}
  renderContent={[
    <Item value="max" actived={selectedValue === 'max'}>
      最多发布
    </Item>,
    <Item value="newest" actived={selectedValue === 'newest'}>
      最新发布
    </Item>
  ]}
  onVisibleChange={this.handleVisibleChange}
  onSelect={val => {
    this.setState({
      visible: false,
      selectedValue: val.props.value
    })
  }}
>
  <div>button</div>
</Popover>
```
