<script>
import CmTreeTransfer from 'chaomeng-ui/CmTreeTransfer'
export default {
  name: 'tree-transfer',
  data () {
    return {
      leftData: [
        {
          "id": "98",
          "name": "固定资产类",
          "unique_id": "43_98",
          "level": 1,
          "permission": [
            {
              "id": "9804",
              "name": "后勤资产",
              "unique_id": "43_98_9804",
              "level": 2,
              "permission": []
            },
            {
              "id": "9802",
              "name": "工程资产",
              "unique_id": "43_98_9802",
              "level": 2,
              "permission": []
            },
            {
              "id": "9805",
              "name": "备品",
              "unique_id": "43_98_9805",
              "level": 2,
              "permission": []
            },
            {
              "id": "9801",
              "name": "生鲜资产",
              "unique_id": "43_98_9801",
              "level": 2,
              "permission": []
            },
            {
              "id": "9803",
              "name": "信息资产",
              "unique_id": "43_98_9803",
              "level": 2,
              "permission": []
            }
          ]
        },
        {
          "id": "88",
          "name": "卡类型",
          "unique_id": "43_88",
          "level": 1,
          "permission": []
        },
        {
          "id": "99",
          "name": "特殊类别",
          "unique_id": "43_99",
          "level": 1,
          "permission": []
        }
      ],
      rightData: [
        {
          "id": "03",
          "name": "方便食品",
          "unique_id": "43_03",
          "level": 1,
          "permission": [
            {
              "id": "0301",
              "name": "方便面",
              "unique_id": "43_03_0301",
              "level": 2,
              "permission": []
            },
            {
              "id": "0303",
              "name": "方便汤",
              "unique_id": "43_03_0303",
              "level": 2,
              "permission": []
            },
            {
              "id": "0302",
              "name": "方便粉",
              "unique_id": "43_03_0302",
              "level": 2,
              "permission": []
            }
          ]
        },
        {
          "id": "11",
          "name": "酒",
          "unique_id": "43_11",
          "level": 1,
          "permission": [
            {
              "id": "1104",
              "name": "洋酒",
              "unique_id": "43_11_1104",
              "level": 2,
              "permission": []
            },
            {
              "id": "1105",
              "name": "啤酒小支装",
              "unique_id": "43_11_1105",
              "level": 2,
              "permission": []
            },
            {
              "id": "1106",
              "name": "瓶装啤酒",
              "unique_id": "43_11_1106",
              "level": 2,
              "permission": []
            },
            {
              "id": "1102",
              "name": "葡萄酒",
              "unique_id": "43_11_1102",
              "level": 2,
              "permission": []
            },
            {
              "id": "1103",
              "name": "黄酒、果汁酒、保健酒",
              "unique_id": "43_11_1103",
              "level": 2,
              "permission": []
            },
            {
              "id": "1101",
              "name": "国产白酒",
              "unique_id": "43_11_1101",
              "level": 2,
              "permission": []
            },
            {
              "id": "1107",
              "name": "罐装啤酒",
              "unique_id": "43_11_1107",
              "level": 2,
              "permission": []
            }
          ]
        }
      ],
      defaultProps: {
        children: 'permission',
        label: 'name'
      },
      leftCount: 0,
      rightCount: 0,
      count (leftData, rightData) {
        var rightCount = 0
        var leftCount = 0
        rightData.forEach(item => {
          if (item['permission']) {
            rightCount = Number(rightCount) + Number(item['permission'].length)
          } else {
            rightCount = rightData.length
          }
        })
        leftData.forEach(item => {
          if (item['permission']) {
            leftCount = Number(leftCount) + Number(item['permission'].length)
          } else {
            leftCount = leftData.length
          }
        })
        return [leftCount, rightCount]
      },
      leftFilterMethod (text, leftData, rightData) {
        console.log(text, leftData, rightData)
        return leftData
      },
      rightFilterMethod (text, leftData, rightData) {
        console.log(text, leftData, rightData)
        return rightData
      },
      filterable: true
    }
  },
  components: {
    CmTreeTransfer
  },
  methods: {
    leftCheckChange (data) {
      console.log(data)
    },
    rightCheckChange (data) {
      console.log(data)
    }
  }
}
</script>

## TreeTransfer 树形穿梭框

:::demo TreeTransfer 的数据通过`left-data`和`right-data`属性传入，数据需要是一个对象数组

```html
<template>
  <cm-tree-transfer
    :left-data="leftData"
    :right-data="rightData"
    :props="defaultProps"
    node-key="unique_id"
    left-placeholder="输入多个请用全角逗号“,”隔开"
    :left-filter-method="leftFilterMethod"
    :right-filter-method="rightFilterMethod"
    ref="storeInfo"
    left-label="未选："
    right-label="已选："
    :count="count"
    :filterable="filterable"
    @left-check-change="leftCheckChange"
    @right-check-change="rightCheckChange"
  ></cm-tree-transfer>
</template>
<script>
  import CmTreeTransfer from 'chaomeng-ui/CmTreeTransfer'
  export default {
    name: 'tree-transfer',
    data() {
      return {
        leftData: [
          {
            id: '98',
            name: '固定资产类',
            unique_id: '43_98',
            level: 1,
            permission: [
              {
                id: '9804',
                name: '后勤资产',
                unique_id: '43_98_9804',
                level: 2,
                permission: []
              },
              {
                id: '9802',
                name: '工程资产',
                unique_id: '43_98_9802',
                level: 2,
                permission: []
              },
              {
                id: '9805',
                name: '备品',
                unique_id: '43_98_9805',
                level: 2,
                permission: []
              },
              {
                id: '9801',
                name: '生鲜资产',
                unique_id: '43_98_9801',
                level: 2,
                permission: []
              },
              {
                id: '9803',
                name: '信息资产',
                unique_id: '43_98_9803',
                level: 2,
                permission: []
              }
            ]
          },
          {
            id: '88',
            name: '卡类型',
            unique_id: '43_88',
            level: 1,
            permission: []
          },
          {
            id: '99',
            name: '特殊类别',
            unique_id: '43_99',
            level: 1,
            permission: []
          }
        ],
        rightData: [
          {
            id: '03',
            name: '方便食品',
            unique_id: '43_03',
            level: 1,
            permission: [
              {
                id: '0301',
                name: '方便面',
                unique_id: '43_03_0301',
                level: 2,
                permission: []
              },
              {
                id: '0303',
                name: '方便汤',
                unique_id: '43_03_0303',
                level: 2,
                permission: []
              },
              {
                id: '0302',
                name: '方便粉',
                unique_id: '43_03_0302',
                level: 2,
                permission: []
              }
            ]
          },
          {
            id: '11',
            name: '酒',
            unique_id: '43_11',
            level: 1,
            permission: [
              {
                id: '1104',
                name: '洋酒',
                unique_id: '43_11_1104',
                level: 2,
                permission: []
              },
              {
                id: '1105',
                name: '啤酒小支装',
                unique_id: '43_11_1105',
                level: 2,
                permission: []
              },
              {
                id: '1106',
                name: '瓶装啤酒',
                unique_id: '43_11_1106',
                level: 2,
                permission: []
              },
              {
                id: '1102',
                name: '葡萄酒',
                unique_id: '43_11_1102',
                level: 2,
                permission: []
              },
              {
                id: '1103',
                name: '黄酒、果汁酒、保健酒',
                unique_id: '43_11_1103',
                level: 2,
                permission: []
              },
              {
                id: '1101',
                name: '国产白酒',
                unique_id: '43_11_1101',
                level: 2,
                permission: []
              },
              {
                id: '1107',
                name: '罐装啤酒',
                unique_id: '43_11_1107',
                level: 2,
                permission: []
              }
            ]
          }
        ],
        defaultProps: {
          children: 'permission',
          label: 'name'
        },
        leftCount: 0,
        rightCount: 0,
        count(leftData, rightData) {
          var rightCount = 0
          var leftCount = 0
          rightData.forEach(item => {
            if (item['permission']) {
              rightCount =
                Number(rightCount) + Number(item['permission'].length)
            } else {
              rightCount = rightData.length
            }
          })
          leftData.forEach(item => {
            if (item['permission']) {
              leftCount = Number(leftCount) + Number(item['permission'].length)
            } else {
              leftCount = leftData.length
            }
          })
          return [leftCount, rightCount]
        },
        leftFilterMethod(text, leftData, rightData) {
          console.log(text, leftData, rightData)
          return leftData
        },
        rightFilterMethod(text, leftData, rightData) {
          console.log(text, leftData, rightData)
          return rightData
        },
        filterable: true
      }
    },
    components: {
      CmTreeTransfer
    },
    methods: {
      leftCheckChange(data) {
        console.log(data)
      },
      rightCheckChange(data) {
        console.log(data)
      }
    }
  }
</script>
```

:::

### TreeSelect Attributes

| 参数                | 说明                                                 | 类型     | 可选值 | 默认值 |
| :------------------ | :--------------------------------------------------- | :------- | :----- | :----- |
| left-data           | 左侧框展示的数据                                     | Array    | -      | -      |
| right-data          | 右侧框展示的数据                                     | Array    | -      | -      |
| props               | 配置选项，具体看下表                                 | Object   | -      | -      |
| left-placeholder    | 左侧搜索框占位符                                     | string   | -      | -      |
| right-placeholder   | 右侧搜索框占位符                                     | string   | -      | -      |
| node-key            | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 | string   | -      | -      |
| count               | 自定义数据条数方法                                   | function | -      | -      |
| left-label          | 左侧列表自定义标题                                   | string   | -      | -      |
| right-label         | 右侧列表自定义标题                                   | string   | -      | -      |
| left-filter-method  | 左侧搜索框自定义搜索方法                             | function | -      | -      |
| right-filter-method | 右侧搜索框自定义搜索方法                             | function | -      | -      |
| filterable          | boolean                                              | -        | -      | true   |

#### props

| 参数     | 说明                               | 类型   | 可选值 | 默认值 |
| :------- | :--------------------------------- | :----- | :----- | :----- |
| children | 指定子树为节点对象的某个属性值     | string | -      | -      |
| label    | 指定节点标签为节点对象的某个属性值 | string | -      | -      |

### Select Events

| 事件名称           | 说明                               | 回调参数                                                                                                           |
| :----------------- | :--------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| left-check-change  | 左侧框节点选中状态发生变化时的回调 | 共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点 |
| right-check-change | 右侧框节点选中状态发生变化时的回调 | 共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点 |

### Methods

| 方法名       | 说明         | 参数 |
| ------------ | ------------ | ---- |
| getLeftData  | 获取左侧数据 | -    |
| getRightData | 获取右侧数据 | -    |
