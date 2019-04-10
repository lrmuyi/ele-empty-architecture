<template>
  <div v-if="!item.hidden" class="menu-wrapper">

      <router-link v-if="item.component && !item.children" :to="resolvePath(item.path)">
        <el-menu-item :index="resolvePath(item.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <svg-icon class="menu-item-icon" v-if="item.meta&&item.meta.icon" :name="item.meta.icon"></svg-icon>
          <img class="menu-item-img" v-if="item.meta&&item.meta.iconPath " :src="imgPath(item.meta.iconPath)">
          <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-if="item.children" :index="item.name||item.path">
        <template slot="title">
          <svg-icon class="menu-item-icon" v-if="item.meta&&item.meta.icon" :name="item.meta.icon"></svg-icon>
          <img class="menu-item-img" v-if="item.meta&&item.meta.iconPath " :src="imgPath(item.meta.iconPath)">
          <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
        </template>

        <template v-for="child in item.children" v-if="!child.hidden">
          <side-nav-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :item="child" :key="child.path" :base-path="resolvePath(child.path)"></side-nav-item>

          <router-link v-else :to="resolvePath(child.path)" :key="child.name">
            <el-menu-item :index="resolvePath(child.path)">
              <svg-icon class="menu-item-icon" v-if="child.meta&&child.meta.icon" :name="child.meta.icon"></svg-icon>
              <img class="menu-item-img" v-if="item.meta&&item.meta.iconPath " :src="imgPath(item.meta.iconPath)">
              <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

  </div>
</template>

<script>
import path from 'path'

export default {
  name: 'SideNavItem',
  props: {
    // route配置json
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  methods: {
    resolvePath (...paths) {
      return path.resolve(this.basePath, ...paths)
    },
    imgPath (paths) {
      return require('@/' + paths)
    }
  }
}
</script>
<style scoped>
  .menu-item-icon {
    margin-right: 5px;
  }
  .menu-item-img {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
