<template>	
	<div class="UnusuaStu">	
		<el-scrollbar style="height:100%">
		  <el-row :gutter="10">
		   <!--本周异常人数-->
		  <el-col :xs="6" :sm="8" :md="7" :lg="6" :xl="6">
		  	<div>
		  		<el-row :gutter="10">
		  			<el-col :span="24">
		  				 <Unusua1></Unusua1>
		  			</el-col>
		  		</el-row>
		  		
		  		<div style="border: 1px solid darkgray; margin-top: 5px;">
		  			<div style="background-color:beige;" align="center">本周学生未归率</div>
		  			<el-row :gutter="10">
		  			<el-col :span="12">
		  				 <Pie></Pie>
		  				 <div align="center" style="color:lightgreen;">女生</div>
		  			</el-col>
		  			
		  			<el-col :span="12">
		  				 <Pie></Pie>
		  				 <div align="center" style="color: lightgreen;">男生</div>
		  			</el-col>
		  		</el-row>
		  		</div>
		  		
		  	 		  	
		  </div>
		  </el-col>
		  
		  <!--本周考勤异常趋势-->
		  <el-col :xs="10" :sm="8" :md="11" :lg="12" :xl="13">
		  	<div>		  		
		  		<LineEcharts1></LineEcharts1>
		  	</div>
		  </el-col>
		 
		  <!--考勤不合格top3-->
		  <el-col :xs="8" :sm="8" :md="6" :lg="6" :xl="5">
		  	<div>
		  		<Unusua2></Unusua2>
		  	</div>
		  </el-col>
		</el-row>
		
		
		  <div class="echarts">
			<el-row :gutter="10">
		   <!--本周学生晚归率-->		  
		  <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">		  	 
		  	<div style="border: 1px solid darkgray; margin-top: 5px;">
		  		<div style="background-color:beige;" align="center">本周学生晚归率</div>
		  		<el-row :gutter="10">
		  			<el-col :span="12">
		  				 <Pie></Pie>
		  				 <div align="center" style="color:lightgreen;">女生</div>
		  			</el-col>
		  			
		  			<el-col :span="12">
		  				 <Pie></Pie>
		  				 <div align="center" style="color: lightgreen;">男生</div>
		  			</el-col>
		  		</el-row>	
		  	</div>	
		  	
		  		<div style="border: 1px solid darkgray; margin-top: 5px;">
		  		<div style="background-color:beige;" align="center">本周学生常宅率</div>
		  		<el-row :gutter="10">		  			
		  			<div>
		  			<el-col :span="12">
		  				 <Pie></Pie>
		  				 <div align="center" style="color:lightgreen;">女生</div>
		  			</el-col>
		  			
		  			<el-col :span="12">
		  				 <Pie></Pie>
		  				 <div align="center" style="color: lightgreen;">男生</div>
		  			</el-col>
		  			</div>
		  		</el-row>
		       </div>
		  
		  </el-col>
		  
		  <!--本周考勤异常趋势-->
		  
		  <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
		  	<div style="border: 1px solid darkgray; margin-top: 5px;">
		  	<div style="background-color:beige;" align="center">本周学生宿舍生活</div>
		  	<div>
		  		<Pie1></Pie1>
		  	</div>
		  	</div>
		  </el-col>
		  
		 
		  
		  <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
		  	<div style="border: 1px solid darkgray; margin-top: 5px;">
		  	<div style="background-color:beige;" align="center">本周学生宿舍生活</div>
		  	<div>
		  		<Pie1></Pie1>
		  	</div>
		  	</div>
		  </el-col>
		  
		  
		  
		  <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
		  	<div style="border: 1px solid darkgray; margin-top: 5px;">
		  <div style="background-color:beige;" align="center">本周学生宿舍生活</div>
		  	<div>
		  		<Pie1></Pie1>
		  	</div>
		  	</div>
		  </el-col>
		  </el-row>
		  </div>
		</el-scrollbar>
	</div>	
</template>

<script>
	import Pie from '../../../assets/myCharts/Pie'
	import Pie1 from '../../../assets/myCharts/Pie1'
	import LineEcharts1 from '../../../assets/myCharts/LineEcharts1'
	import Unusua1 from './Unusua1'
	import Unusua2 from './Unusua2'
	export default{
		name:'UnusuaStu',
		methods:{
			load(){
				
			}
		},
		components:{
			Unusua1,
			Unusua2,
			Pie,
			Pie1,
			LineEcharts1
		}	
	}
</script>

<style>
	.UnusuaStu{
	
		width: 84%;
		position:relative;
		margin-left:15.5%;
		margin-top: 5px;
		height:530px;
	}
	.echarts{
		margin-top: 10px;
	}
	body .el-scrollbar__wrap {
    overflow-x: hidden;
}
</style>