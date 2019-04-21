## Carousel

#### 属性

| 属性名 | 类型  | 默认值 | 说明 | 其他值 |
| :----- | :---- | :----- | :--- | :----- |
| images | array |        |      |        |

#### images 属性

| 属性名 | 类型     | 默认值 | 说明           | 其他值 |
| :----- | :------- | :----- | :------------- | :----- |
| url    | string   |        | 图片地址       |        |
| click  | function |        | 图片的点击事件 |        |

#### 例子

```
const imgArrs = [
  {
    image: 'http://g1.dfcfw.com/g3/201809/20180925143740.jpg',
    url: 'http://www.baidu.com'
  },
  {
    image: 'http://g1.dfcfw.com/g3/201809/20180925143740.jpg',
    url: 'http://www.alipay.com'
  },
  {
    image: 'http://g1.dfcfw.com/g3/201809/20180925143740.jpg',
    url: 'http://www.sina.com'
  }
]

const images = imgArrs.map(item => ({
  url: item.image,
  click: () => {
    this.handleClick.call(this, item.url)
  }
}))

<Carousel images={images} />
```
