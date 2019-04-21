### (步骤条)

#### 属性（Steps)

| 属性名    | 类型   | 默认值 | 说明 | 其他值 |
| :-------- | :----- | :----- | :--- | :----- |
| className | String |        |      |

#### 属性（Steps.Item）

| 属性名    | 类型    | 默认值 | 说明           | 其他值 |
| :-------- | :------ | :----- | :------------- | :----- |
| className | String  |        |                |
| arrow     | Bool    |        | 是否带箭头符号 |
| extra     | Element |        |                |
| finished  | Bool    |        | 是否完成       |

#### 例子,设置步骤条当前进行到第二步，显示为垂直方向，样式是 small

```
<Steps>
    <Steps.Item finished>
      <div className="result-title">10-29 周一</div>
      <div className="result-description">订单提交成功</div>
    </Steps.Item>
    <Steps.Item finished>
      <div className="result-title">预计1-2个交易日</div>
      <div className="result-description">人工回放确认</div>
    </Steps.Item>
    <Steps.Item finished>
      <div className="result-title">10-31 周三</div>
      <div className="result-description">产品开放日</div>
    </Steps.Item>
    <Steps.Item finished>
      <div className="result-title">预计2个交易日</div>
      <div className="result-description">确认份额净值和赎回费用</div>
    </Steps.Item>
    <Steps.Item finished>
      <div className="result-title">预计7个交易日</div>
      <div className="result-description">资金到账</div>
    </Steps.Item>
    <Steps.Item finished>
      <div className="result-success">购买成功</div>
    </Steps.Item>
</Steps>
```
