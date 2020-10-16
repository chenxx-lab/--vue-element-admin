<template>
 <div class="Nav">	
     <el-scrollbar style="height:100%">   	
		 <el-menu>  	
         <el-container role="menuitem" class="el-submenu">
		  <el-aside width="100%" class="el-aside aside">
		  	<!--:default-openeds="['1', '9']"加载时默认打开谁-->
		  	<!--折叠侧边栏-->		  		  		
		  		<nav-item></nav-item> 		  		 	       
		  </el-aside>
	    </el-container>
	
	    </el-menu>
	 </el-scrollbar>
	
 </div>
</template>

<script>
	import NavItem from './NavItem'
	export default{
		name:'Nav',
		data() {
	      return {
	       
	      }
	     },
    
		components:{
			NavItem
		}
	}
</script>

<style>
	.Nav{
		position: absolute;
		height: 540px;
		width: 15%;
		margin-top: 5px;
	}
	body .el-scrollbar__wrap {
    overflow-x: hidden;
    }
 
</style>