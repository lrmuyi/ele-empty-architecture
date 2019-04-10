<script>
import CmTrend from 'chaomeng-ui/CmTrend'
export default {
  name: 'trend',
  components: {
    CmTrend
  }
}
</script>

## CmTrend 趋势标识

趋势符号，标记上升和下降趋势。

### 基础用法

:::demo 
```html
<template>
  <div class="trend-container">
    <div class="trentItem">
      <cm-trend :value="12" unit="%"></cm-trend>
    </div>
    <div class="trentItem">
      <cm-trend :value="-12" unit="%"></cm-trend>
    </div>
  </div>
</template>
<script>
import CmTrend from 'chaomeng-ui/CmTrend'
export default {
  name: 'trend',
  components: {
    CmTrend
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .trentItem {
    display: inline-block;
    width: 50px;
  }
</style>

```
:::

### CmTrend 属性

|参数|说明|类型|默认值|
|----|----|---|----|
|value|绑定的值|number|-|
|unit|单位|string|-|
