<script>
import CmTagSelect from 'chaomeng-ui/CmTagSelect'
export default {
  components: {
    CmTagSelect
  },
  data () {
    return {
      selected: [],
      phone: '',
      phones: [
        {
          label: '小米',
          value: 'mi'
        },
        {
          label: '华为',
          value: 'HUAWEI'
        },
        {
          label: '苹果',
          value: 'apple'
        },
        {
          label: 'OPPO',
          value: 'OPPO'
        }
      ]
    }
  }
}
</script>
## TagSelect 标签选择器

常用于对列表进行筛选。

### 基础用法

:::demo 
```html
<template>
  <div>
    <label>品牌：</label>
    <cm-tag-select :value-list="phones" v-model="phone"></cm-tag-select>
    <p>{{phone}}</p>
  </div>
</template>

<script>
import CmTagSelect from 'chaomeng-ui/CmTagSelect'
export default {
  name: 'TagSelect',
  components: {
    CmTagSelect
  },
  data () {
    return {
      phone: '',
      phones: [
        {
          label: '小米',
          value: 'mi'
        },
        {
          label: '华为',
          value: 'HUAWEI'
        },
        {
          label: '苹果',
          value: 'apple'
        },
        {
          label: 'OPPO',
          value: 'OPPO'
        }
      ]
    }
  }
}
</script>

```
:::

### 基础多选

:::demo 为`cm-tag-select`设置`multiple`属性即可，此时`v-model`绑定的值为当前选中的值组成的数组。
```html
<template>
  <div>
    <label>品牌：</label>
    <cm-tag-select :value-list="phones" v-model="selected" multiple></cm-tag-select>
    <p>{{selected}}</p>
  </div>
</template>

<script>
import CmTagSelect from 'chaomeng-ui/CmTagSelect'
export default {
  name: 'TagSelect',
  components: {
    CmTagSelect
  },
  data () {
    return {
      selected: [],
      phones: [
        {
          label: '小米',
          value: 'mi'
        },
        {
          label: '华为',
          value: 'HUAWEI'
        },
        {
          label: '苹果',
          value: 'apple'
        },
        {
          label: 'OPPO',
          value: 'OPPO'
        }
      ]
    }
  }
}
</script>

```
:::

### TagSelect 属性

|参数|说明|类型|默认值|
|----|----|---|----|
|value|绑定的值|-|-|
|value-list|可选择的数据源，键值对可以通过`props`设置|array|-|
|props|配置选项，详细见下表|object|{ value: 'value', label: 'label' }|

### props

|参数|说明|类型|默认值|
|----|----|---|----|
|value|value属性绑定的值|string|value|
|label|页面上显示的值|string|label|
|multiple|多选|boolean|false|

### TagSelect 事件

|事件名称|说明|回调参数|
|----|----|---|
|change|选项改变时触发|单选：{ value, index }<br/>多选：被选中的数组|
