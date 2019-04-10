<template>
  <div class="cm-tree-select"
       v-clickoutside="handleCloseTree">
    <div @click="selectFocus">
      <el-input v-model="text"
                :placeholder="placeholder"
                :disabled="disabled"
                @focus="selectFocus"
                @input="filter"
                :clearable="clearable"
                @clear="clear"
                :suffix-icon="suffixIcon"
                :readonly="readonly"
                ref="cm-tree-select-input"></el-input>
    </div>
    <div class="cm-option"
         v-show="selectShow">
      <el-tree :data="selectData"
               :filter-node-method="filterNode"
               :highlight-current="true"
               :expand-on-click-node="false"
               :node-key="nodeKey"
               :props="props"
               ref="cm-tree"
               :empty-text="emptyText"
               accordion
               @node-click="selectHandle"></el-tree>
    </div>
  </div>
</template>

<script>
import clickoutside from './clickoutside'
export default {
  name: 'tree-select',
  data () {
    return {
      selectShow: false,
      text: this.currentLabel,
      id: this.currentId,
      label: this.currentLabel,
      suffixIcon: 'el-icon-arrow-down',
      selectData: this.data
    }
  },
  props: {
    data: Array,
    props: {
      type: Object,
      default: () => {
        return {
          children: 'children',
          label: 'label'
        }
      }
    },
    currentId: [Number, String],
    currentLabel: String,
    disabled: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: () => {
        return '暂无数据'
      }
    },
    nodeKey: String,
    placeholder: {
      type: String,
      default: () => {
        return '请选择'
      }
    },
    clearable: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    filterable: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  computed: {
    readonly () {
      return !this.filterable
    }
  },
  directives: { clickoutside },
  watch: {
    data (val) {
      this.selectData = val
      this.$nextTick(() => {
        if (this.id === 0) {
          this.$refs['cm-tree'].setCurrentKey(null)
        } else {
          this.$refs['cm-tree'].setCurrentKey(this.id)
        }
      })
    },
    currentId (val) {
      this.id = val
      this.$nextTick(() => {
        if (val === 0) {
          this.$refs['cm-tree'].setCurrentKey(null)
        } else {
          this.$refs['cm-tree'].setCurrentKey(this.id)
        }
      })
    },
    currentLabel (val) {
      this.label = val
      this.text = val
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs['cm-tree'].setCurrentKey(this.id)
    })
  },
  methods: {
    // 搜索
    filterNode (value, data) {
      if (!value) return true
      return data[this.props.label].indexOf(value) !== -1
    },
    filter (val) {
      this.$refs['cm-tree'].filter(val)
    },
    // 选择框聚焦
    selectFocus () {
      if (!this.disabled) {
        this.selectShow = true
        this.$nextTick(() => {
          this.$refs['cm-tree'].filter('')
          this.suffixIcon = 'el-icon-arrow-up'
        })
      }
    },
    // 选择下拉选项
    selectHandle (data) {
      this.selectShow = false
      this.text = data[this.props.label]
      this.label = data[this.props.label]
      this.id = data[this.nodeKey]
      this.suffixIcon = 'el-icon-arrow-down'
      this.$emit('select', this.id, this.label)
    },
    // 点击空白处关闭下拉选项
    handleCloseTree () {
      this.selectShow = false
      this.text = this.label
      this.suffixIcon = 'el-icon-arrow-down'
    },
    // 点击清除按钮
    clear () {
      this.$nextTick(() => {
        this.$refs['cm-tree'].setCurrentKey(null)
        this.label = ''
        this.$emit('clear')
      })
    },
    // method 失焦
    blur () {
      this.$refs['cm-tree-select-input'].blur()
      this.$nextTick(() => {
        this.selectShow = false
        this.suffixIcon = 'el-icon-arrow-down'
      })
    },
    // method 聚焦
    focus () {
      if (!this.disabled) {
        this.$refs['cm-tree-select-input'].focus()
      }
    }
  }
}
</script>

<style>
.cm-tree-select .el-input {
  width: 224px !important;
}
.cm-tree-select .el-input__inner {
  height: 32px !important;
  line-height: 12px !important;
  font-size: 12px !important;
  padding-top: 9px !important;
  padding-bottom: 9px !important;
}
.cm-tree-select .el-input__icon {
  line-height: 32px !important;
}
</style>

<style lang="scss" scoped>
.cm-tree-select {
  display: inline-block;
  > .cm-option {
    width: 224px;
    max-height: 140px;
    overflow: scroll;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    margin-top: 8px;
    position: absolute;
    z-index: 2000;
    > div {
      min-width: 100%;
      display: inline-block !important;
    }
  }
}
</style>
