<template>
  <div class="cm-week-pickder">
    <div class="cm-week-pickder__swap"
         @mouseenter="onMouseEnter"
         @mouseleave="showClose = false">
      <div class="cm-week-pickder__start">
        <el-date-picker
          v-model="currentValue[0]"
          type="week"
          :size="size"
          :clearable="false"
          :format="format"
          :readonly="readonly"
          :placeholder="startPlaceholder"
          :picker-options="pickerOptionStart"
          @change="emitChange(currentValue)">
        </el-date-picker>
      </div>
      <span>{{rangeSeparator}}</span>
      <div class="cm-week-pickder__end">
        <el-date-picker
          v-model="currentValue[1]"
          type="week"
          :size="size"
          prefix-icon="null"
          :clearable="false"
          :format="format"
          :readonly="readonly"
          :placeholder="endPlaceholder"
          :picker-options="pickerOptionEnd"
          @change="emitChange(currentValue)">
        </el-date-picker>
      </div>
      <i
        @click="handleClickIcon"
        :class="[showClose ? '' + clearIcon : '']"
        class="cm-week-pickder__icon">
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CmWeekPicker',
  props: {
    value: {},
    startPlaceholder: {
      type: String,
      default: '开始日期'
    },
    endPlaceholder: {
      type: String,
      default: '结束日期'
    },
    format: String,
    size: String,
    clearIcon: {
      type: String,
      default: 'el-icon-circle-close'
    },
    rangeSeparator: {
      type: String,
      default: '-'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    readonly: {
      type: Boolean,
      default: false
    },
    pickerOptionStart: {},
    pickerOptionEnd: {}
  },
  data () {
    return {
      currentValue: Array.isArray(this.value) ? this.value : [],
      showClose: false
    }
  },
  computed: {
    valueIsEmpty () {
      if (Array.isArray(this.currentValue) && this.currentValue.length > 0) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    emitChange (val) {
      this.$emit('change', val)
      this.emitInput(val)
    },
    emitInput (val) {
      this.$emit('input', val)
    },
    onMouseEnter () {
      if (this.clearable && !this.valueIsEmpty && !this.readonly) {
        this.showClose = true
      }
    },
    handleClickIcon (event) {
      if (this.readonly) { return }
      event.stopPropagation()
      this.currentValue = []
      this.emitChange([])
      this.showClose = false
    }
  }
}
</script>

<style scoped>
  .cm-week-pickder {
    display: inline-block;
    line-height: normal;
  }
  .cm-week-pickder .cm-week-pickder__swap {
    position: relative;
    display: inline-block;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background: #ffffff;
  }
  .cm-week-pickder  .cm-week-pickder__start, .cm-week-pickder  .cm-week-pickder__end {
    display: inline-block;
  }
  .cm-week-pickder .cm-week-pickder__swap >>> .el-input{
    width: 127px;
  }
  .cm-week-pickder .cm-week-pickder__swap >>> .el-input__inner{
    border: none;
    text-align: center;
  }
  .cm-week-pickder .cm-week-pickder__swap .cm-week-pickder__start >>> .el-input__inner{
    padding-right: 0;
  }
  .cm-week-pickder .cm-week-pickder__swap .cm-week-pickder__end >>> .el-input__inner{
    padding-left: 0;
  }
  .cm-week-pickder .cm-week-pickder__swap .cm-week-pickder__icon{
    position: absolute;
    top: 30%;
    right: 10px;
    color: #c0c4cc;
    cursor: pointer;
  }
</style>
