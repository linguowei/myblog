<template>
	<div>
		<div @click="goBack">返回</div>
		<h1>这是文章详情</h1>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	mounted: function(){
		this.$http.post('/articleDatails',{
			articleTitle: this.$route.params.title
		}).then(
			respone => {
				respone.body,
				console.log(respone.body)
			},
			respone => console.log('错误'+respone)
		)
		console.log(this.$route.params.title)
	},
	methods: {
		goBack: function(){
			this.$router.go(-1)
		}
	}
}
</script>

<style></style>