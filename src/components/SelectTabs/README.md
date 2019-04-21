## SelectTabs(筛选框)

#### 属性

属性名|类型|默认值|说明|数据格式
:---		|:--		|:--		|:--		|:--
data	|Array	|[ ]		|要筛选的数据|screenType类型 0:仅在“筛选中出现”，1：在“普通tab上显示”，2：两者都有显示。selects类型：true为多选，false为单选
onSelect	|func	|		|筛选结果|1、原数据整理好的，2、元数据结构下的确认选项，3、所有选中的选项的列表
color	|string	|#a98b31		|主题颜色	|

#### 例子

```
		data: [
        {
          value: "投资策略",
          screenType: 2,
          children: [
            {
              value: "股票策略"
            },
            {
              value: "事件驱动策略"
            },
            {
              value: "相对价值"
            },
            {
              value: "债券策略"
            },
            {
              value: "管理期货策略"
            },
            {
              value: "组合策略"
            },
            {
              value: "相对价值"
            },
            {
              value: "债券策略"
            },
            {
              value: "相对价值"
            },
            {
              
              value: "债券策略"
            }
          ],
          selects: true
        },
        {
          value: "今年以来",
          screenType: 1,
          children: [
            {
              value: "股票策略"
            },
            {
              value: "事件驱动"
            },
            {
              value: "今年以来"
            }
          ],
          selects: false
        },
        {
          value: "产品状态",
          screenType: 2,
          children: [
            {
              value: "正在运行"
            },
            {
              value: "已清盘"
            }
          ],
          selects: true
        },
        {
          value: "成立时间",
          screenType: 0,
          children: [
            {
              value: "2018"
            },
            {
              value: "2017"
            }
          ],
          selects: false
        }
      ]
...
<SelectTabs data={this.state.data} onSelect={this.returnSelect}/>
```