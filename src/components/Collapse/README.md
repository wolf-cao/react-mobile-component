## Collapse(折叠面板)

#### 属性

| 属性名 | 类型              | 默认值 | 说明 | 其他值 |
| :----- | :---------------- | :----- | :--- | :----- |
| title  | string or element |        | 标题 |

#### 例子

```
const titleElement = (
  <div className="customize-title-element">
    <Icon name="gou" />
    <div className="customize-title-content">
      人民日报13篇重磅文章,解析实践中产生的新思想解析实践中产生的新思想
    </div>
  </div>
)

<Collapse title={titleElement}>
  <div className="collapse-content-item">
    “担保物转入”与“担保物转出”：投资者普通证券账户与信用证券账户之间的担保品的提交或返还。
  </div>
</Collapse>

<Collapse title="人民日报13篇重磅文章">
  <div className="collapse-content-item">
    习近平强调：“时代是思想之母，实践是理论之源”，一句话道尽思想与实践之间的辩证关系。
  </div>
</Collapse>
```
