<template>
    <div class="line1">
        <div id="line1" class="" style="width: 90%;height:450px;"></div>
    </div>
</template>

<script>
    import echarts from 'echarts';

    export default {
    	mounted(){
        this.myChart = echarts.init(document.getElementById('line1'));
        this.initData();
        },
        methods: {
            initData(){
                this.myChart.setOption({
                    backgroundColor: '#394056',
                    title: {
                      text: '数据走势',
                      textStyle: {
                        fontWeight: 'normal',
                        fontSize: 16,
                        color: '#F1F1F3'
                      },
                      left: '45%'
                    },
                    tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                        lineStyle: {
                          color: '#57617B'
                        }
                      }
                    },
                    legend: {
                      icon: 'rect',
                      itemWidth: 14,
                      itemHeight: 5,
                      itemGap: 13,
                      data: ['访问量', 'API请求', '新增用户'],
                      right: '4%',
                      textStyle: {
                        fontSize: 12,
                        color: '#F1F1F3'
                      }
                    },
                    grid: {
                      left: '3%',
                      right: '4%',
                      bottom: '3%',
                      containLabel: true
                    },
                    xAxis: [{
                      type: 'category',
                      boundaryGap: false,
                      axisLine: {
                        lineStyle: {
                          color: '#57617B'
                        }
                      },
                      data: ['04/26', '04/27', '04/28', '04/29', '04/30', '05/01', '05/02', '05/03', '05/04', '05/05', '05/06', '05/07']
                    }],
                    yAxis: [{
                      type: 'value',
                      name: '单位（次）',
                      axisTick: {
                        show: false
                      },
                      axisLine: {
                        lineStyle: {
                          color: '#57617B'
                        }
                      },
                      axisLabel: {
                        margin: 10,
                        textStyle: {
                          fontSize: 14
                        }
                      },
                      splitLine: {
                        lineStyle: {
                          color: '#57617B'
                        }
                      }
                    }],
                    series: [{
                      name: '访问量',
                      type: 'line',
                      smooth: true,
                      symbol: 'circle',
                      symbolSize: 5,
                      showSymbol: false,
                      lineStyle: {
                        normal: {
                          width: 1
                        }
                      },
                      areaStyle: {
                        normal: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(137, 189, 27, 0.3)'
                          }, {
                            offset: 0.8,
                            color: 'rgba(137, 189, 27, 0)'
                          }], false),
                          shadowColor: 'rgba(0, 0, 0, 0.1)',
                          shadowBlur: 10
                        }
                      },
                      itemStyle: {
                        normal: {
                          color: 'rgb(137,189,27)',
                          borderColor: 'rgba(137,189,2,0.27)',
                          borderWidth: 12

                        }
                      },
                      data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
                    }, {
                      name: 'API请求',
                      type: 'line',
                      smooth: true,
                      symbol: 'circle',
                      symbolSize: 5,
                      showSymbol: false,
                      lineStyle: {
                        normal: {
                          width: 1
                        }
                      },
                      areaStyle: {
                        normal: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 136, 212, 0.3)'
                          }, {
                            offset: 0.8,
                            color: 'rgba(0, 136, 212, 0)'
                          }], false),
                          shadowColor: 'rgba(0, 0, 0, 0.1)',
                          shadowBlur: 10
                        }
                      },
                      itemStyle: {
                        normal: {
                          color: 'rgb(0,136,212)',
                          borderColor: 'rgba(0,136,212,0.2)',
                          borderWidth: 12

                        }
                      },
                      data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
                    }, {
                      name: '新增用户',
                      type: 'line',
                      smooth: true,
                      symbol: 'circle',
                      symbolSize: 5,
                      showSymbol: false,
                      lineStyle: {
                        normal: {
                          width: 1
                        }
                      },
                      areaStyle: {
                        normal: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(219, 50, 51, 0.3)'
                          }, {
                            offset: 0.8,
                            color: 'rgba(219, 50, 51, 0)'
                          }], false),
                          shadowColor: 'rgba(0, 0, 0, 0.1)',
                          shadowBlur: 10
                        }
                      },
                      itemStyle: {
                        normal: {
                          color: 'rgb(219,50,51)',
                          borderColor: 'rgba(219,50,51,0.2)',
                          borderWidth: 12
                        }
                      },
                      data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
                    }]
                });
            }
        },
    }
</script>

<style lang="less">
	@import '../style/mixin';
    .line1{
        display: flex;
        justify-content: center;
    }
</style>
