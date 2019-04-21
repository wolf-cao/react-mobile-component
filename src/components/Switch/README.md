## Switch(开关)

#### 属性

属性名|类型|默认值|说明|其他值
:---		|:--		|:--		|:--		|:--
checked	|bool	|false		||true
disabled	| bool	| false		|是否禁用| true
color	|string	|#4dd865		|开关颜色	|
onClick	|function	|		|开或关的回调	|

#### 例子

```
<Switch checked={switchChecked} onClick={this.handleClick} />
```