<script>
import CmArrayInput from 'chaomeng-ui/CmArrayInput'
export default {
  name: 'Input',
  components: {
    CmArrayInput
  },
  data () {
    return {
      arrayInputData: ['vue', 'angularjs', 'react']
    }
  }
}
</script>
## ArrayInput 数组输入框

用于输出一组用指定字符隔开的数组

### 基本用法

:::demo 要使用 ArrayInput 组件，只需要设置`v-model`绑定变量
```html
<template>
    <div class="input-container">
      前端框架：{{arrayInputData}}
      <cm-array-input v-model="arrayInputData"></cm-array-input>
    </div>
</template>

<script>
export default {
  data () {
    return {
      arrayInputData: ['vue', 'angularjs', 'react']
    }
  }
}
</script>

```
:::

### ArrayInput 属性

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type| 输入框类型   | string  | text，textarea| text |
| value| 绑定值| array  | — | — |
| placeholder |输入框占位文本| string| —| — |
| clearable | 是否可清空 |boolean| — | false |
| disabled | 禁用| boolean| — | false   |
| readonly | 原生属性，是否只读 | boolean | — | false |
| size | 输入框尺寸 | string |small| false |
| separator | 分隔符 | string |—| "," |

### ArrayInput 事件

| 事件名          | 说明            | 回调参数            |
|-------------  |---------------- |---------------- |
| change         | 值改变时触发   | 改变的值|
