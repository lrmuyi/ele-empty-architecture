<template>
    <div class="cm-trend">
      <img v-if="isRise" src="./assets/rose.svg" alt="rise" class="cm-trend_state-icon">
      <img v-if="!isRise" src="./assets/decline.svg" alt="decline" class="cm-trend_state-icon">
      <span :class="currentState">{{currentValue}}{{unit}}</span>
    </div>
</template>

<script>
export default {
  name: 'CmTrend',
  props: {
    value: {},
    unit: ''
  },
  computed: {
    currentValue () {
      return this.value
    },
    isRise () {
      let result = false
      if (this.currentValue > 0) {
        result = true
      }
      return result
    },
    currentState () {
      let className = 'cm-trend_rise'
      if (this.isRise) {
        className = 'cm-trend_rise'
      } else {
        className = 'cm-trend_decline'
      }
      return className
    }
  }
}
</script>

<style scoped>
.cm-trend {
  display: inline-block;
  font-size:14px;
  font-weight:500;
}
.cm-trend .cm-trend_state-icon {
  width:13px;
}
.cm-trend .cm-trend_rise {
  color:#7EB75E;
}
.cm-trend .cm-trend_decline{
  color:#F76260;
}
</style>
