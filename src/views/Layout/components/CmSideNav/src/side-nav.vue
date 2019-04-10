<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="showTimeout"
      :default-active="$route.path"
      :collapse="collapse"
      :background-color="backgroundColor"
      :text-color="textColor"
      :activeTextColor="activeTextColor"
    >
      <side-nav-item v-for="route in routes" :key="route.name" :item="route" :base-path="route.path"></side-nav-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SideNavItem from './side-nav-item'

export default {
  name: 'SideNav',
  components: { SideNavItem },
  props: {
    routes: {
      type: Array
    },
    collapse: {
      type: Boolean,
      default: false
    },
    showTimeout: {
      type: Number,
      default: 200
    },
    backgroundColor: {
      type: String
    },
    textColor: {
      type: String
    },
    activeTextColor: {
      type: String
    }
  }
}
</script>
