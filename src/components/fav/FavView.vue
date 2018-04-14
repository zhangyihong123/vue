<template>
	<div class="warp">

		<mt-header fixed title="收藏记录"></mt-header>
		<ul class='oul'>
			<li v-for="i in arr2" class="oli">
				<router-link :to="{
					path:'/aiv',
					params:{
						userId:123
					},
					query:{
						names:i.names,
						num:i.num
					
					}
				}">
					{{i.msg}}
				</router-link>

			</li>

		</ul>
	</div>
</template>
<style scoped>
	.warp {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.oul {
		margin-top: 40px;
	}
	
	.oli a{
		color: #000;
		font-size: 1.5rem;
		padding-left: 1rem;
	
	}
</style>
<script>
	export default {
		data() {
			return {
				arr2: []
			}
		},
		mounted() {
			let meStr = localStorage.getItem("f");
			let meBrr = JSON.parse(meStr);
			var text = [];

			meBrr.forEach((val, idx) =>{

				text.push(val);
				//alert( typeof val)
			})
			this.arr2 = text
			//			console.log(text)

			//		var json = JSON.parse(text)
			//		console.log(typeof json)
			//			
			//			var a = text.split('a')
			//			alert(a);
			////			var b = a.split('#')
			////			console.log(b)

		}
	}
</script>