<template>
	<div>
		<div ref="pie1" class="piechart"></div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	export default{
		name:'Pie1',
		mounted(){
			var myChartB = echarts.init(this.$refs.pie1);
//			var app = {};
//          option = null;
			// 指定图表的配置项和数据
           var option = {
            title : {
//              text: '饼图程序调用高亮示例',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['打游戏','玩手机','学习','睡觉','吃东西']
            },
            series : [
                {
                    name: '学生宿舍日常',
                    type: 'pie',
                    radius : '55%',                  
                    center: ['50%', '60%'],
                    data:[
                        {value:35, name:'打游戏'},
                        {value:30, name:'玩手机'},
                        {value:24, name:'学习'},
                        {value:15, name:'睡觉'},
                        {value:18, name:'吃东西'}
                    ],
                    label: {
                    normal: {
                       position: 'inner',
                       show : false
                      }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
          
           window.addEventListener("resize",function () { 
            myChartB.resize(); 
           })
           
        app.currentIndex = -1;

        setInterval(function () {
            var dataLen = option.series[0].data.length;
            // 取消之前高亮的图形
            myChartB.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: app.currentIndex
            });
            app.currentIndex = (app.currentIndex + 1) % dataLen;
            // 高亮当前图形
            myChartB.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: app.currentIndex
            });
            // 显示 tooltip
            myChartB.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: app.currentIndex
            });
        }, 1000);
        if (option && typeof option === "object") {
            myChartB.setOption(option,true);
        }
		}
	}
</script>

<style>
	.piechart{
		width: indow.innerWidth+'px';;
		height: 370px;
	}
</style>