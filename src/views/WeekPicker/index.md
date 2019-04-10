
## WeekPicker 周选择器

选择一个范围内的周。

### 基础用法

:::demo 
```html
<template>
  <div>
    <cm-week-picker
      v-model="weekRange"
      format="yyyy 第 WW 周">
    </cm-week-picker>
    {{weekRange}}
  </div>
</template>

<script>
import CmWeekPicker from 'chaomeng-ui/CmWeekPicker'
export default {
  name: 'WeekPicker',
  components: {
    CmWeekPicker
  },
  data () {
    return {
      weekRange: []
    }
  }
}
</script>

```
:::

### WeekPicker 属性

|参数|说明|类型|默认值|
|----|----|---|----|
|value|绑定的值，日期格式为Date对象|array|-|
|start-placeholder|开始日期的占位内容|string|开始日期|
|end-placeholder|结束日期的占位内容|string|结束日期|
|format|显示再输入框的格式，具体参考<a href="http://element-cn.eleme.io/#/zh-CN/component/date-picker#ri-qi-ge-shi" target="_blank">ElementUI format</a>|string|-|
|size|输入框尺寸|string|large, small, mini|
|clearable|是否显示清除按钮|boolean|true|
|readonly|只读|boolean|false|
|clear-icon|删除按钮图标|string|el-icon-circle-close|
|range-separator|分隔符|string|“-”|
|picker-option-start|开始日期选择器的特有选项，具体参考<a href="http://element-cn.eleme.io/#/zh-CN/component/date-picker#picker-options" target="_blank">ElementUI Picker Options</a>|object|{}|
|picker-option-end|结束日期选择器的特有选项，具体参考<a href="http://element-cn.eleme.io/#/zh-CN/component/date-picker#picker-options" target="_blank">ElementUI Picker Options</a>|object|{}|

### WeekPicker 事件

|事件名称|说明|回调参数|
|----|----|---|
|change|值改变时触发|当前值，array|
