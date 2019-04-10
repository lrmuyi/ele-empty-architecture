
## Tab 选项卡

分隔内容上有关联但属于不同类别的数据集合。

### 基础用法

:::demo 需要同时导入`cm-tabs`和`cm-tab-item `
```html
<template>
  <div class="tab-container">
    <cm-tabs v-model="tabName" @tab-click="handleTabsClick">
      <cm-tab-item v-for="(book, index) in books" :key="index" :name="book.id">
        <h5>{{ book.name }}</h5>
        <p>{{ book.author }}</p>
        <p style="color:#999999">{{ book.price }}</p>
      </cm-tab-item>
    </cm-tabs>
  </div>
</template>

<script>
import CmTabs from 'chaomeng-ui/CmTabs'
import CmTabItem from 'chaomeng-ui/CmTabItem'
export default {
  name: 'tab',
  components: {
    CmTabs,
    CmTabItem
  },
  data () {
    return {
      tabName: '1',
      books: [
        {
          id: '1',
          name: '白夜行（2017版）',
          price: '￥41.10',
          author: '东野圭吾'
        },
        {
          id: '2',
          name: '解忧杂货店 [ナミヤ雑貨店の奇蹟]',
          price: '￥27.30',
          author: '东野圭吾'
        },
        {
          id: '3',
          name: '悲剧人偶',
          price: '￥37.10',
          author: '东野圭吾'
        }
      ]
    }
  },
  methods: {
    handleTabsClick (tab) {
      console.log('tabName:' + tab)
    }
  }
}
</script>
```
:::

### Tab 属性


|参数|说明|类型|
|----|----|---|
|value|当前激活tab的`name`值|string|
|name|与选项卡激活名称对应的标识符，表示选项卡别名|string|

### Tab 事件

|参数|说明|回调参数|
|----|----|---|
|tab-click|选项卡点击事件|被选中的标签的 name, 当前event|
