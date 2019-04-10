<template>
  <chart :option="option"
         :style="{width:width,height:height}">
  </chart>
</template>
<script>
import Chart from '../main'
require('echarts/lib/chart/line')
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
