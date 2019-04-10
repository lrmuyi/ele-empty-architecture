<script>
import CmTreeSelect from 'chaomeng-ui/CmTreeSelect'
export default {
  name: 'tree-select',
  data () {
    return {
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      props: {
        children: 'children',
        label: 'label'
      },
      currentId: 0,
      currentLabel: '',
      disabled: false
    }
  },
  components: {
    CmTreeSelect
  },
  methods: {
    select (id, label) {
      console.log(id, label)
    },
    clear () {
      console.log('clear')
    }
  }
}
</script>

## TreeSelect 树形下拉选择器

:::demo TreeSelect 的数据通过 `data` 属性传入，数据需要是一个对象数组

```html
<template>
  <cm-tree-select
    :data="data"
    :props="props"
    :current-id="currentId"
    :current-label="currentLabel"
    empty-text="暂无数据"
    placeholder="请选择"
    node-key="id"
    :disabled="disabled"
    @select="select"
    @clear="clear"
    :clearable="true"
    :filterable="true"
  >
  </cm-tree-select>
</template>

<script>
  import CmTreeSelect from 'chaomeng-ui/CmTreeSelect'
  export default {
    name: 'tree-select',
    data() {
      return {
        data: [
          {
            id: 1,
            label: '一级 1',
            children: [
              {
                id: 4,
                label: '二级 1-1',
                children: [
                  {
                    id: 9,
                    label: '三级 1-1-1'
                  },
                  {
                    id: 10,
                    label: '三级 1-1-2'
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            label: '一级 2',
            children: [
              {
                id: 5,
                label: '二级 2-1'
              },
              {
                id: 6,
                label: '二级 2-2'
              }
            ]
          },
          {
            id: 3,
            label: '一级 3',
            children: [
              {
                id: 7,
                label: '二级 3-1'
              },
              {
                id: 8,
                label: '二级 3-2'
              }
            ]
          }
        ],
        props: {
          children: 'children',
          label: 'label'
        },
        currentId: 0,
        currentLabel: '',
        disabled: false
      }
    },
    components: {
      CmTreeSelect
    },
    methods: {
      select(id, label) {
        console.log(id, label)
      },
      clear() {
        console.log('clear')
      }
    }
  }
</script>
```

:::

### TreeSelect Attributes

| 参数          | 说明                                                 | 类型           | 可选值 | 默认值 |
| :------------ | :--------------------------------------------------- | :------------- | :----- | :----- |
| data          | 展示的数据                                           | Array          | -      | -      |
| props         | 配置选项，具体看下表                                 | Object         | -      | -      |
| current-id    | 当前默认 id                                          | number, string | -      | -      |
| current-label | 当前默认 label                                       | string         | -      | -      |
| disabled      | 该组件是否禁用                                       | Array          | -      | -      |
| empty-text    | 内容为空的时候展示的文本                             | string         | -      | -      |
| node-key      | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 | string         | -      | -      |
| placeholder   | 占位符                                               | string         | -      | -      |
| clearable     | 是否可清空                                           | boolean        | -      | true   |
| filterable    | 是否可搜索                                           | boolean        | -      | false  |

#### props

| 参数     | 说明                               | 类型   | 可选值 | 默认值 |
| :------- | :--------------------------------- | :----- | :----- | :----- |
| children | 指定子树为节点对象的某个属性值     | string | -      | -      |
| label    | 指定节点标签为节点对象的某个属性值 | string | -      | -      |

### Select Events

| 事件名称 | 说明               | 回调参数                          |
| :------- | :----------------- | :-------------------------------- |
| select   | 点击选项时触发     | （id, label）选中项的 id 和 label |
| clear    | 点击清除按钮时触发 | -                                 |

### Methods

| 方法名 | 说明                            | 参数 |
| ------ | ------------------------------- | ---- |
| focus  | 使 input 获取焦点               | -    |
| blur   | 使 input 失去焦点，并隐藏下拉框 | -    |
