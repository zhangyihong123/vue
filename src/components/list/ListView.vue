<template>
	<div class="warp">

		<mt-header fixed :title="title" class='headers'>
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<ul class="itms">
			<li v-for="(item,index) in arr" class='oli'>
				<router-link :to="{
					path:'/aiv',
					params:{
						userId:123
					},
					query:{
						names:id,
						num:index
					
					}
				}" class=''>
					<img :src="require('../../assets/img/tu/'+item.img)"  />	
					
					<div>{{item.title}}</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	import { Header } from 'mint-ui';
	import '../../mock/mock'
	export default {
		data() {
			return {
				arr: [],
				id: '',
				title:'',
				srcUrl:""
			}
		},
		mounted() {
			
			var idx = this.$route.params.id
			this.id = idx;
			
		
			switch(idx){
				case 'yunqian':
				this.title='孕前准备'
				break;
				case 'yunzhong':
				this.title ='孕中知识'	
				break;
				case 'chanqian':
				this.title = '产前知识'
				break;
				case 'chanhou':
				this.title='分娩产后'
				break;
				case 'chengzhang':
				this.title='幼儿成长指标'
				break;
				case 'fangzhi':
				this.title='幼儿常见疾病防治'
				break;
				
			}

			
			this.$http({
					method: 'get',
					url: '/arList'
				})
				.then(res => {
				
					this.arr = res.data[idx]['fenlei']
				})
		}
	}
</script>
<style scoped>
	.headers{
		background: #990000;	
	}
	.itms li {
		
	
		background: #FFC0CB;
		padding: 2rem 0rem;
		width: 100%;
		border-bottom: 1px dashed #000000;
		
	}
	.itms{
		margin-top: 40px;
		margin-bottom: 40px;
	}
	.itms li a{
		width: 100%;
		display: flex;
		
		align-items: center;
		height: 5rem;
		
		
	}
	.itms li img{
		width: 6rem;
		padding-left: 2rem;
	}
	.itms li div{

		display: block;
		width: 15rem;
		text-align: left;
		color: #000;
		font-size: 1.2rem;
		margin-left: 2rem;
		overflow: hidden;
	
	}
	
	.warp {
		width: 100%;
	
		position: absolute;
		top: 0;
		left: 0;
	}
</style>