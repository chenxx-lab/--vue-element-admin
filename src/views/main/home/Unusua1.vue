<template>
	<div class="unusua1">
		
		<!--本周考勤异常人数-->
		<div style="background-color:beige;" align="center">本周异常人数</div>
		<div align="center">
			<el-row>
			  <el-col :span="8">
			  	<div class="grid-content bg-purple">
			  		<p>未归</p>
			  		<p style="color: orangered;">12</p>
			  	</div>
			  </el-col>
			  
			  <el-col :span="8">
			  	<div class="grid-content bg-purple-light">
			  		<p>晚归</p>
			  		<p style="color: purple;">12</p>
			  	</div>
			  </el-col>
			  
			  <el-col :span="8">
			  	<div class="grid-content bg-purple">
			  		<p>常宅</p>
			  		<p style="color: #42B983;">12</p>
			  	</div>
			  </el-col>
			  
			</el-row>	
		</div>
	</div>
</template>

<script>
	export default{
		name:'Unusua1'
	}
</script>

<style>
	.unusua1{
		border: 1px solid darkgray;
	}
</style>