<script>
import CmInfiniteScroll from 'chaomeng-ui/CmInfiniteScroll'
export default {
  name: 'infiniteScroll',
  components: {
    CmInfiniteScroll
  },
  data () {
    return {
      loading: false,
      newsList: [
        { title: '新闻标题1', content: '内容1' },
        { title: '新闻标题2', content: '内容2' },
        { title: '新闻标题3', content: '内容3' },
        { title: '新闻标题4', content: '内容4' },
        { title: '新闻标题5', content: '内容5' }
      ]
    }
  },
  methods: {
    onScrollToBottom () {
      this.loading = true
      setTimeout(() => {
        this.newsList.push({
          title: `新闻标题${this.newsList.length + 1}`,
          content: `内容${this.newsList.length + 1}`
        })
        this.loading = false
      }, 1500)
    }
  }
}
</script>

## InfiniteScroll 无限滚动

滚动加载，滚动到底部后激活。

### 基础用法

:::demo
```html
<template>
  <div class="infiniteScroll-container">
    <cm-infinite-scroll
      class="infiniteScroll-swap"
      @scroll-to-bottom="onScrollToBottom">
      <ul>
        <li v-for="(news, index) in newsList" :key="index">
          <h2>{{news.title}}</h2>
          <p>{{news.content}}</p>
        </li>
      </ul>
    </cm-infinite-scroll>
  </div>
</template>

<script>
import CmInfiniteScroll from 'chaomeng-ui/CmInfiniteScroll'
export default {
  name: 'infiniteScroll',
  components: {
    CmInfiniteScroll
  },
  data () {
    return {
      newsList: [
        { title: '新闻标题1', content: '内容1' },
        { title: '新闻标题2', content: '内容2' },
        { title: '新闻标题3', content: '内容3' },
        { title: '新闻标题4', content: '内容4' },
        { title: '新闻标题5', content: '内容5' }
      ]
    }
  },
  methods: {
    onScrollToBottom () {
      setTimeout(() => {
        this.newsList.push({
          title: `新闻标题${this.newsList.length + 1}`,
          content: `内容${this.newsList.length + 1}`
        })
      }, 1500)
    }
  }
}
</script>

<style scoped>
  .infiniteScroll-swap {
    width: 500px;
  }
</style>

```
:::

### 带有loading

:::demo 只要加上`loading`即可
```html
<template>
  <div class="infiniteScroll-container">
    <cm-infinite-scroll
      class="infiniteScroll-swap"
      :loading="loading"
      @scroll-to-bottom="onScrollToBottom">
      <ul>
        <li v-for="(news, index) in newsList" :key="index">
          <h2>{{news.title}}</h2>
          <p>{{news.content}}</p>
        </li>
      </ul>
    </cm-infinite-scroll>
  </div>
</template>

<script>
import CmInfiniteScroll from 'chaomeng-ui/CmInfiniteScroll'
export default {
  name: 'infiniteScroll',
  components: {
    CmInfiniteScroll
  },
  data () {
    return {
      loading: false,
      newsList: [
        { title: '新闻标题1', content: '内容1' },
        { title: '新闻标题2', content: '内容2' },
        { title: '新闻标题3', content: '内容3' },
        { title: '新闻标题4', content: '内容4' },
        { title: '新闻标题5', content: '内容5' }
      ]
    }
  },
  methods: {
    onScrollToBottom () {
      this.loading = true
      setTimeout(() => {
        this.newsList.push({
          title: `新闻标题${this.newsList.length + 1}`,
          content: `内容${this.newsList.length + 1}`
        })
        this.loading = false
      }, 1500)
    }
  }
}
</script>

<style scoped>
  .infiniteScroll-swap {
    width: 500px;
  }
</style>

```
:::

### InfiniteScroll 属性

|参数|说明|类型|默认值|
|----|----|---|----|
|height|容器的高度|string|300px|
|threshold|距离滚动到底部的距离，用于提前触发 scroll-to-bottom 事件|number|0|
|loading|是否开始加载提示功能|boolean|false|
|loadingText|loading 显示的文字|string|正在加载...|

### InfiniteScroll 事件

|事件名称|说明|回调参数|
|----|----|---|----|
|scroll-to-bottom|滚动到底部|当前滚动组件的实例|
