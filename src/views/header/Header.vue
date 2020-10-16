<template>
	<div class="headerImg">
   	  <el-row :gutter="15">
   	  	 <HeaderImg></HeaderImg>
   	  	 <Search></Search>
   	  	 <SelectData></SelectData>
   	  	 <Week></Week>
   	  	 <Inform></Inform>
   	  	 <File></File>
   	  	 <User></User>
   	  </el-row>
   </div>
</template>

<script>
	import HeaderImg from './HeaderImg'
	import Search from './Search'
	import SelectData from './SelectData'
	import Week from './Week'
	import Inform from './Inform'
	import File from './File'
	import User from './User'
	export default{
		name:'Header',
		components:{
			HeaderImg,
			Search,
			SelectData,
			Week,
			Inform,
			File,
			User,			
		}
		
	}
</script>

<style>
	body{
		margin: 0;
		padding: 0;
		height: 150px;
		width: 100%;
	}
	.headerImg{
		background-color:#009999;
		padding-top: 10px;
	}
	.header{
		padding-top: 15px;
		text-align: center;
	}
	.item {
	  margin-top: 0px;
	  margin-right: 0px;
	  
	}
</style>