<template>
	<div>
		<el-submenu index="1" style="background-color: beige;">	      	
		    <template slot="title">
		        <i class="el-icon-school"></i>
		        宿舍门禁
		    </template>
			    <el-menu-item-group>
				    <el-menu-item index="1-1">院领导</el-menu-item>
				    <el-menu-item index="1-2">二级学院</el-menu-item>
		            <el-menu-item index="1-3">辅导员</el-menu-item>
		        </el-menu-item-group>
		        
		        <el-submenu index="1-4">
		          <template slot="title"></i>宿管员</template>
		          <el-menu-item index="1-4-1" style="background-color: #EBEEF5;" class="el-icon-female">陈阿姨</el-menu-item> 
		          <el-menu-item index="1-4-2" style="background-color: #EBEEF5;" class="el-icon-female">吴阿姨</el-menu-item>
	            </el-submenu>
        </el-submenu>
	</div>
</template>

<script>
	export default{
		name:'DormDoor'
	}
</script>

<style>
</style>