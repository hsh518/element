<template>
<div>
	<el-container>
		<el-header>
			<el-menu class="menu" mode="horizontal" index="0" default-active="/guide" :router="true">
				<el-menu-item index="/">组件</el-menu-item>
				<el-menu-item index="/guide" >指南</el-menu-item>
				<el-submenu index="3">
					<template slot="title">版本</template>
					<el-menu-item index="3.1">2.4.3</el-menu-item>
					<el-menu-item index="3.2">2.0.3</el-menu-item>
					<el-menu-item index="3.3">1.0.3</el-menu-item>
				</el-submenu>
			</el-menu>
		</el-header>
			<el-main>
				指南
			</el-main>
	</el-container>
</div>
</template>
<script>
/**
 * 指南页
 *
 * 参考原型: [element-ui指南页]
 *
 * 主要功能
 * 1.element使用指南
 *
 * @author HSH-heshenghuan-[2018/07/29 17:32]
 */
  export default{
    data(){
      return {

      }
    }
  }
</script>
<style scoped>
.menu{padding-left: 60%}
</style>