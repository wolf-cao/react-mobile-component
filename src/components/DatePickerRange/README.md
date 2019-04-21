## DatePickerRange(日期范围选择)

#### 属性

| 属性名         | 类型     | 默认值 | 说明         | 其他值 |
| :------------- | :------- | :----- | :----------- | :----- |
| title          | string   |        | 标题         |        |
| maxRange       | number   | 30     | 最大跨度天数 |        |
| onRangeConfirm | function |        |              |        |
| onRangeCancel  | function |        |              |

#### 例子

```
<DatePickerRange
  title="时间范围选择"
  maxRange={15}
  onRangeConfirm={this.handleConfirm}
  onRangeCancel={this.handleCancel}
>
  <Button type="primary">选择时间范围</Button>
</DatePickerRange>
```
