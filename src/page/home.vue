<template>
    <div>
        <head-top></head-top>
		<section class="data_section">
			<header class="section_title">当日数据统计</header>
			<el-row :gutter="20">
				<el-col :span="8"><div class="data_list"><span class="data_num">{{apiCount}}</span> API请求量</div></el-col>
				<el-col :span="8"><div class="data_list"><span class="data_num">{{userCount}}</span> 新注册用户</div></el-col>
				<el-col :span="8"><div class="data_list"><span class="data_num">{{orderCount}}</span> 新增订单</div></el-col>
			</el-row>
		</section>
		<tendency :sevenDate='sevenDate' :sevenDay='sevenDay'></tendency>
    </div>
</template>

<script>
	import headTop from '../components/headTop'
	import tendency from '../components/tendency' 
	import dtime from 'time-formater'
	import {apiCount, userCount, orderCount} from '@/api/getData'
    export default {
    	data(){
    		return {
    			apiCount: null,
    			userCount: null,
    			orderCount: null,
    			sevenDay: [],
    			sevenDate: [[],[],[]],
    		}
    	},
    	components: {
    		headTop,
    		tendency,
    	},
    	mounted(){
    		this.initData();
    		for (let i = 6; i > -1; i--) {
    			const date = dtime(new Date().getTime() - 86400000*i).format('YYYY-MM-DD')
    			this.sevenDay.push(date)
    		}
    		this.getSevenData();
    	},
    	methods: {
    		async initData(){
    			const today = dtime().format('YYYY-MM-DD')
    			Promise.all([apiCount(today), userCount(today), orderCount(today)])
    			.then(res => {
    				this.apiCount = res[0].count;
    				this.userCount = res[1].count;
    				this.orderCount = res[2].count;
    			}).catch(err => {
    				console.log(err)
    			})
    		},
    		async getSevenData(){
    			const apiArr = [[],[],[]];
    			this.sevenDay.forEach(item => {
    				apiArr[0].push(apiCount(item))
    				apiArr[1].push(userCount(item))
    				apiArr[2].push(orderCount(item))
    			})
    			const promiseArr = [...apiArr[0], ...apiArr[1], ...apiArr[2]]
    			Promise.all(promiseArr).then(res => {
    				const resArr = [[],[],[]];
					res.forEach((item, index) => {
						if (item.status == 1) {
							//const count = index < 7 ? item.count/100 + 'x100' : item.count;
							resArr[Math.floor(index/7)].push(item.count)
						}
					})
					this.sevenDate = resArr;
					console.log(this.sevenDate)
    			}).catch(err => {
    				console.log(err)
    			})
    		}
    	}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.data_section{
		padding: 20px;
		margin-bottom: 40px;
		.section_title{
			text-align: center;
			font-size: 30px;
			margin-bottom: 10px;
		}
		.data_list{
			text-align: center;
			font-size: 14px;
			color: #666;
			.data_num{
				color: #333;
				font-size: 26px;
			}
		}
	}
</style>
