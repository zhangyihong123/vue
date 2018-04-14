<template>
	<div class="home">
		<mt-header fixed title="孕育宝典" class='headers'></mt-header>
		<div class="section">
			<ul>
				
				<router-link tag='li' to='/list/yunqian'>
					<img src="../../assets/img/pic1.png" alt="">
				</router-link>

					
				<router-link tag='li' to='/list/yunzhong'>
					<img src="../../assets/img/pic2.png" alt="">
				</router-link>

			<router-link tag='li' to='/list/chanqian'>
					<img src="../../assets/img/pic3.png" alt="" />
				</router-link>
				<router-link tag='li' to='/list/chanhou'>
					<img src="../../assets/img/pic4.png" alt="" />
				</router-link>
				<router-link tag='li' to='/list/chengzhang'>
					<img src="../../assets/img/pic5.png" alt="" />
				</router-link>
				<router-link tag='li' to='/list/fangzhi'>
					<img src="../../assets/img/pic6.png" alt="" />
				</router-link>
			</ul>
		</div>
	</div>
</template>
<script>
	import { Header } from 'mint-ui';
	export default {

	}
</script>
<style scoped>
	.section {
		margin-top: 40px;
	}
	
	.section ul li img {
		margin-left: auto;
		margin-right: auto;
		display: block;
		padding: 5px 0px;
		width: 90%;
	}
	.home{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	.headers{
		background: #990000;
		font-size: 1.5rem;
	}
	.section{
		margin-bottom: 40px;
	}
</style>