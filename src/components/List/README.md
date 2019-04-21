## List(列表)

#### List 属性

| 属性名       | 类型     | 默认值 | 说明         | 其他值 |
| :----------- | :------- | :----- | :----------- | :----- |
| renderHeader | function |        | 列表头部文案 |
| renderFooter | function |        | 列表尾部文案 |

#### List.Item 属性

| 属性名        | 类型             | 默认值 | 说明                                                   | 其他值 |
| :------------ | :--------------- | :----- | :----------------------------------------------------- | :----- |
| extra         | string \ element |        | 行右侧内容                                             |
| long          | bool             | false  | 是否为长文本(如 公司简介)                              |
| arrow         | bool             | false  | 是否显示箭头图标                                       |
| fullRow       | bool             | false  | 列表的下分割线是否是通栏的                             |
| noLine        | bool             | false  | 是否要显示下分割线                                     |
| result        | bool             | false  | 普通列表：左边字深，右边字浅；result 模式下,颜色反过来 |
| leftIcon      | string           |        | 如果要在行左侧显示图标，需要设置图标名                 |
| leftIconColor | string           |        | 图标颜色                                               |
| onClick       | function         |        |                                                        |

#### 例子

```
<List renderHeader={() => '头部信息' renderFooter={() => '尾部信息'}}>
	<List.Item extra="前海天下资本管理" arrow>基金公司</List.Item>
	<List.Item arrow leftIcon="right" leftIconColor="#6abf47" extra="稳健型">风险评估预测检查</List.Item>
	<List.Item extra={description} long>公司介绍</List.Item>
</List>
```
