<template>
  <div>
    <el-button :loading="loading" @click="toPost">发送请求</el-button>
  </div>
</template>
<script>
  /**
   * botton组件示例
   *
   * 参考原型-[element button组件]
   *
   * 主要功能
   * 1.button组件示例
   *
   * @author HSH-heshenghuan-[2018/7/31 16:13,2018/7/31 16:17 ]
   */
  export default {
    data(){
      return{
        loading:false
      }
    },
    methods:{
      /**
       * 测试button loading效果
       *
       * @author HSH-heshenghuan-[2018/7/31]
       */
      toPost(){
        this.loading=true;
        setTimeout(()=>{
          this.loading=false;
        },2000)
      }
    }
  }
</script>
