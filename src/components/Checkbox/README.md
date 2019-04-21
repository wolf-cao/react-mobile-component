## Checkbox

#### 属性

属性名|类型|默认值|说明|其他值
:---		|:--		|:--		|:--		|:--
checked	|enum	|		|		|`0`, `1`, `2`
defaultChecked 	| enum	|0 		|是否默认选中 |`0`, `1`, `2`
name		|string|		|		|		|
className|string 	|--		|自定义class	|
onChange |function	|--			|change事件(e:Event, checked:Number)|

#### 例子

```
<Checkbox defaultChecked onChange={this.handleChange} />
```