##Tabs(轻提示框)

#### 属性

| 属性名         | 类型        | 默认值 | 说明                             | 必选  |
| :------------- | :---------- | :----- | :------------------------------- | :---- |
| tab            | array       |        | tabBar 名称                      | true  |
| tabBarPosition | top \bottom | 'top'  | TabBar 位置                      | false |
| pageSize       | number      | ''     | 当有多个的数据的时候默认每页数量 | false |

#### 例子

```
     <Tabs tab={tab}>
        <div style={tabsStyle}>{`我爱音乐音1`}</div>
        <div style={tabsStyle}>{`我爱电影2`}</div>
        <div style={tabsStyle}>{`我爱电视剧3`}</div>
        <div style={tabsStyle}>{`我爱篮球4`}</div>
      </Tabs>
```
