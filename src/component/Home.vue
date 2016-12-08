<template>
	<div>
		<ul>
			<li class="article-wrap" v-for="item in articleList">
				<h3>{{item.title}}</h3>
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
    			{title: '这是标题1', passages: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', year: '2016', month: '12', day: '8'
	    		},
	    		{title: '这是标题2', passages: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', year: '2016', month: '12', day: '8'
	    		},
	    		{title: '这是标题3', passages: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', year: '2016', month: '12', day: '8'
	    		},
	    		{title: '这是标题4', passages: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', year: '2016', month: '12', day: '8'
	    		},
    		]

    	}
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