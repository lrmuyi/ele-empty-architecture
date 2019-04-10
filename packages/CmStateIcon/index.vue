<template>
  <div class="cm-state-icon" :class="{ 'cm-state-icon__hollow': type === 'hollow', 'cm-state-icon__solid': type === 'solid' }">
      <span :class="['cm-state-icon__outer', currentClass]" :title="title" :style="{ width: (diameter + 'px'), height: (diameter + 'px'), lineHeight: diameter? (diameter - 3 + 'px') : ( '20' + 'px' )}">
        <slot v-if="type === 'hollow'"></slot>
      </span>
  </div>
</template>

<script>
export default {
  name: 'CmStateIcon',
  props: {
    // 直径
    diameter: {
      type: String,
      default: '20'
    },
    // 状态
    state: {
      type: String,
      default: 'normal'
    },
    type: {
      type: String,
      default: 'hollow'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currentStatus: this.state,
      currentClass: {
        'doughnut__normal': true
      }
    }
  },
  watch: {
    state: {
      handler: function (newValue) {
        switch (newValue) {
          case 'running':
            this.currentClass = {
              'doughnut__running': true
            }
            break
          case 'success':
            this.currentClass = {
              'doughnut__success': true
            }
            break
          case 'fail':
            this.currentClass = {
              'doughnut__failed': true
            }
            break
          default:
            this.currentClass = {
              'doughnut__normal': true
            }
            break
        }
        // if (this.type === 'hollow') {
        //   this.currentClass['cm-state-icon__hollow'] = true
        // } else {
        //   this.currentClass['cm-state-icon__solid'] = true
        // }
      },
      immediate: true
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $--state-success-color: #13CE66;
  $--state-running-color: #409eff;
  $--state-fail-color: #F25F5D;
  $--state-normal-color: #C0C4CC;
  .cm-state-icon {
    display: inline-block;
    color: #000000;
    font-size: 14px;
    text-align: center;
    .cm-state-icon__outer {
      display: inline-block;
      width: 20px;
      height: 20px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      background-color: #ffffff;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      vertical-align: middle;
    }
  }
  .cm-state-icon__hollow {
    .doughnut__failed {
      border: 3px $--state-fail-color solid;
    }
    .doughnut__success {
      border: 3px $--state-success-color solid;
    }
    .doughnut__running {
      border: 3px $--state-running-color solid;
    }
    .doughnut__normal {
      border: 3px $--state-normal-color solid;
    }
  }
  .cm-state-icon__solid {
    .doughnut__failed {
      background-color: $--state-fail-color;
    }
    .doughnut__success {
      background-color: $--state-success-color;
    }
    .doughnut__running {
      background-color: $--state-running-color;
    }
    .doughnut__normal {
      background-color: $--state-normal-color;
    }
  }
</style>
