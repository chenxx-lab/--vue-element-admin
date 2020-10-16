<template>
	<div style="border: 1px solid darkgray;">
	  <div style="background-color:beige;" align="center">一周宿舍考勤异常报告图</div>
	  <div ref="chartsA" class="a" style="width:auto; height: 285px;"></div>
	</div>
</template>

<script>
	
	import echarts from 'echarts'
	import {nowSize} from '../js/ClientWidth.js'
	export default{
		name:'LineEcharts1',
		mounted(){	            
		   this.lineCharts()
		},
		methods:{
			lineCharts(){
				const myChartA = echarts.init(this.$refs.chartsA);
		        // 指定图表的配置项和数据
		        var option = {
		        	title: {
//                      text: '宿舍考勤报告图',
		                subtext: '纯属虚构',
		                x:'center',
		                
                    },
		            legend: {
		            	borderColor: '#ccc', 
		            	itemWidth: nowSize(10),
                        itemHeight: nowSize(20),
//		            	itemHeight: 10,            // 图例图形高度
//		            	itemWidth: 15, 
		            	y: 'bottom', // 图例图形宽度
		            },
		            tooltip: {},
		            
             //		   设置图标
		            toolbox: {
	                show : true,
	                feature : {
	                    mark : {show: true},
	                    dataView : {show: true, readOnly: false},
	                    magicType : {
	                        show: true,
	                        type: ['pie', 'funnel']
	                    },
	                    restore : {show: true},
	                    saveAsImage : {show: true}
	                }
	            },
		            dataset: {
		                // 提供一份数据。
		                source: [
		                    ['time', '未归', '晚归', '常宅'],
		                    ['周一', 82, 53, 49],
		                    ['周二 ', 43, 85, 93],
		                    ['周三', 83, 73, 55],
		                    ['周四', 86, 65, 82],
		                    ['周五', 72, 53, 39]
		                ]
		            },
		             
		            // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
		            xAxis: {type: 'category'},
//                  xAxis:{
//                  	data:["20:00","21:00","22:00","23:00","24:00"]
//                  }
		            // 声明一个 Y 轴，数值轴。
		            yAxis: {		   	            	
		            	name:'人数'
		            },
		            // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
		            series: [
		                {type: 'line'},
		                {type: 'line'},
		                {type: 'line'},
		                
		            ],
//		            距离容器的距离
		            grid:{
			            left:'2%',
			            right:'%',
			            top:'20%',
			            bottom:25,
			            containLabel:true,
			        },
//		            axisLabel: {
//			            show: true,
//			            textStyle: {
//			                color: '#a1d8f1',
//			                fontSize: nowSize(20)
//			            }
//			        }

		        }
		 
		        // 使用刚指定的配置项和数据显示图表。
		       myChartA.setOption(option,true);
				//清空画布，防止缓存
				myChartA.clear();
				//使用刚指定的配置项和数据显示图表。
				myChartA.setOption(option,true);

				window.addEventListener("resize",function () { 
                    myChartA.resize(); 
               })
				
			}
       }
	}
</script>

<style>
   .a{
   	width: 100%;
   	height: 100%;
   }
</style>