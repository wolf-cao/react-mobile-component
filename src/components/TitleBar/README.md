## TitleBar(标题栏)

#### 属性

| 属性名  | 类型              | 默认值 | 说明     | 其他值 |
| :------ | :---------------- | :----- | :------- | :----- |
| title   | string 或 element |        | 标题内容 |        |
| extra   | element           |        | 右侧内容 |        |
| onClick | function          |        |          |        |

#### 例子

```
<TitleBar
  title="具体材料形式及说明："
  extra={
    <Button type="primary" size="md" ghost inline>
      更多
    </Button>
  }
/>
```
