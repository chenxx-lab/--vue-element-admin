<template>
	<el-col :xs="3" :sm="3" :md="1" :lg="2" :xl="1">
	  	<div class="grid-content bg-Danger" >
	  		<div style="width: 0px;height: 0px;margin-top: 5px;">
		      <el-menu  class="el-menu-demo" mode="horizontal">
		      	<el-submenu index="1">
				    <template slot="title">
				    	<el-avatar :size="32" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
				    </template>
				    <el-menu-item index="1-1">
				    	<i class="el-icon-user"></i>
				    	昵称：陈兴学
				    </el-menu-item>
				    <el-menu-item index="1-2">
				    	<i class="el-icon-s-platform"></i>
				    	系统中心
				    </el-menu-item>
				    <el-menu-item index="1-3">
				    	<i class="el-icon-setting"></i>
				    	账号设置
				    </el-menu-item>	
				    <el-menu-item index="21-4">
				    	<i class="el-icon-cpu"></i>
				    	后台管理
				    </el-menu-item>	
				    <el-menu-item index="1-5">
				    	<i class="el-icon-basketball"></i>
				    	宿舍活动
				    </el-menu-item>	
				    <el-menu-item index="1-6">
				    	<i class="el-icon-open"></i>
				    	退出
				    </el-menu-item>	
				    <el-menu-item index="1-7">
				    	<i class="el-icon-question"></i>
				    	帮助
				    </el-menu-item>	
				  </el-submenu>
			</el-menu>
		    </div>
	  	</div>
	  </el-col>
</template>

<script>
	export default{
		name:'User'
	}
</script>

<style>
</style>