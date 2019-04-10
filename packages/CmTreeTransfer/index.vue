<template>
  <div class="cm-tree-transfer">
    <div class="not-choose">
      <div class="count">
        <el-checkbox v-model="left_allChecked"
                     @change="allCheckedChange(arguments, 'left')"
                     :disabled="left_data.length > 0 ? false : true">全选</el-checkbox>
        <span>{{ leftCount }}条</span>
      </div>
      <div>
        <div class="filter"
             v-show="filterable">
          <span>{{leftLabel}}</span>
          <el-input v-model="left_filter_text"
                    :placeholder="leftPlaceholder"
                    @change="leftFilter"
                    @focus="leftSearchFocus"></el-input>
        </div>
        <div class="tree-data"
             :style="filterable ? 'height: 182px;' : 'height: 100%;'">
          <el-tree :data="left_data"
                   :props="props"
                   show-checkbox
                   :ref="'left' + treeRef"
                   :node-key="nodeKey"
                   @check="checkedChange(arguments, 'left')"
                   empty-text=""
                   @check-change="currentCheckedChange(arguments, 'left')"></el-tree>
        </div>
      </div>
    </div>
    <div class="move">
      <div class="disabled"
           v-if="arrow_right_status === false">
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="active"
           @click="rightMoveClick"
           v-else>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="disabled"
           v-if="arrow_left_status === false">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="active"
           @click="leftMoveClick"
           v-else>
        <i class="el-icon-arrow-left"></i>
      </div>
    </div>
    <div class="choose">
      <div class="count">
        <el-checkbox v-model="right_allChecked"
                     @change="allCheckedChange(arguments, 'right')"
                     :disabled="right_data.length > 0 ? false : true">全选</el-checkbox>
        <span>{{ rightCount }}条</span>
      </div>
      <div>
        <div class="filter"
             v-show="filterable">
          <span>{{rightLabel}}</span>
          <el-input v-model="right_filter_text"
                    @change="rightFilter"
                    @focus="rightSearchFocus"></el-input>
        </div>
        <div class="tree-data"
             :style="filterable ? 'height: 182px;' : 'height: 100%;'">
          <el-tree :data="right_data"
                   :props="props"
                   show-checkbox
                   :ref="'right' + treeRef"
                   :node-key="nodeKey"
                   empty-text=""
                   @check="checkedChange(arguments, 'right')"
                   @check-change="currentCheckedChange(arguments, 'right')"></el-tree>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tree-transfer',
  props: {
    leftData: Array,
    rightData: Array,
    props: {
      type: Object,
      default: () => {
        return {
          children: 'permission',
          label: 'name'
        }
      }
    },
    nodeKey: {
      type: String,
      default: 'id'
    },
    leftPlaceholder: String,
    rightPlaceholder: String,
    leftLabel: String,
    rightLabel: String,
    count: Function,
    leftFilterMethod: Function,
    rightFilterMethod: Function,
    filterable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      leftLevel1List: [],
      leftLevel2List: [],
      rightLevel1List: [],
      rightLevel2List: [],
      arrow_right_status: false,
      arrow_left_status: false,
      left_filter_text: '',
      left_allChecked: false,
      right_filter_text: '',
      right_allChecked: false,
      left_data: this.leftData,
      right_data: this.rightData,
      treeRef: 'treeRef',
      leftCount: 0,
      rightCount: 0
    }
  },
  watch: {
    leftData (val) {
      this.left_data = val
      this.$nextTick(() => {
        this.dataNum()
      })
    },
    rightData (val) {
      this.right_data = val
      this.$nextTick(() => {
        this.dataNum()
      })
    }
  },
  mounted () {
    this.dataNum()
  },
  methods: {
    // 全选
    allCheckedChange (val, posi) {
      var checkedData = this[posi + '_data']
      if (val[0]) {
        this.$refs[posi + this.treeRef].setCheckedNodes(checkedData)
      } else {
        this.$refs[posi + this.treeRef].setCheckedKeys([])
      }
    },
    // 选中状态发生改变
    currentCheckedChange (data, posi) {
      var position = posi === 'left' ? 'right' : 'left'
      if (this.$refs[posi + this.treeRef].getCheckedNodes().length > 0) {
        this['arrow_' + position + '_status'] = true
      } else {
        this['arrow_' + position + '_status'] = false
      }
      this.$emit(position + '-check-change', data)
    },
    // 点击复选框
    checkedChange (data, posi) {
      var allCount = 0
      var selectedCount = 0
      this[posi + '_data'].forEach((item) => {
        if (item.level === 1) {
          allCount = allCount - 0 + 1
        }
      })
      data[1].checkedNodes.forEach((item) => {
        if (item.level === 1) {
          selectedCount = selectedCount - 0 + 1
        }
      })
      if (allCount === selectedCount) {
        this[posi + '_allChecked'] = true
      } else {
        this[posi + '_allChecked'] = false
      }
    },
    // 过滤
    leftFilter (val) {
      this.left_data = this.leftFilterMethod(this.left_filter_text, this.left_data, this.right_data)
    },
    rightFilter (val) {
      this.right_data = this.rightFilterMethod(this.left_filter_text, this.left_data, this.right_data)
    },
    leftSearchFocus (val) {
      if (this.right_filter_text !== '') {
        this.right_filter_text = ''
        this.rightFilter()
      }
    },
    rightSearchFocus (val) {
      if (this.left_filter_text !== '') {
        this.left_filter_text = ''
        this.leftFilter()
      }
    },
    // 计算数据条数
    dataNum () {
      var countArr = this.count(this.left_data, this.right_data)
      this.leftCount = countArr[0]
      this.rightCount = countArr[1]
    },
    // 右移点击
    rightMoveClick () {
      var level1List = []
      var level2List = []
      var levelMidIds = []
      var levelMidList = []

      var length = 0
      var currentLevel1Id = ''
      var currentobj = {}
      var currentChildObj = {}
      var rightLevel1Ids = []
      var chooseData = []
      this.$refs['left' + this.treeRef].getCheckedNodes().forEach(item => {
        if (item.level === 1) {
          level1List.push(item)
        } else if (item.level === 2) {
          levelMidList.push(item)
        }
      })
      level1List.forEach(item1 => {
        if (item1[this.props.children]) {
          item1[this.props.children].forEach(child1 => {
            levelMidIds.push(child1[this.nodeKey])
          })
        }
      })
      levelMidList.forEach(item2 => {
        if (levelMidIds.indexOf(item2[this.nodeKey]) === -1) {
          level2List.push(item2)
        }
      })
      this.leftLevel1List = level1List
      this.leftLevel2List = level2List

      this.right_data.forEach(dataItem => {
        rightLevel1Ids.push(dataItem[this.nodeKey])
      })
      this.leftLevel1List.forEach(item1 => {
        this.$refs['left' + this.treeRef].remove(item1[this.nodeKey])
        if (rightLevel1Ids.length > 0) {
          if (rightLevel1Ids.indexOf(item1[this.nodeKey]) === -1) {
            length = this.right_data.length
            this.$refs['right' + this.treeRef].insertAfter(
              item1,
              this.right_data[length - 1][this.nodeKey]
            )
          } else {
            if (item1[this.props.children]) {
              item1[this.props.children].forEach(item2 => {
                this.$refs['right' + this.treeRef].append(item2, item1[this.nodeKey])
              })
            }
          }
        } else {
          chooseData.push(item1)
          this.right_data = chooseData
        }
      })
      rightLevel1Ids = []
      chooseData = []
      this.leftLevel2List.forEach(item2 => {
        this.left_data.forEach(dataItem => {
          if (dataItem[this.props.children]) {
            dataItem[this.props.children].forEach(dataChild => {
              if (dataChild[this.nodeKey] === item2[this.nodeKey]) {
                currentLevel1Id = dataItem[this.nodeKey]
                currentobj = {}
                currentChildObj = {}
                Object.keys(dataItem).forEach((key) => {
                  currentobj[key] = dataItem[key]
                  currentChildObj[key] = item2[key]
                  currentChildObj[this.props.children] = []
                  currentobj[this.props.children] = [currentChildObj]
                })
              }
            })
          }
        })
        this.right_data.forEach(dataItem => {
          rightLevel1Ids.push(dataItem[this.nodeKey])
        })
        this.$refs['left' + this.treeRef].remove(item2[this.nodeKey])
        if (rightLevel1Ids.length > 0) {
          if (rightLevel1Ids.indexOf(currentLevel1Id) !== -1) {
            this.$nextTick(() => {
              this.$refs['right' + this.treeRef].append(item2, currentLevel1Id)
            })
          } else {
            this.right_data.push(currentobj)
          }
        } else {
          chooseData.push(currentobj)
          this.right_data = chooseData
        }
      })
      this.$refs['left' + this.treeRef].setCheckedKeys([])
      this.left_allChecked = false
      if (this.$refs['left' + this.treeRef].getCheckedNodes().length > 0) {
        this.arrow_right_status = true
      } else {
        this.arrow_right_status = false
      }
      this.$nextTick(() => {
        this.dataNum()
      })
    },
    // 左移点击
    leftMoveClick () {
      var level1List = []
      var level2List = []
      var levelMidIds = []
      var levelMidList = []

      var length = 0
      var currentLevel1Id = ''
      var currentobj = {}
      var currentChildObj = {}
      var leftLevel1Ids = []
      var chooseData = []
      this.$refs['right' + this.treeRef].getCheckedNodes().forEach(item => {
        if (item.level === 1) {
          // 所有选中的一级
          level1List.push(item)
        } else if (item.level === 2) {
          // 所有选中的二级
          levelMidList.push(item)
        }
      })
      // 一级中的二级id
      level1List.forEach(item1 => {
        if (item1[this.props.children]) {
          item1[this.props.children].forEach(child1 => {
            levelMidIds.push(child1[this.nodeKey])
          })
        }
      })
      // 没有一级的二级
      levelMidList.forEach(item2 => {
        if (levelMidIds.indexOf(item2[this.nodeKey]) === -1) {
          level2List.push(item2)
        }
      })
      this.rightLevel1List = level1List
      this.rightLevel2List = level2List

      this.left_data.forEach(dataItem => {
        leftLevel1Ids.push(dataItem[this.nodeKey])
      })
      this.rightLevel1List.forEach(item1 => {
        this.$refs['right' + this.treeRef].remove(item1[this.nodeKey])
        if (leftLevel1Ids.length > 0) {
          if (leftLevel1Ids.indexOf(item1[this.nodeKey]) === -1) {
            length = this.left_data.length
            this.$refs['left' + this.treeRef].insertAfter(
              item1,
              this.left_data[length - 1][this.nodeKey]
            )
          } else {
            if (item1[this.props.children]) {
              item1[this.props.children].forEach(item2 => {
                this.$refs['left' + this.treeRef].append(item2, item1[this.nodeKey])
              })
            }
          }
        } else {
          chooseData.push(item1)
          this.left_data = chooseData
        }
      })
      leftLevel1Ids = []
      chooseData = []
      this.rightLevel2List.forEach(item2 => {
        this.right_data.forEach(dataItem => {
          if (dataItem[this.props.children]) {
            dataItem[this.props.children].forEach(dataChild => {
              if (dataChild[this.nodeKey] === item2[this.nodeKey]) {
                currentLevel1Id = dataItem[this.nodeKey]
                currentobj = {}
                currentChildObj = {}
                Object.keys(dataItem).forEach((key) => {
                  currentobj[key] = dataItem[key]
                  currentChildObj[key] = item2[key]
                  currentChildObj[this.props.children] = []
                  currentobj[this.props.children] = [currentChildObj]
                })
              }
            })
          }
        })
        this.left_data.forEach(dataItem => {
          leftLevel1Ids.push(dataItem[this.nodeKey])
        })
        this.$refs['right' + this.treeRef].remove(item2[this.nodeKey])
        if (leftLevel1Ids.length > 0) {
          if (leftLevel1Ids.indexOf(currentLevel1Id) !== -1) {
            this.$nextTick(() => {
              this.$refs['left' + this.treeRef].append(item2, currentLevel1Id)
            })
          } else {
            this.left_data.push(currentobj)
          }
        } else {
          chooseData.push(currentobj)
          this.left_data = chooseData
        }
      })
      this.$refs['right' + this.treeRef].setCheckedKeys([])
      this.right_allChecked = false
      if (this.$refs['right' + this.treeRef].getCheckedNodes().length > 0) {
        this.arrow_left_status = true
      } else {
        this.arrow_left_status = false
      }
      this.$nextTick(() => {
        this.dataNum()
      })
    },
    getLeftData () {
      return this.left_data
    },
    getRightData () {
      return this.right_data
    }
  }
}
</script>

<style lang="scss" scoped>
$move-button-background-color-active: #ff5523;
.cm-tree-transfer {
  padding-top: 25px;
  padding-left: 30px;
  > div {
    display: inline-block;
    vertical-align: middle;
    &.not-choose,
    &.choose {
      width: 286px;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      > .count {
        width: 100%;
        height: 39px;
        line-height: 39px;
        border-bottom: 1px solid #dcdfe6;
        background-color: #f5f7fa;
        position: relative;
        > label {
          font-size: 14px;
          font-family: PingFangSC-Regular;
          color: rgba(102, 102, 102, 1);
          padding-left: 17px;
        }
        > span {
          font-size: 14px;
          font-family: HelveticaNeue;
          color: rgba(153, 153, 153, 1);
          position: absolute;
          right: 17px;
        }
      }
      > div {
        width: 100%;
        height: 247px;
        > .filter {
          text-align: center;
          padding-top: 12px;
          padding-bottom: 10px;
          font-size: 14px;
          font-family: PingFangSC-Regular;
          color: rgba(51, 51, 51, 1);
        }
        > .tree-data {
          width: 100%;
          overflow: scroll;
          margin-top: 10px;
        }
      }
    }
    &.move {
      padding-left: 20px;
      padding-right: 20px;
      > div {
        margin-top: 8px;
      }
      .active {
        width: 24px;
        height: 24px;
        background: $move-button-background-color-active;
        border-radius: 4px;
        color: #ffffff;
        text-align: center;
        line-height: 24px;
      }
      .disabled {
        width: 24px;
        height: 24px;
        background: #f5f7fa;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        text-align: center;
        line-height: 24px;
        color: #999999;
      }
    }
  }
}
</style>
<style type="text/css">
.cm-tree-transfer .filter .el-input {
  width: 212px;
}
.cm-tree-transfer .el-input__inner {
  height: 32px !important;
  line-height: 12px !important;
  font-size: 12px !important;
  padding-top: 9px !important;
  padding-bottom: 9px !important;
}
</style>
