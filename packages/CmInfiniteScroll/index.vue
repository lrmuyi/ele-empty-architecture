<template>
  <div class="cm-infiniteScroll" :style="{ 'max-height': height}">
    <div class="cm-infiniteScroll-content__body">
      <slot></slot>
    </div>
    <div class="cm-infiniteScroll-loading" v-if="loading">
      <img class="cm-icon-loading" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQyMzM3MTE1MjU3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyMDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjI2LjM0NDk2IDEyMS44MzA0YzAgNTMuMTUwNzItNDMuMDc5NjggOTYuMjMwNC05Ni4yMzA0IDk2LjIzMDQtNTMuMTQ1NiAwLTk2LjIzMDQtNDMuMDc5NjgtOTYuMjMwNC05Ni4yMzA0QzQzMy44ODkyOCA2OC42Nzk2OCA0NzYuOTY4OTYgMjUuNiA1MzAuMTE0NTYgMjUuNmM1My4xNDU2IDAgOTYuMjMwNCA0My4wODQ4IDk2LjIzMDQgOTYuMjMwNHpNNTMwLjExNDU2IDgzMy45OTY4Yy00Ni41MDQ5NiAwLTg0LjE5ODQgMzcuNjk4NTYtODQuMTk4NCA4NC4xOTg0czM3LjY5ODU2IDg0LjE5ODQgODQuMTk4NCA4NC4xOTg0IDg0LjE5ODQtMzcuNjk4NTYgODQuMTk4NC04NC4xOTg0LTM3LjY5MzQ0LTg0LjE5ODQtODQuMTk4NC04NC4xOTg0eiBtMzk4LjE4NzUyLTI1My44MzkzNmMtMzMuMjE4NTYgMC02MC4xNDQ2NC0yNi45MjA5Ni02MC4xNDQ2NC02MC4xNDQ2NCAwLTMzLjIxODU2IDI2LjkyNjA4LTYwLjE0NDY0IDYwLjE0NDY0LTYwLjE0NDY0IDMzLjIyMzY4IDAgNjAuMTQ0NjQgMjYuOTI2MDggNjAuMTQ0NjQgNjAuMTQ0NjQtMC4wMDUxMiAzMy4yMTg1Ni0yNi45MzEyIDYwLjE0NDY0LTYwLjE0NDY0IDYwLjE0NDY0ek0yMjguMTU3NDQgNTIwLjAxMjhjMC01My4xNDU2LTQzLjA3OTY4LTk2LjIzMDQtOTYuMjMwNC05Ni4yMzA0LTUzLjE0NTYgMC05Ni4yMzA0IDQzLjA3OTY4LTk2LjIzMDQgOTYuMjMwNCAwIDUzLjE0NTYgNDMuMDc5NjggOTYuMjMwNCA5Ni4yMzA0IDk2LjIzMDQgNTMuMTUwNzIgMCA5Ni4yMzA0LTQzLjA4NDggOTYuMjMwNC05Ni4yMzA0eiBtODguNDQ4LTM0OS41OTg3MmMzNy41ODA4IDM3LjU4MDggMzcuNTgwOCA5OC41MDg4IDAgMTM2LjA4NDQ4LTM3LjU4MDggMzcuNTgwOC05OC41MDg4IDM3LjU4MDgtMTM2LjA4OTYgMHMtMzcuNTgwOC05OC41MDg4IDAtMTM2LjA4OTYgOTguNTA4OC0zNy41ODA4IDEzNi4wODk2IDAuMDA1MTJ6IG00NDQuMDM3MTIgNTgwLjEyNjcyYy0yOC4xODU2IDI4LjE4NTYtMjguMTg1NiA3My44ODE2LTAuMDA1MTIgMTAyLjA2NzIgMjguMTg1NiAyOC4xODU2IDczLjg4MTYgMjguMTg1NiAxMDIuMDY3MiAwIDI4LjE4NTYtMjguMTg1NiAyOC4xODU2LTczLjg4MTYgMC0xMDIuMDY3Mi0yOC4xODA0OC0yOC4xOTA3Mi03My44NzY0OC0yOC4xOTA3Mi0xMDIuMDYyMDggMHogbTg1LjA1ODU2LTQ3OC4wNjQ2NGMtMTguNzkwNCAxOC43OTA0LTQ5LjI1OTUyIDE4Ljc5MDQtNjguMDM5NjggMC0xOC43OTU1Mi0xOC43OTU1Mi0xOC43OTU1Mi00OS4yNTk1MiAwLTY4LjA0NDhhNDguMDk3MjggNDguMDk3MjggMCAwIDEgNjguMDM5NjggMGMxOC43OTA0IDE4Ljc5MDQgMTguNzkwNCA0OS4yNTk1MiAwIDY4LjA0NDh6TTMxNi42MDU0NCA3MzMuNTI3MDRjLTM3LjU4MDgtMzcuNTgwOC05OC41MDg4LTM3LjU4MDgtMTM2LjA4OTYgMHMtMzcuNTgwOCA5OC41MDg4IDAgMTM2LjA4NDQ4YzM3LjU4MDggMzcuNTgwOCA5OC41MDg4IDM3LjU4MDggMTM2LjA4NDQ4IDAgMzcuNTgwOC0zNy41NzU2OCAzNy41ODA4LTk4LjUwMzY4IDAuMDA1MTItMTM2LjA4NDQ4eiIgZmlsbD0iIzQwOWVmZiIgcC1pZD0iMjIwNCI+PC9wYXRoPjwvc3ZnPg==">
      {{loadingText}}
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  name: 'CmInfiniteScroll',
  props: {
    height: {
      type: String,
      default: '300px'
    },
    threshold: {
      type: Number,
      default: 0
    },
    loadingText: {
      tyep: String,
      default: '正在加载...'
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.scrollHandler = debounce(() => {
      // 获取容器的height
      const containerHeight = this.$el.offsetHeight
      // 获取内容的height
      const contentBodyHeight = this.$el.querySelector('.cm-infiniteScroll-content__body').offsetHeight
      // 获取滚动的height
      const scrollHeight = Math.ceil(this.$el.scrollTop)
      if ((containerHeight + scrollHeight + this.threshold) >= contentBodyHeight) {
        this.emitScrollToBottom()
      }
    }, 100)
    this.$el.addEventListener('scroll', this.scrollHandler)
  },
  destroyed () {
    this.$el.removeEventListener('scroll', this.scrollHandler)
  },
  methods: {
    emitScrollToBottom () {
      this.$emit('scroll-to-bottom', this.$el)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  .cm-infiniteScroll {
    width: 100%;
    overflow-y: auto;
    .cm-infiniteScroll-content__body {
      width: 100%;
    }
    .cm-infiniteScroll-loading {
      width: 100%;
      height: 25px;
      padding: 20px 0;
      background-color: #ffffff;
      box-sizing: content-box;
      text-align: center;
      line-height: 25px;
    }
    .cm-icon-loading{
      width: 20px;
      height: 100%;
      -webkit-animation:rotating 2s linear infinite;
      animation:rotating 2s linear infinite;
      vertical-align: bottom;
    }
  }
</style>
