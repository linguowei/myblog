<template>
	<div>
		<ul>
			<li class="article-wrap" v-for="item in articleList">
				<h3 @click="articleDetails(item.title)">{{item.title}}</h3>
				<p>{{item.passages}}</p>
				<p class="article-date">{{item.year}}年{{item.month}}月{{item.day}}日</p>
				<div class="article-underline"></div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
    data () {
    	return {
    		articleList: [
    			// {title: '这是标题1', passages: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', year: '2016', month: '12', day: '8'
	    		// },
	    		// {title: '这是标题2', passages: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', year: '2016', month: '12', day: '8'
	    		// },
	    		// {title: '这是标题3', passages: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', year: '2016', month: '12', day: '8'
	    		// },
	    		// {title: '这是标题4', passages: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', year: '2016', month: '12', day: '8'
	    		// },
    		]
    	}
    },
    methods: {
    	articleDetails: function(title){
    		this.$router.push('/articleDetails')
    		console.log(title)
    	}
    },
    mounted: function(){
    	this.$http.get('/articleList').then(
    		respone => this.articleList = respone.body,
    		respone => console.log('erroe'+respone)
    	)
    }
}
</script>

<style>
.article-wrap {
	padding: 5px 10px 20px 10px;
	height: 190px;
}
.article-wrap > h3 {
	font-size: 24px;
	height: 40px;
	line-height: 40px;
	cursor: pointer;
}
.article-wrap > .article-underline {
	height: 1px;
	background-color: #f6f6f6;
}
.article-wrap > p {
	max-height: 110px;
	padding: 10px 0 10px 0;
	color: #616161;
}
.article-date {
	color: #a5a5a5;
	font-size: 14px;
}
</style>