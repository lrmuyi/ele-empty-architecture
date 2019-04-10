<template>
    <div :class="sizeClassObject">
      <input
        type="text"
        v-if="type == 'text'"
        :value="formatStr"
        @input="toArray"
        v-bind="$attrs"
        :readonly="readonly"
        :disabled="disabled"
        :placeholder="placeholder"
        class="array-input__inner">
      <textarea
        v-if="type == 'textarea'"
        :value="formatStr"
        @input="toArray"
        v-bind="$attrs"
        :readonly="readonly"
        :disabled="disabled"
        :placeholder="placeholder"
        class="array-input__inner"></textarea>
    </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'cm-array-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    size: {
      type: String,
      default: ''
    },
    value: {
      type: Array,
      required: true
    },
    // 分隔符 默认","分隔
    separator: {
      type: String,
      default: ','
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  computed: {
    // 将数组转换为用指定字符连接的字符串
    formatStr () {
      if (Array.isArray(this.value)) {
        return this.value.join(this.separator)
      } else {
        return ''
      }
    },
    // input 大小
    sizeClassObject () {
      return {
        'array-input': true,
        'array-input--small': this.size === 'small'
      }
    }
  },
  methods: {
    // 转换为数组
    toArray (event) {
      const result = event.target.value !== '' ? (event.target.value).split(this.separator) : []
      this.$emit('change', result)
    }
  }
}
</script>

<style scoped>
.array-input{
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px;
}
.array-input .array-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 100%;
}
.array-input--small .array-input__inner {
  height: 32px;
  line-height: 32px;
}
.array-input__inner::-webkit-input-placeholder {
  color: #d6d6d6;
}
</style>
