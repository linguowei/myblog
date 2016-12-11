<template>
	<div>
		<div @click="goBack">返回</div>
		<h3>{{title}}</h3>
		<p>{{content}}</p>
	</div>
</template>

<script>
export default {
	data () {
		return {
			title: '',
			content: ''
		}
	},
	mounted: function(){
		var id = this.$route.params.id
		this.$http.get('/articleDetails/'+ id)
		.then(
			respone => {
				this.title = respone.body.title,
				this.content = respone.body.content,
				console.log(respone.body)
			},
			respone => console.log('错误'+respone)
		)
		console.log(this.$route.params.id)
	},
	methods: {
		goBack: function(){
			this.$router.go(-1)
		}
	}
}
</script>

<style></style>