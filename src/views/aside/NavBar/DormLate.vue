<template>
	<div>
		<el-submenu index="2" style="background-color: beige;">
		        <template slot="title">
		        	<i class="el-icon-timer"></i>
		        	宿舍晚归
		        </template>
		        <el-menu-item-group>		
		          <el-menu-item index="2-1" class="el-icon-place">宿管员端</el-menu-item>
		          <el-menu-item index="2-2" class="el-icon-place">辅导员端</el-menu-item>
		        </el-menu-item-group>		       
		</el-submenu>
	</div>
</template>

<script>
	export default{
		name:'DormLate'
	}
</script>

<style>
</style>