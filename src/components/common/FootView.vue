<template>
	<div class="box">
		<mt-tabbar v-model="selected" fixed class='aaa'>

			<mt-tab-item id="主页">
				<router-link to='/home'>
					<p class="ss">主页</p>
				</router-link>
			</mt-tab-item>

			<mt-tab-item id="收藏">
				<router-link to='/fav'>
					<p class="ss">收藏</p>
				</router-link>
			</mt-tab-item>

			<mt-tab-item id="历史记录">
				<router-link to='/history'>
					<p class="ss">历史记录</p>
				</router-link>
			</mt-tab-item>

			<mt-tab-item id="设置">
				<router-link to='/config'>
					<p class="ss">设置</p>
				</router-link>
			</mt-tab-item>

		</mt-tabbar>

	</div>
</template>
<script>
	import { Tabbar, TabItem } from 'mint-ui';
	export default {
		data() {
			return {
				selected: ''
			}
		}

	}
</script>
<style scoped>
	.box {
		width: 100%;
	/*	height: 4rem;*/
		position: absolute;
		left: 0;
		bottom: 0;
	}
/*	/*
	.mint-tab-item {
		background: #000;
		padding: 1rem 0px;
	}
	
	.mint-tab-item p {
		color: #fff;
	}
	
	.router-link-exact-active p {
		color: #000;
	}
	
	.router-link-exact-active {
		background: red;
	}*/
	.mint-tabbar{
		width: 100%;
		height: 4rem;
		background: #222;
		color: white;
	}
	.mint-tab-item{
		height: 100%;
		padding: 0;
	}
	.mint-tabbar a{
		height: 100%;
		color: white;
		font-size: 14px;
		display: block;
		width: 100%;
		height: 100%;
	}
	.mint-tab-item-label{
		height: 100%;
		line-height:4rem;
	}
	.mint-tab-item-label a{
		height: 100%;
		line-height:4rem;
		
	}
	.mint-tabbar > .mint-tab-item.is-selected{
		background: black;
		box-shadow: 0 2px 8px #fff;
		transition: 0.9s all;
	}
</style>