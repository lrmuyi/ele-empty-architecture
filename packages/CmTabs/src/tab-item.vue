<script>
export default {
  name: 'CmTabItem',
  props: {
    name: String
  },
  render: function (h) {
    let { isActive, changeTabName, name } = this
    return (
      <div class={{ 'cm-tabs-list__item': true, 'active': isActive }} on-click={(event) => { changeTabName(name, event) }}>
        {this.$slots.default}
      </div>
    )
  },
  computed: {
    isActive () {
      return this.name === this.$parent.currentName
    },
    tabs () {
      return this.$parent.tabs
    }
  },
  methods: {
    changeTabName (tabName, event) {
      this.$parent.currentName = tabName
      this.$parent.handleTabClick(tabName, event)
    }
  }
}
</script>
