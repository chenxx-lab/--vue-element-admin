<template>
	<el-col :xs="5" :sm="3" :md="4" :lg="3" :xl="4">
	    <div class="bg-Danger">	 
		 <span class="el-dropdown-link">
				   <el-button label="rtl" @click="drawer = true" round size="small" style="margin-top: 20px; ">
				    	上传文件	
				    	<i class="el-icon-document"></i>
				   </el-button>				   
				   </span>				 				 
		   <el-drawer :visible.sync="drawer" :direction="direction">
			  
			  <el-upload
			  action="https://jsonplaceholder.typicode.com/posts/"
			  list-type="picture-card"
			  :on-preview="handlePictureCardPreview"
			  :on-remove="handleRemove">
			  <i class="el-icon-plus"></i>
			</el-upload>
			<el-dialog :visible.sync="dialogVisible">
			  <img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>
			</el-drawer>
		 </div>
	  </el-col>	  	 
</template>

<script>
	export default{
		name:'File',
		data(){
			return{
				drawer: false,
                direction: 'rtl',
                dialogImageUrl: '',
                dialogVisible: false,
				fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
				{name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
			}
		},
		methods: {
		      handleRemove(file, fileList) {
		        console.log(file, fileList);
		      },
		      handlePreview(file) {
		        console.log(file);
		      },
		      handleExceed(files, fileList) {
		        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
		      },
		      beforeRemove(file, fileList) {
		        return this.$confirm(`确定移除 ${ file.name }？`);
		      },
		      handleRemove(file, fileList) {
		        console.log(file, fileList);
		      },
		      handlePictureCardPreview(file) {
		        this.dialogImageUrl = file.url;
		        this.dialogVisible = true;
		      }
      }
	}
</script>

<style>
</style>