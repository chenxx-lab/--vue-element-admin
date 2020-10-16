<template>
	<el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">
	  	<div class="grid-content bg-Danger header">
	  	 <el-input
		    size="large"
		    suffix-icon="el-icon-search"
		    placeholder="请输入内容"		    
		    v-model="input1">
		 </el-input>
	  </div>
	  </el-col>
</template>

<script>
	export default{
		name:'Search',
		data(){
			return{
				input1:''
			}
		}
	}
</script>

<style>
</style>