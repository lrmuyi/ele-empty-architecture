<script>
import EdithComponents from 'chaomeng-ui/EdithTable'
export default {
  components: {
    EdithComponents
  },
  name: 'curdtable',
  data () {
    return {
      // 组件控制
      isEdithState: false,
      isDelete: false,
      isShowIndex: false,
      isEdith: false,
      isCellClick: false,
      // 是否增加-控制
      isAddRowData: false,
      isAddCol: false,
      addControl: {
        color: 'danger',
        type: true
      },
      labelNameList: ['姓名', '年龄', '号码', '地址', '备注'],
      paramsNameList: ['name', 'age', 'phone', 'address', 'remark'],
      tableData: [
        {
          id: 1000110,
          name: '小明',
          age: '23',
          phone: '123456789',
          address: '北京市丰台区丰台科技园',
          remark: '暂无'
        }, {
          id: 1000110,
          name: '小明',
          age: '23',
          phone: '123456789',
          address: '北京市丰台区丰台科技园'
        }, {
          id: 1000110,
          name: '小明',
          age: '23',
          phone: '123456789',
          address: '北京市丰台区丰台科技园'
        }, {
          id: 1000110,
          name: '小明',
          age: '23',
          phone: '123456789',
          address: '北京市丰台区丰台科技园'
        }, {
          id: 1000110,
          name: '小明',
          age: '23',
          phone: '123456789',
          address: '北京市丰台区丰台科技园'
        }
      ],
      labelname: '',
      labelvalue: ''
    }
  },
  methods: {
    isAddRowMethod () {
      this.isAddRowData = !this.isAddRowData
      this.isEdith = this.isAddRowData
    },
    isAddColMethod () {
      this.isAddCol = !this.isAddCol
    },
    isCellDbClickMethod () {
      this.isCellClick = !this.isCellClick
    },
    listenEdithData (value) {
      console.log(234234)
      console.log(value)
    },
    listenDelData (value) {
      console.log(value)
    },
    addTableColumn () {
      if (this.labelvalue && this.labelname) {
        this.labelNameList.push(this.labelname)
        this.paramsNameList.push(this.labelvalue)
        this.labelname = this.labelvalue = ''
      } else {
        this.$message.warning('请添加参数')
      }
    }
  }
}
</script>

## CurdTable 表格增删改查

用于 el-table 里面进行数据修改操作，可新增行列

### 基本用法

:::demo

```html
<template>
  <div>
    <el-row>
      <el-col>
        功能控制:
        <el-button @click="isShowIndex = !isShowIndex"
          >是否显示序列号</el-button
        >
        <el-button @click="isAddRowMethod">是否新增行</el-button>
        <el-button @click="isAddColMethod">是否新增列</el-button>
        <el-button @click="isEdith = !isEdith ">是否编辑</el-button>
        <el-button @click="isDelete = !isDelete">是否删除</el-button>
      </el-col>
    </el-row>
    <el-row v-show="isAddCol">
      <el-col>
        <div>
          <el-input
            placeholder="请输入表头"
            style="width:300px"
            v-model="labelname"
          >
            <template slot="prepend"
              >表头</template
            >
          </el-input>
          <el-input
            placeholder="请输入参数"
            style="width:300px"
            v-model="labelvalue"
          >
            <template slot="prepend"
              >参数</template
            >
          </el-input>
          <el-button @click="addTableColumn">添加</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <edith-components
          :table-data-list="tableData"
          :is-delete="isDelete"
          :is-edith="isEdith"
          :show-index="isShowIndex"
          :is-add-data="isAddRowData"
          :add-control="addControl"
          :label-name="labelNameList"
          :params-list="paramsNameList"
          @emitedithdata="listenEdithData"
          @emitdeldata="listenDelData"
        ></edith-components>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    components: {
      EdithComponents
    },
    name: "curdtable",
    data() {
      return {
        // 组件控制
        isEdithState: false,
        isDelete: false,
        isShowIndex: false,
        isEdith: false,
        isCellClick: false,
        // 是否增加-控制
        isAddRowData: false,
        isAddCol: false,
        addControl: {
          color: "danger",
          type: true
        },
        labelNameList: ["姓名", "年龄", "号码", "地址", "备注"],
        paramsNameList: [ "name", "age", "phone", "address", "remark"],
        tableData: [
          {
            id: 100110,
            name: "小明",
            age: "23",
            phone: "123456789",
            address: "北京市丰台区丰台科技园",
            remark: "暂无"
          },
          {
            id: 100110,
            name: "小明",
            age: "23",
            phone: "123456789",
            address: "北京市丰台区丰台科技园"
          },
          {
            id: 100110,
            name: "小明",
            age: "23",
            phone: "123456789",
            address: "北京市丰台区丰台科技园"
          },
          {
            id: 100110,
            name: "小明",
            age: "23",
            phone: "123456789",
            address: "北京市丰台区丰台科技园"
          },
          {
            id: 100110,
            name: "小明",
            age: "23",
            phone: "123456789",
            address: "北京市丰台区丰台科技园"
          }
        ],
        labelname: "",
        labelvalue: ""
      };
    },
    methods: {
      isAddRowMethod() {
        this.isAddRowData = !this.isAddRowData;
        this.isEdith = this.isAddRowData;
      },
      isAddColMethod() {
        this.isAddCol = !this.isAddCol;
      },
      isCellDbClickMethod() {
        this.isCellClick = !this.isCellClick;
      },
      listenEdithData(value) {
        console.log(value);
      },
      listenDelData(value) {
        console.log(value);
      },
      addTableColumn() {
        if (this.labelvalue && this.labelname) {
          this.labelNameList.push(this.labelname);
          this.paramsNameList.push(this.labelvalue);
          this.labelname = this.labelvalue = "";
        } else {
          this.$message.warning("请添加参数");
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 10;
    }
  }
</style>
```

:::

### CurdTable 属性

| 参数        | 说明               | 类型    | 可选值         | 默认值 |
| ----------- | ------------------ | ------- | -------------- | ------ |
| show-index   | 序列号         | boolean | —              | false  |
| table-data-list        | 表格数据         | Array  | — |  — |
| label-name        | 表头名称         | Array  | —          | —  |
| params-list   | 列参数             | Array  | —              | —  |
| is-delete       | 删除             | boolean   | —              | false      |
| is-edith |   编辑   | boolean  | —              | false      |
| is-add-data    | 添加               | boolean | —              | false  |
| add-control    | 添加按钮样式 | Object | —              | —  |


### CurdTable 方法

| 事件名        | 说明           | 回调参数   |
| ------------- | -------------- | ---------- |
| emitedithdata | 编辑保存后触发 | 修改的数据 |
| emitdeldata   | 删除后触发      | 删除的数据 |
