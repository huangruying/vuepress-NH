<template>
  <div class="notification">
    <div v-if="Num == 1">
      <el-button plain @click="open1">成功</el-button>
      <el-button plain @click="open2">警告</el-button>
      <el-button plain @click="open3">消息</el-button>
      <el-button plain @click="open4">错误</el-button>
      <el-button plain @click="open5">普通</el-button>
    </div>
    <div v-else-if="Num == 2">
      <el-button plain @click="open6">左边</el-button>
      <el-button plain @click="open7">右边</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    Num: {
      type: String
    }
  },
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
    },
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

<style>
.el-message.myMsgR{
  right: 1% !important;
  left: auto !important;
  transform: none !important;
}
.el-message.myMsgL{
  right: auto !important;
  left: 3% !important;
  transform: none !important;
}
/* 以下消息提示 */
.el-notification{
  z-index: 2021 !important;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.el-notification .el-notification__content{
  line-height: 15px !important;
  margin: 0 !important;
}
.el-notification .el-notification__title{
  padding-bottom: 0;
  border-bottom: 0px solid #eaecef;
}
/* 错误 */
.el-notification.errorNo{
  background: #fef0f0;
}
.el-notification.errorNo p{
  color: #f56c6c !important;
}
.el-notification.errorNo .el-notification__closeBtn{
  color: #f56c6c !important;
}
.el-notification.errorNo .el-notification__title{
  color: #f56c6c !important;
}
/* 消息 */
.el-notification.infoNo{
  background: #edf2fc;
}
.el-notification.infoNo p{
  color: #909399 !important;
}
.el-notification.infoNo .el-notification__closeBtn{
  color: #909399 !important;
}
.el-notification.infoNo .el-notification__title{
  color: #909399 !important;
}
/* 警告 */
.el-notification.warningNo{
  background: #fdf6ec;
}
.el-notification.warningNo p{
  color: #e6a23c !important;
}
.el-notification.warningNo .el-notification__closeBtn{
  color: #e6a23c !important;
}
.el-notification.warningNo .el-notification__title{
  color: #e6a23c !important;
}
/* 成功 */
.el-notification.successNo{
  background: #f0f9eb;
}
.el-notification.successNo p{
  color: #67c23a !important;
}
.el-notification.successNo .el-notification__closeBtn{
  color: #67c23a !important;
}
.el-notification.successNo .el-notification__title{
  color: #67c23a !important;
}
</style>