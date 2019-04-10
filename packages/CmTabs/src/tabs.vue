<template>
  <div class="cm-tabs">
    <div class="cm-tabs-list">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CmTabs',
  props: {
    value: String
  },
  data () {
    return {
      currentName: this.value,
      tabs: []
    }
  },
  watch: {
    value (value) {
      this.setCurrentName(value)
    }
  },
  updated () {
    this.calcTabInstances()
  },
  methods: {
    setCurrentName (value) {
      this.currentName = value
      this.$emit('input', value)
    },
    calcTabInstances () {
      if (this.$slots.default) {
        const tabSlots = this.$slots.default.filter((vnode) => vnode.tag &&
          vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'CmTabItem')
        const tabs = tabSlots.map(({ componentInstance }) => componentInstance)
        if (!(this.tabs.length === tabs.length && tabs.every((tab, index) => tab === this.tabs[index]))) {
          this.tabs = tabs
        }
      }
    },
    handleTabClick (tabName, event) {
      this.setCurrentName(tabName)
      this.$emit('tab-click', tabName, event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  .cm-tabs {
    .cm-tabs-list {
      width: 100%;
      display: flex;
      background: #ffffff;
      .cm-tabs-list__item {
        padding: 20px 45px;
        flex-grow: 1;
        box-sizing: border-box;
        border:none;
        border-right: 1px solid #eeeeee;
        cursor: pointer;
        text-align: left;
        color: #000;
        &:last-child {
          border: none;
        }
      }
      .active {
        background: #FAFAFA;
      }
    }
  }
</style>
