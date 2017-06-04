<template>
    <div class="fillcontain">
        <head-top></head-top>
        <p class="explain_text">node-elm后台管理系统</p>
        <p class="explain_text">第一次登录的用户自动注册成为普通管理员</p>
        <p class="explain_text">普通管理员可以添加，修改信息</p>
        <p class="explain_text">超级管理员可以删除信息</p>
    </div>
</template>

<script>
	import headTop from '../components/headTop'
    export default {
    	components: {
    		headTop,
    	},
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.explain_text{
		margin-top: 20px;
		text-align: center;
		font-size: 20px;
		color: #333;
	}
</style>
