<template>
 <div>
 	
 	 <div ref="charts" style="height: 150px; width: auto;"></div>
 </div>
</template>
<script>
	
// 自行导入echarts
import echarts from 'echarts'
export default {
  name: 'Pie',

  mounted(){
		  var myChartC = echarts.init(this.$refs.charts);
          myChartC.setOption({
          	legend: {
                data:['未归人数']
            },
            tooltip: {},
            series : [
             
                {
                    name: '考勤结果',
                    min: 50,
                    type: 'pie',    // 设置图表类型为饼图
                    radius:'60%', // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。                 
                    label: {
                    normal: {
                       position: 'inner',
                       show : false
                      }
                    },
                    data:[          // 数据数组，name 为数据项名称，value 为数据项值
                        {value:5, name:'未归'},
                        {value:24, name:'已归'}
                    ]
                  
                    
                }
            ],
            	grid:{
                  top:"10px",
                  left:"10px",
                  righr:"10px",
                  bootom:"10px",
                  borderWidth:"10px"
	       }           
        })  
        window.addEventListener("resize",function () { 
            myChartC.resize(); 
     })
  }
     
  }

</script>

<style>

</style>