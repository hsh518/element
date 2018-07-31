<template>
<div>
	<el-container>
		<el-header>
			<el-menu class="header_menu" mode="horizontal" index="0" default-active="/" :router="true" >
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
		<el-container>
			<el-aside width="240px">
				<el-menu index="0" :router="true" :default-active="defaultActive">
					<el-menu-item-group v-for="(item, index) in asideMenu" :index="item.title">
						<template slot="title">{{ item.title }}</template>
						<el-menu-item v-for="(children, childIndex) in item.child" :index="children.path">{{ children.title }}</el-menu-item>
					</el-menu-item-group>
				</el-menu>
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</div>
</template>
<script>
/**
 * 组件示例页
 *
 * 参考原型: [element-ui组件页]
 *
 * 主要功能
 * 1.展示歌组件的使用实例
 *
 * @author HSH-heshenghuan-[2018/07/29 16:09, ]
 */
  export default{
    data(){
      return {
        /*侧边路由*/
        defaultActive: '/layout',
        asideMenu:[{
        	title: 'Basic',
        	child: [{
        		title: 'Layout布局',
        		path: '/layout'
        	},{
        		title: 'Container布局',
        		path: '/container'
        	},{
        	  title: 'Button按钮',
            path: '/button'
          }]
        },{
        	title: 'Form',
        	child: [{
        		title: 'Input输入框',
        		path: '/input'
        	},{
        		title: 'Switch开关',
        		path: '/switch'
        	}]
        },{
            title: 'Notice',
            child: [{
              title: 'Loading...组件',
              path: '/loading'
            },{
              title: 'Message信息提示',
              path: '/message'
            }]
        }]
      }
    },
    methods:{
    	/**
    	 * 路由初始化
    	 *
    	 * @author HSH-heshenghuan-2018/07/29
    	 */
    	setDefaultActive(){
    		let path=this.$route.path;
    		this.defaultActive=path;
    	}
    },
    created(){
    	this.setDefaultActive();
    }
  }
</script>
<style scoped>
.header_menu{padding-left: 60%}
</style>
