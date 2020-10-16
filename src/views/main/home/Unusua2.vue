<template>
	<div style="border: 1px solid darkgray;">
	  <div>
	  	<!--东学院-->
	    <el-row>
		  <el-col :span="24"><div style="background-color:beige;" align="center">考勤不合格top3</div></el-col>
		  <div  class="unusua2">
	  	    <div class="school">东学院</div>
	  	    <el-row>
			  <el-col :span="8"><div>未归<a style="color: orangered;">12</a></div></el-col>
			  <el-col :span="8"><div>晚归<a style="color: purple;">42</a></div></el-col>
			  <el-col :span="8"><div>常宅<a style="color: #42B983;">19</a></div></el-col>
			</el-row>
		  </div>
		</el-row>
	  </div>
	<hr />
	  
		<!--西学院-->
		<div class="unusua2">
		<el-row>
		  <div>
	  	    <div class="school">西学院</div>
	  	    <el-row>
			  <el-col :span="8"><div>未归<a style="color: orangered;">12</a></div></el-col>
			  <el-col :span="8"><div>晚归<a style="color: purple;">42</a></div></el-col>
			  <el-col :span="8"><div>常宅<a style="color: #42B983;">19</a></div></el-col>
			</el-row>
		  </div>
		</el-row>
	</div>		
	<hr />	
		
	    <!--南学院-->
	    <div class="unusua2">
		<el-row>
		  <div>
	  	    <div class="school">南学院</div>
	  	    
	  	    <el-row>
			  <el-col :span="8"><div>未归<a style="color: orangered;">12</a></div></el-col>
			  <el-col :span="8"><div>晚归<a style="color: purple;">42</a></div></el-col>
			  <el-col :span="8"><div>常宅<a style="color: #42B983;">19</a></div></el-col>
			</el-row>
		  </div>
		</el-row>
		</div>
		<hr />
		
		<!--北学院-->
		<div class="unusua2">
		<el-row>
		  <div>
	  	    <div class="school">北学院</div>
	  	   
	  	    <el-row>
			  <el-col :span="8"><div>未归<a style="color: orangered;">12</a></div></el-col>
			  <el-col :span="8"><div>晚归<a style="color: purple;">42</a></div></el-col>
			  <el-col :span="8"><div>常宅<a style="color: #42B983;">19</a></div></el-col>
			</el-row>
		  </div>
		</el-row>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Unusua2'
	}
</script>

<style>
	@import url("../../../assets/css/base.css");
	.unusua2{
		/*border: 1px solid darkgray;	*/
		text-align: center;		
		
	}
	.unusua2:hover{
		cursor: hand;
		background-color:aliceblue;
	}
	.school{
		padding-bottom: 17px;
		text-align: center;		
		color: cornflowerblue;
	}
</style>