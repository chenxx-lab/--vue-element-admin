<template>
	<el-col :xs="5" :sm="3" :md="4" :lg="4" :xl="4">
	  	<div class="grid-content bg-Danger header" style="margin-top: 2px;">
	  		<el-badge :value="12" class="item">
			  <el-dropdown>
				  <span class="el-dropdown-link">
				    <el-button round size="small">
				    	系统通知
				    	<i class="el-icon-bell"></i>
				    </el-button>
				  </span>
				  <el-dropdown-menu slot="dropdown">
				    <el-dropdown-item class="clearfix">
                                                 申请留宿
                       <el-badge class="mark" :value="2" style="margin-left: 40px;"/>			    	
				  	</el-dropdown-item>
				  	
				    <el-dropdown-item class="clearfix">
                                                  宿舍报销
                       <el-badge class="mark" :value="2+'+'" style="margin-left: 35px;"/>					    	
				    </el-dropdown-item>
				    
				    <el-dropdown-item class="clearfix">
                                                 出现老鼠等
                       <el-badge class="mark" :value="2+'+'" style="margin-left: 22px;"/>				    	
				    </el-dropdown-item>
				    
				    <el-dropdown-item class="clearfix">
                                                 床椅申请更换
                       <el-badge class="mark" :value="2" style="margin-left: 13px;"/>				    	
				    </el-dropdown-item>
				    <el-dropdown-item divided>其他问题</el-dropdown-item>
				  </el-dropdown-menu>
			  </el-dropdown>
			</el-badge>
	  	</div>
	  </el-col>
</template>

<script>
	export default{
		name:'Inform'
	}
</script>

<style>
</style>