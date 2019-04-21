## DigitalKeyboard(数字键盘)

#### 属性

| 属性名 | 类型 | 默认值 | 说明 | 其他值 |

## DigitalKeyboard(数字键盘)

#### 属性

| 属性名      | 类型                                   | 默认值   | 说明                                                 | 其他值                                                        |
| :---------- | :------------------------------------- | :------- | :--------------------------------------------------- | :------------------------------------------------------------ |
| placeholder | string                                 | "请输入" | 输入框中的默认的文字                                 |                                                               |
| onChange    | function(value) 注：value 是输入框内容 | ""       | 输入框内容变化时的回调                               |
| type        | string                                 | 'number' |                                                      | 注：number 为任意数；money：小数点保留两位；int：只能输入整数 |
| maxlength   | number                                 | 10       | 注：type 为 money 时只保留小数点两位，maxlength 失效 |                                                               |
| onConfirm   | function(value) 注：value 是输入框内容 |
| className   | string                                 | ''       | 自定义样式                                           |
| value       | string /number                         | ''       | 输入框的自定义的值                                   |                                                               |

#### 例子

```
        <DigitalKeyboard
          onChange={val => {
            this.setState({
              value: val
            })
          }}
          value={value}
          className=""
          onConfirm={val => {
            console.log(val, 'value')
          }}
        />
```
