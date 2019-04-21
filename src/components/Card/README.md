## Card(卡片)

#### 属性

| 属性名           | 类型     | 默认值  | 说明                                                                 | 其他值 |
| :--------------- | :------- | :------ | :------------------------------------------------------------------- | :----- |
| type             | string   | ''      | 卡片类型                                                             | `news` |
| title            | string   |         | 主标题                                                               |
| arrow            | bool     | false   | 右侧箭头                                                             |        |
| subTitle         | string   |         | 副标题                                                               |
| avator           | string   |         | 头像 url                                                             |
| flow             | string   | `right` | 针对卡片类型为 news 的排列方向， right 表示图片在右，left 为图片在左 |
| pictureClassName | string   |         | 图片的自定义 classname                                               |
| content          | string   |         | 卡片内容                                                             |
| footer           | array    |         | 页脚内容                                                             |
| onClick          | function |         |                                                                      |

#### 例子

```
<Card
  title="上海泰旸资产管理有限公司"
  subTitle="2018-06-06 14:20"
  avator="http://172.30.64.81/uploads/-/system/appearance/header_logo/1/dfcf.png"
  content="释老毛：山西证券(002500) 在投资者互动平台表示，公司目前没有贾跃亭质押的乐视网股票；国金证券(600109)表示，公司无在途乐视网股票质押交易，截至目前，山西证券(002500)"
  footer={[
    <span>
      <Icon name="gou" />
      123
    </span>,
    <span>123</span>,
    <span>123</span>,
    <span>阅读 123</span>
  ]}
/>

<Card
  type="news"
  title="上海泰旸资产管理有限公司"
  avator="http://172.30.64.81/uploads/-/system/appearance/header_logo/1/dfcf.png"
  onClick={() => {
    console.log('click here')
  }}
/>
```
