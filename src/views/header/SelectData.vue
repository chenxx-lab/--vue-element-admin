<template>
	<el-col :xs="0" :sm="2" :md="3" :lg="3" :xl="3">
	  	<div class="grid-content bg-Danger header">
	  		<input 
	  			size="samll"
	  			type="date" 
	  			name="日期" 
	  			id="date" 
	  			value="" 
	  			style="border: 3px darkcyan solid; width: 120px;height: 30px;;"
	  			/> 
	  		
	  	</div>
	  </el-col>
</template>

<script>
	export default{
		name:'SelectData'
	}
</script>

<style>
</style>