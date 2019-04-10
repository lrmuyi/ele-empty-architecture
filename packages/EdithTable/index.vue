<template>
  <div>
    <el-button v-if="IsAddData"
               :circle="AddControl.type"
               :type="AddControl.color"
               @click="addDataMethod"
               icon="el-icon-plus"
               style="float:right"></el-button>
    <el-table :data="tableDataList"
              border>
      <el-table-column type="index"
                       v-if="ShowIndex">
      </el-table-column>
      <el-table-column v-for="(item,index) in LabelName"
                       :label="item"
                       :key="index">
        <template slot-scope="scope">
          <span v-if="!scope.row.tag">{{scope.row[ParamsList[index]]}}</span>
          <span v-else>
            <el-input clearable
                      v-model="scope.row[ParamsList[index]]"></el-input>
          </span>
        </template>
      </el-table-column>
      <el-table-column fixed="right"
                       label="操作"
                       width="100"
                       v-if="!(!IsEdith && !IsDelete)">
        <template slot-scope="scope">
          <el-button type="text"
                     size="small"
                     v-show="IsEdith"
                     @click="EdithStateMethod(scope.$index,TableDataList)">{{scope.row.tag?'保存':'编辑'}}</el-button>
          <el-button type="text"
                     size="small"
                     v-show="IsDelete"
                     @click.native.prevent="deleteRow(scope.$index, TableDataList)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    TableDataList: {
      type: Array,
      default: function () {
        return []
      }
    },
    IsDelete: {
      type: Boolean,
      default: false
    },
    IsEdith: {
      type: Boolean,
      default: false
    },
    IsAddData: {
      type: Boolean,
      default: false
    },
    AddControl: {
      type: Object,
      default: function () {
        return {
          color: 'success',
          type: false
        }
      }
    },
    ShowIndex: {
      type: Boolean,
      default: false
    },
    LabelName: {
      type: Array,
      default: function () {
        return ['姓名', '年龄', '号码', '地址']
      }
    },
    ParamsList: {
      type: Array,
      default: function () {
        return ['name', 'age', 'phone', 'address']
      }
    }
  },
  data () {
    return {
      tableDataList: []
    }
  },
  mounted () {
    // 添加表格可操作控制状态
    this.TableDataList.forEach((item, index) => {
      this.$set(this.TableDataList[index], 'tag', false)
    })
    this.tableDataList = this.TableDataList
  },
  methods: {
    EdithStateMethod (index, rows) {
      this.tableDataList[index].tag = !this.tableDataList[index].tag
      if (!this.tableDataList[index].tag) {
        delete rows[index].tag
        this.$emit('emitedithdata', rows[index])
      }
    },
    addDataMethod () {
      var newObj = {
        tag: true
      }
      if (!this.tableDataList[0].tag) {
        this.tableDataList.unshift(newObj)
      } else {
        this.$message.warning('请先完成新增操作')
      }
    },
    deleteRow (index, rows) {
      delete rows[index].tag
      this.$emit('emitdeldata', rows[index])
      rows.splice(index, 1)
    }
  }

}
</script>
