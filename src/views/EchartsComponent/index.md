<script>
import { barEchart, lineEchart, pieEchart } from 'chaomeng-ui/StatisticalFigure/index'
export default {
  components: {
    barEchart, lineEchart, pieEchart
  },
  data () {
    return {
      echartwidth: '100%',
      echartheight: '500px',
      barOption1: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        color: ['#409EFF'],
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          barWidth: 50,
          type: 'bar'
        }]
      },

      barOption2: {
        legend: {
          data: ['销售额', '毛利额', '毛利率'],
          right: '20'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        color: ['#409EFF', '#8E85C7'],
        series: [{
          name: '销售额',
          data: [120, 200, 150, 80, 70, 110, 130],
          barGap: 0,
          type: 'bar'
        }, {
          name: '毛利额',
          data: [100, 180, 120, 40, 50, 140, 30],
          barGap: 0,
          type: 'bar'
        }] },

      barOption3: {
        legend: { data: ['销售额', '毛利额', '毛利率'], right: '20' },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        color: ['#1885F5', '#72B7FF', '#B3C2F1'],
        series: [{
          name: '销售额',
          data: [120, 200, 150, 80, 70, 110, 130],
          barWidth: 50,
          stack: true,
          type: 'bar'
        }, {
          name: '毛利额',
          data: [100, 180, 120, 40, 50, 140, 30],
          stack: true,
          barWidth: 50,
          type: 'bar'
        }, {
          name: '毛利率',
          data: [100, 180, 120, 40, 50, 140, 30],
          stack: true,
          barWidth: 50,
          type: 'bar'
        }] },

      lineOption1: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [27, 28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        },
        yAxis: {
          type: 'value'
        },
        color: ['#409EFF'],
        series: [{
          data: [12, 23, 14, 15, 32, 22, 34, 25, 23, 13, 25, 34, 33, 32, 12],
          type: 'line',
          smooth: true,
          areaStyle: {
          }
        }]},
      lineOption2: {
        legend: { data: ['销售额', '毛利额'], right: '50' },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [27, 28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        },
        yAxis: {
          type: 'value'
        },
        color: ['#67C23A', '#409EFF'],
        series: [{
          name: '销售额',
          data: [12, 23, 34, 45, 56, 65, 76, 56, 76, 78, 45, 34, 45, 56, 67],
          type: 'line'
        }, {
          name: '毛利额',
          data: [23, 12, 23, 43, 56, 76, 45, 34, 23, 67, 78, 89, 6, 56, 34],
          type: 'line'
        }]
      },
      pieOption1: {
        legend: {
          data: ['销售额', '毛利额', '毛利率']
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['#8E85C7', '#409EFF', '#67C23A'],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '销售额'},
              {value: 310, name: '毛利额'},
              {value: 234, name: '毛利率'}
            ]
          }
        ]
      },
      pieOption2: {
        legend: {
          data: ['销售额', '毛利额', '毛利率', '销售率']
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['#8E85C7', '#409EFF', '#67C23A', '#FFBA3C'],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '销售额'},
              {value: 310, name: '毛利额'},
              {value: 234, name: '毛利率'},
              {value: 134, name: '销售率'}
            ]
          }
        ]
      }

    }
  }
}
</script>
## 柱状统计图

:::demo

```html

<template>
    <el-row>
      <el-col :span="24">
        <bar-echart :option="barOption1"
                     :width="echartwidth"
                     :height="echartheight"></bar-echart>
      </el-col>
      <el-col :span="24">
        <bar-echart :option="barOption2"
                     :width="echartwidth"
                     :height="echartheight"></bar-echart>
      </el-col>
       <el-col :span="24">
        <bar-echart :option="barOption3"
                     :width="echartwidth"
                     :height="echartheight"></bar-echart>
      </el-col>
    </el-row>

  </div>
</template>
<script>
import { barEchart} from 'chaomeng-ui/StatisticalFigure/index'
export default {
  components: {
    barEchart
  },
  data () {
    return {
      echartwidth: '100%',
      echartheight: '500px',
      barOption1: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        color: ['#409EFF'],
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          barWidth: 50,
          type: 'bar'
        }]
      },
      barOption2: {
        legend: {
          data: ['销售额', '毛利额', '毛利率'],
          right: '20'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        color: ['#409EFF', '#8E85C7'],
        series: [{
          name: '销售额',
          data: [120, 200, 150, 80, 70, 110, 130],
          barGap: 0,
          type: 'bar'
        }, {
          name: '毛利额',
          data: [100, 180, 120, 40, 50, 140, 30],
          barGap: 0,
          type: 'bar'
        }] },
      barOption3: {
        legend: { data: ['销售额', '毛利额', '毛利率'], right: '20' },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        color: ['#1885F5', '#72B7FF', '#B3C2F1'],
        series: [{
          name: '销售额',
          data: [120, 200, 150, 80, 70, 110, 130],
          barWidth: 50,
          stack: true,
          type: 'bar'
        }, {
          name: '毛利额',
          data: [100, 180, 120, 40, 50, 140, 30],
          stack: true,
          barWidth: 50,
          type: 'bar'
        }, {
          name: '毛利率',
          data: [100, 180, 120, 40, 50, 140, 30],
          stack: true,
          barWidth: 50,
          type: 'bar'
        }] }
    }
  }
}
</script>
```

:::

### 参数配置

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| option| 配置参数   | Object  | 公共参数列表 | —— |
| width| 宽度   | string  | ——| 100% |
| height| 高度   | string  | ——| —— |

## 折线统计图

:::demo

```html
<template>
  <div>
    <el-row>
      <el-col :span="24">
        <line-echart :option="lineOption1"
                    :width="echartwidth"
                    :height="echartheight"></line-echart>
      </el-col>
      <el-col :span="24">
        <line-echart :option="lineOption2"
                    :width="echartwidth"
                    :height="echartheight"></line-echart>
      </el-col>
    </el-row>
</template>
<script>
import { lineEchart } from 'chaomeng-ui/StatisticalFigure/index'
export default {
  components: {
    lineEchart
  },
  data () {
    return {
      echartwidth: '100%',
      echartheight: '500px',
      lineOption1: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [27, 28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        },
        yAxis: {
          type: 'value'
        },
        color: ['#409EFF'],
        series: [{
          data: [12, 23, 14, 15, 32, 22, 34, 25, 23, 13, 25, 34, 33, 32, 12],
          type: 'line',
          smooth: true,
          areaStyle: {
          }
        }]},
      lineOption2: {
        legend: { data: ['销售额', '毛利额'], right: '50' },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [27, 28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        },
        yAxis: {
          type: 'value'
        },
        color: ['#67C23A', '#409EFF'],
        series: [{
          name: '销售额',
          data: [12, 23, 34, 45, 56, 65, 76, 56, 76, 78, 45, 34, 45, 56, 67],
          type: 'line'
        }, {
          name: '毛利额',
          data: [23, 12, 23, 43, 56, 76, 45, 34, 23, 67, 78, 89, 6, 56, 34],
          type: 'line'
        }]
      }
  }
}
</script>

```
:::

### 参数配置

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| option| 配置参数   | Object  | 公共参数列表| —— |
| width| 宽度   | string  | ——| 100% |
| height| 高度   | string  | ——| —— |

## 饼状图

:::demo

```html
<template>
  <div>
    <el-row>
      <el-col :span="12">
        <pie-echart :option="pieOption1"
                    :width="echartwidth"
                    :height="echartheight"></pie-echart>
      </el-col>
      <el-col :span="12">
        <pie-echart :option="pieOption2"
                    :width="echartwidth"
                    :height="echartheight"></pie-echart>
      </el-col>
    </el-row>
</template>
<script>
import { pieEchart } from 'chaomeng-ui/StatisticalFigure/index'
export default {
  components: {
    pieEchart
  },
  data () {
    return {
      echartwidth: '100%',
      echartheight: '500px',
      pieOption1: {
        legend: {
          data: ['销售额', '毛利额', '毛利率']
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['#8E85C7', '#409EFF', '#67C23A'],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '销售额'},
              {value: 310, name: '毛利额'},
              {value: 234, name: '毛利率'}
            ]
          }
        ]
      },
      pieOption2: {
        legend: {
          data: ['销售额', '毛利额', '毛利率', '销售率']
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['#8E85C7', '#409EFF', '#67C23A', '#FFBA3C'],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '销售额'},
              {value: 310, name: '毛利额'},
              {value: 234, name: '毛利率'},
              {value: 134, name: '销售率'}
            ]
          }
        ]
      }
  }
}
</script>
```
:::

### 参数配置

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| option| 配置参数   | Object  | 公共参数列表| —— |
| width| 宽度   | string  | ——| 100% |
| height| 高度   | string  | ——| —— |


### title（图表标题）公共参数列表

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| show|——   | 是否显示标题组件  | bool | —— |
| textStyle|——   | Object  | —— | —— |


### legend（图例）公共参数列表

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| title| 配置参数   | Object  | —— | —— |


### tooltip（提示框）公共参数列表

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| padding| 提示框浮层内边距   | number  | [a] / [a,b] / [a,b,c,d] | 5 |



## series系列

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| title| 配置参数   | Object  | —— | —— |