<template>
  <chart :option="option"
         :style="{width:width,height:height}">
  </chart>
</template>
<script>
import Chart from '../main'
require('echarts/lib/chart/pie')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
// 引入提示框和标题组件
export default {
  name: 'LineChart',
  components: {
    Chart
  },
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
  }
}
</script>
