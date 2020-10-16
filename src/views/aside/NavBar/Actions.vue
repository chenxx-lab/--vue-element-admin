<template>
	<div>
		<el-submenu index="6" style="background-color: beige;">
		        <template slot="title"><i class="el-icon-s-promotion"></i>
		        	行为轨迹分析
		        </template>
		        <el-menu-item-group>
		          <el-menu-item index="6-1" class="el-icon-map-location">区域</el-menu-item>
		          <el-menu-item index="6-2" class="el-icon-user-solid">同处人员列表</el-menu-item>
		        </el-menu-item-group>	        
		</el-submenu>
	</div>
</template>

<script>
	export default{
		name:'Actions',
		data(){
			return{
				Actionshow:true
			}
		},
		methods:{
			if(){}
		}
	}
</script>

<style>
</style>