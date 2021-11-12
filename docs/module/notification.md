# Notification 通知
由于 element 的 Message 并不提供左右等位置偏移，于是诞生了本组件。他是基于 element 的 Notification 通知，只是新增了自定义样式。
::: tip 提示
在使用前，请确保你在 APP.vue 或 main.js引入了全局样式。该样式局部作用不会生效。
:::


<div style="margin-top: 50px"></div>


**全局引入并挂载**（当然，你也可以局部引入使用）
```jsx
import Element from 'element-ui'
Vue.use(Element)
Vue.prototype.$notification = Element.Notification
```
<br>

<font size='5'>不同状态</font>

用来显示「成功、警告、消息、错误」类的操作反馈。

<notification Num="1" />

::: details 点击查看代码
```vue
<template>
  <div>
    <el-button plain @click="open1">成功</el-button>
    <el-button plain @click="open2">警告</el-button>
    <el-button plain @click="open3">消息</el-button>
    <el-button plain @click="open4">错误</el-button>
    <el-button plain @click="open5">普通</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$notification({
        message: '恭喜你，这是一条成功消息',
        type: 'success',
        customClass: 'successNo'
      })
    },
    open2() {
      this.$notification({
        message: '警告哦，这是一条警告消息',
        type: 'warning',
        customClass: 'warningNo'
      })
    },
    open3() {
      this.$notification({
        message: '这是一条消息提示',
        type: 'info',
        customClass: 'infoNo'
      })
    },
    open4() {
      this.$notification({
        message: '错了哦，这是一条错误消息',
        type: 'error',
        customClass: 'errorNo'
      })
    },
    open5() {
      this.$notification({
        message: '这是一条普通消息提醒'
      })
    }
  }
}
</script>
```
:::

---

<div style="margin-top: 50px"></div>

---

<font size='5'>Message进阶</font>

基于 Elelement 的 Message 样式升级，同样可以做到左右偏移。

<notification Num="2" />

::: details 点击查看代码
```vue
<template>
  <div>
    <el-button plain @click="open6">左</el-button>
    <el-button plain @click="open7">右</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    open6() {
      this.$message({
        message: '这是一条错误的提醒，他在左边',
        customClass: 'myMsgL',
        type: 'error'
      })
    },
    open7() {
      this.$message({
        message: '这是一条错误的提醒，他在右边',
        customClass: 'myMsgR',
        type: 'error'
      })
    }
  }
}
</script>
```
:::

---

<div style="margin-top: 50px"></div>

---

## Attributes

|   参数   |     说明     |     类型     |  默认值  |  详细  |
| :------: | :----------: | :----------: | :------: | :----: |
| customClass |  自定义类名  | String |  ——  | 见下表 |
|  其他见element文档  | 消息提示、通知 |  ——  | —— | —— |

**customClass的可选值**

|   名称   |     类型     |     说明     |
| :------: | :----------: | :----------: |
| successNo |  String  | 成功提示，仅在Notification生效 |
|  warningNo | String | 警告提示，仅在Notification生效 |
|  infoNo | String | 消息提示，仅在Notification生效 |
|  errorNo | String | 错误提示，仅在Notification生效 |
|  myMsgL | String | 偏左移，仅在Message生效 |
|  myMsgR | String | 偏右移，仅在Message生效 |
