<script>
import CmStateIcon from 'chaomeng-ui/CmStateIcon'
export default {
  name: 'StateIcon',
  components: {
    CmStateIcon
  }
}
</script>

## StateIcon 状态图标

标记当前状态，告知用户当前状态信息。

### 环形状态图标

:::demo `state`有四种状态：`running` `success` `fail` `normal`；可以通过`title` 设置悬浮提示
```html
<template>
  <div>
    <p>normal: <cm-state-icon diameter="30" state="normal" title="normal">2</cm-state-icon></p>
    <p>running: <cm-state-icon state="running" title="正在运行"></cm-state-icon></p>
    <p>success: <cm-state-icon state="success" title="成功"></cm-state-icon></p>
    <p>fail: <cm-state-icon state="fail" title="失败"></cm-state-icon></p>
  </div>
</template>

```
:::

### 点状态图标

:::demo 可通过属性 `type` 来指定状态图标类型； 通过 `diameter` 来设置直径
```html
<template>
  <div>
    <p>normal: <cm-state-icon type="solid" diameter="10" state="normal"></cm-state-icon></p>
    <p>running: <cm-state-icon type="solid" state="running"></cm-state-icon></p>
    <p>success: <cm-state-icon type="solid" state="success"></cm-state-icon></p>
    <p>fail: <cm-state-icon type="solid" state="fail"></cm-state-icon></p>
  </div>
</template>

```
:::

### StateIcon 属性


|参数|说明|类型|可选值|默认|
|----|----|---|---|---|
|state|状态|string|running、success、fail、normal|normal|
|type|状态图标类型|string|yollow、solid|yollow|
|diameter|状态图标直径|string|—|20（单位：px）|
|title|悬浮提示|string|—|—|

### StateIcon slot


|name|说明|
|----|----|
|—|环形图标内容，只在 `type` 是 `yollow` 的时候才起作用|
