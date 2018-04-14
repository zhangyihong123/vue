<template>
	<div>
		<mt-header :title="tit" class='headers'>
			<router-link to="" slot="left">
				<mt-button icon="back" @click='returns'>返回</mt-button>
			</router-link>
			<mt-button  slot="right" @click='sc'>
				<img src="../../assets/img/scc.png" alt="" />
			</mt-button>
		</mt-header>
		<p>{{con}}</p>
	
	</div>
</template>
<script>
	import { Header } from 'mint-ui';
	export default {
		data() {
			return {
				con: '',
				tit: '',
				names: '',
				idx: ''
			
			}
		},
		methods: {
			returns() {

				this.$router.history.go(-1);
			},
			sc() {
				var names = this.names;
				var num = this.idx;
				var text = this.tit;
				var str = {
					names: names,
					num: num,
					msg: text
				}
				
				let arr = JSON.parse(localStorage.getItem("f"));
//				var istrue = false
				var a;
				
				if(arr.length == 0){
					arr.push(str);
					alert('恭喜！收藏成功')
				}else{
					for ( let i = 0; i < arr.length; i++){
						
						a = arr[i];
					}
					console.log(a.msg)
					if (a.msg == str.msg && a.num == str.num && a.names == str.names){
						alert('已经收藏过了')
					}else{
						arr.push(str);
						alert('恭喜！收藏成功')
					}
				}
				
				
				
//				arr.forEach((val, idx) => {
//					
//						if(val){
//							istrue = 123
//						}else{
//							istrue = 321;
//						}

//					console.log(val.msg)
//					if(val.msg==str.msg){
//						return istrue = false;
//					}else{
//						return istrue = true;
//					}

//				})
//				alert(istrue)
				
//				if(istrue == true){
//					alert(1)
//				}else{
//					alert(2)
//				}
//				arr.push(str)
//									alert("恭喜！收藏成功")
				//
				
				//				if() { 
				//					alert("已经收藏过了")
				//				} else {
				//					arr.push(str)
				//					alert("恭喜！收藏成功")
				//				}

				localStorage.setItem('f', JSON.stringify(arr));
			}
		},
		mounted() {
			if(!localStorage.getItem("f")) {
				localStorage.setItem("f", "[]");
			}
			var names = this.$route.query.names;
			var num = this.$route.query.num;
			this.names = names;
			this.idx = num
			this.$http({
					method: 'get',
					url: '/arList'
				})
				.then(res => {
					//console.log(res.data[names]['fenlei'][num].content)
					this.con = res.data[names]['fenlei'][num].content
					this.tit = res.data[names]['fenlei'][num].title
				})
		}

	}
</script>
<style scoped>
	.headers {
		background: #990000;
		font-size: 1.2rem;
	}
	
	p {
		font-size: 1.5rem;
		padding: 0.1rem 1rem;
	}
</style>