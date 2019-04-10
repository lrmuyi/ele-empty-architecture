<script>
import CmSideNav from 'chaomeng-ui/CmSideNav'
export default {
  name: 'SideNav',
  components: {
    CmSideNav
  },
  data () {
    return {
      isCollapse: false,
      routes: [
        {
          path: '/',
          name: 'nav1',
          meta: { title: '导航一'},
          component: 'page1'
        },
        {
          path: '/nav2',
          name: 'nav2',
          meta: { title: '导航二'},
          component: 'page2'
        },
        {
          path: '/nav3',
          name: 'nav3',
          meta: { title: '导航三'},
          component: 'page3'
        }
      ],
     routes2: [
         {
           path: '/',
           name: 'nav1',
           meta: { title: '导航一', iconPath: 'assets/logo.png'},
           component: 'page1'
         },
         {
           path: '/nav2',
           name: 'nav2',
           meta: { title: '导航二', icon: 'input'},
           component: 'page2'
         },
         {
           path: '/nav3',
           name: 'nav3',
           meta: { title: '导航三', icon: 'github'},
           component: 'page3'
         }
       ],
       routes3: [
              {
                path: '/',
                name: 'nav1',
                meta: { title: '导航1', icon: 'smile'},
                children: [
                    {
                        path: 'nav1-1',
                        name: 'nav1-1',
                        meta: { title: '导航1-1', icon: 'smile'},
                        component: 'page1-1'
                    },
                    {
                        path: 'nav1-2',
                        name: 'nav1-2',
                        meta: { title: '导航1-2', icon: 'smile'},
                        children: [
                            {
                                path: 'nav1-2-1',
                                name: 'nav1-2-1',
                                meta: { title: '导航1-2-1', icon: 'smile'},
                                component: 'page1-2-1'
                            }
                        ]
                    }
                ]
              },
              {
                path: '/nav2',
                name: 'nav2',
                meta: { title: '导航2', icon: 'input'},
                component: 'page2'
              },
              {
                path: '/nav3',
                name: 'nav3',
                meta: { title: '导航3', icon: 'github'},
                component: 'page3'
              }
            ],
            routes4: [
                     {
                       path: '/',
                       name: 'nav1',
                       meta: { title: '导航一' },
                       component: 'page1'
                     },
                     {
                       path: '/nav2',
                       name: 'nav2',
                       meta: { title: '导航二' },
                       component: 'page2',
                       hidden: true
                     },
                     {
                       path: '/nav3',
                       name: 'nav3',
                       meta: { title: '导航三' },
                       component: 'page3'
                     }
                   ],
    }
  }
}
</script>
## SideNav 侧栏菜单

侧栏菜单组件，只需要把路由配置传入即可。

### 基础用法

:::demo 
```html
<template>
  <div>
    <cm-side-nav :routes="routes" class="side-nav"></cm-side-nav>
  </div>
</template>

<script>
import CmSideNav from 'chaomeng-ui/CmSideNav'
export default {
  name: 'SideNav',
  components: {
    CmSideNav
  },
  data () {
    return {
      routes: [
        {
          path: '/',
          name: 'nav1',
          meta: { title: '导航一'},
          component: 'page1'
        },
        {
          path: '/nav2',
          name: 'nav2',
          meta: { title: '导航二'},
          component: 'page2'
        },
        {
          path: '/nav3',
          name: 'nav3',
          meta: { title: '导航三'},
          component: 'page3'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .side-nav {
    width: 180px;
  }
</style>

```
:::

### 隐藏某个路由

:::demo 只需要在路由配置选项中添加`hidden: true`即可
```html
<template>
  <div>
    <cm-side-nav
     :routes="routes4"
      class="side-nav"
      background-color="#409EFF"
      text-color="#ffffff"></cm-side-nav>
  </div>
</template>

<script>
import CmSideNav from 'chaomeng-ui/CmSideNav'
export default {
  name: 'SideNav',
  components: {
    CmSideNav
  },
  data () {
    return {
      routes4: [
        {
          path: '/',
          name: 'nav1',
          meta: { title: '导航一'},
          component: 'page1'
        },
        {
          path: '/nav2',
          name: 'nav2',
          meta: { title: '导航二'},
          component: 'page2',
          hidden: true
        },
        {
          path: '/nav3',
          name: 'nav3',
          meta: { title: '导航三'},
          component: 'page3'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .side-nav {
    width: 180px;
  }
</style>

```
:::

### 带有图标

:::demo 需要再路由配置`meta`中加上`icon`属性。`SideNav`默认使用`svg-icon`组件，如果没有使用该组件可以使用`iconPath`（图标路径，基本路径为`@/`）属性代替`icon`
```html
<template>
  <div>
    <cm-side-nav :routes="routes2" class="side-nav"></cm-side-nav>
  </div>
</template>

<script>
import CmSideNav from 'chaomeng-ui/CmSideNav'
export default {
  name: 'SideNav',
  components: {
    CmSideNav
  },
  data () {
    return {
      routes2: [
        {
          path: '/',
          name: 'nav1',
          meta: { title: '导航一', iconPath: 'assets/logo.png'},
          component: 'page1'
        },
        {
          path: '/nav2',
          name: 'nav2',
          meta: { title: '导航二', icon: 'input'},
          component: 'page2'
        },
        {
          path: '/nav3',
          name: 'nav3',
          meta: { title: '导航三', icon: 'github'},
          component: 'page3'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .side-nav {
    width: 180px;
  }
</style>

```
:::

### 折叠

:::demo 加上`collapse`属性即可开始折叠功能
```html

<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <cm-side-nav :routes="routes2" class="side-nav" :collapse="isCollapse"></cm-side-nav>
  </div>
</template>

<script>
import CmSideNav from 'chaomeng-ui/CmSideNav'
export default {
  name: 'SideNav',
  components: {
    CmSideNav
  },
  data () {
    return {
      isCollapse: false,
      routes2: [
        {
          path: '/',
          name: 'nav1',
          meta: { title: '导航一', iconPath: 'assets/logo.png'},
          component: 'page1'
        },
        {
          path: '/nav2',
          name: 'nav2',
          meta: { title: '导航二', icon: 'input'},
          component: 'page2'
        },
        {
          path: '/nav3',
          name: 'nav3',
          meta: { title: '导航三', icon: 'github'},
          component: 'page3'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .side-nav {
    width: 180px;
  }
</style>

```
:::

### 嵌套

:::demo 只要符合vue-router路由嵌套配置规则即可
```html
<template>
  <div>
    <cm-side-nav :routes="routes3" class="side-nav"></cm-side-nav>
  </div>
</template>

<script>
import CmSideNav from 'chaomeng-ui/CmSideNav'
export default {
  name: 'SideNav',
  components: {
    CmSideNav
  },
  data () {
    return {
      routes3: [
          {
            path: '/',
            name: 'nav1',
            meta: { title: '导航1', icon: 'smile'},
            children: [
                {
                    path: 'nav1-1',
                    name: 'nav1-1',
                    meta: { title: '导航1-1', icon: 'smile'},
                    component: 'page1-1'
                },
                {
                    path: 'nav1-2',
                    name: 'nav1-2',
                    meta: { title: '导航1-2', icon: 'smile'},
                    children: [
                        {
                            path: 'nav1-2-1',
                            name: 'nav1-2-1',
                            meta: { title: '导航1-2-1', icon: 'smile'},
                            component: 'page1-2-1'
                        }
                    ]
                }
            ]
          },
          {
            path: '/nav2',
            name: 'nav2',
            meta: { title: '导航2', icon: 'input'},
            component: 'page2'
          },
          {
            path: '/nav3',
            name: 'nav3',
            meta: { title: '导航3', icon: 'github'},
            component: 'page3'
          }
        ]
    }
  }
}
</script>

<style scoped>
  .side-nav {
    width: 180px;
  }
</style>

```
:::

### SideNav 属性


|参数|说明|类型|默认值|
|----|----|---|----|
|routes|路由配置|array|-|
|collapse|是否折叠|boolean|false|
|background-color|菜单的背景色（仅支持 hex 格式）|string|#ffffff|
|text-color|菜单的文字颜色（仅支持 hex 格式）|string|#303133|
|active-text-color|当前激活菜单的文字颜色（仅支持 hex 格式）|string|#409EFF|
