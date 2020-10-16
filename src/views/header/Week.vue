<template>
	<el-col :xs="0" :sm="2" :md="3" :lg="1" :xl="1">
	  	<div class="grid-content bg-Danger header">
	  	   <select style="border: 3px darkcyan solid; width: 70px;height: 34px;margin-top:2px;">
	  	   	<option>星期一</option>
	  	   	<option>星期二</option>
	  	   	<option>星期三</option>
	  	   	<option>星期四</option>
	  	   	<option>星期五</option>
	  	   	<option>星期六</option>
	  	   	<option>星期天</option>
	  	   	<option>假日</option>
	  	   </select>		  
	    </div>
	  </el-col>
</template>

<script>
	export default{
		name:'Week'
		
	}
</script>

<style>
</style>