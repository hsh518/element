<template>
  <div>
    <el-button @click="openMessage">测试消息型loading...</el-button>
  </div>
</template>
<script>
  /**
   * message效果示例
   *
   * 参考原型-[element message组件]
   *
   * 主要功能
   * 1.loading效果示例
   *
   * @author HSH-heshenghuan-[2018/07/31 15:43， ]
   */
  export default{
    methods:{
      openMessage(){
        this.$message({
          type: 'warning',
          iconClass: 'el-icon-loading',
          message: '请稍等',
          center: true,
          duration: 1000
        })
      }
    }
  }
</script>
