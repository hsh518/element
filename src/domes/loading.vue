<template>
  <div>
    <el-table
      :data="tableData"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.5)" >
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
    </el-table>
  </div>
</template>
<script>
  /**
   * loading效果示例
   *
   * 参考原型-[element loading组件]
   *
   * 主要功能
   * 1.loading效果示例
   *
   * @author HSH-heshenghuan-[2018/07/31 9:46， ]
   */
  export default {

    data(){
      return{
        loading:true,
        tableData:[{
          date:'2018-07-22',
          name:'kant',
          sex:'boy'
        },{
          date:'2018-07-22',
          name:'kant',
          sex:'boy'
        },{
          date:'2018-07-22',
          name:'kant',
          sex:'boy'
        }]
      }
    }
  }
</script>
