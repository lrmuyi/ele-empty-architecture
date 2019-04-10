<template>
  <div class="cm-tag-select">
    <ul v-if="!multiple" class="cm-tag-select-list">
      <li
        class="value"
        v-for="(item, index) in valueList"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="onValueClick(item, index)">
        {{ item[props.label] }}
      </li>
    </ul>
    <ul v-else class="cm-tag-select-list">
      <li
        class="value"
        v-for="(item, index) in currentList"
        :key="index"
        :class="{ active: item.active }"
        @click="onMultipleSelect(item, index)">
        {{ item[props.label] }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CmTagSelect',
  props: {
    value: {},
    // 类别数组
    valueList: {
      type: Array,
      required: true
    },
    // 配置选项
    props: {
      type: Object,
      default: function () {
        return { value: 'value', label: 'label' }
      }
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentIndex: 0,
      selectedList: [],
      currentList: this.valueList
    }
  },
  created () {
    if (!this.value) {
      this.$emit('input', this.valueList[0][this.props.value])
    } else {
      if (!this.multiple) {
        for (let i = 0; i < this.valueList.length; i++) {
          if (this.valueList[i][this.props.value] === this.value) {
            this.currentIndex = i
            break
          }
        }
      } else {
        this.currentList.map((item) => {
          item.active = false
          return item
        })
      }
    }
  },
  methods: {
    // 点击某个选项
    onValueClick (obj, index) {
      this.currentIndex = index
      this.$emit('change', { value: obj[this.props.value], index: index })
      this.$emit('input', obj[this.props.value])
    },
    // 多选
    onMultipleSelect (obj, index) {
      if (this.selectedList.every((item) => item[this.props.value] !== obj[this.props.value])) {
        this.selectedList.push(obj)
      } else {
        for (let i = 0; i < this.selectedList.length; i++) {
          if (this.selectedList[i][this.props.value] === obj[[this.props.value]]) {
            this.selectedList.splice(i, 1)
          }
        }
      }
      this.currentList.splice(index, 1, {...obj, active: !obj.active})
      let data = this.selectedList.map((item) => item[this.props.value])
      this.$emit('change', data)
      this.$emit('input', data)
    }
  }
}
</script>

<style scoped>
.cm-tag-select {
  display: inline-block;
  margin-bottom: 10px;
}
.cm-tag-select ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
.cm-tag-select .cm-tag-select-list li {
  display: inline-block;
  height:22px;
  padding: 0 15px;
  margin: 0 7px;
  font-size:14px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:#666666;
  line-height: 22px;
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: top;
}
.cm-tag-select .cm-tag-select-list li:hover {
  color:#FF4A0C;
}
.cm-tag-select .cm-tag-select-list li.active {
  background:rgba(255,74,12,1);
  border-radius:2px;
  color: #FFFFFF;
}
</style>
