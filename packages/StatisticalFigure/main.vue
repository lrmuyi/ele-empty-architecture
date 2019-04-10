
<template>
  <div :id="EchartId"
       :width="width"
       :height="height">
  </div>
</template>

<script>
import debounce from 'lodash.debounce'
import uuid from 'uuid/v1'
import echarts from 'echarts/lib/echarts'

export default {
  name: 'Chart',
  props: {
    option: {
      type: Object,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '372px'
    }
  },
  data () {
    return {
      EchartId: ''
    }
  },
  watch: {
    option: {
      deep: true,
      handler: function (newOption) {
        this.chart.setOption(newOption)
      }
    }
  },
  created () {
    this.EchartId = uuid() // 随机id
  },
  mounted () {
    this.initChart()
    this.resizeHandler = debounce(() => {
      // console.log(document.getElementById(this.EchartId).width)
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.resizeHandler)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeHandler)
  },
  methods: {
    initChart () {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(document.getElementById(this.EchartId))
      // 指定图表的配置项和数据
      this.chart.setOption(this.option)
    }
  }
}
</script>
