<template>
    <div id="about">
        <h3>关于我</h3>
        <ul class="about-wrap">
            <li>前端码农</li>
            <li>博客：
                <a style="color: #32D3C3;" href="http://lweiwei.com">https://lweiwei.com</a>
            </li>
            <li>github：
                <a style="color: #32D3C3;" href="https://github.com/linguowei">https://github.com/linguowei</a>
            </li>
            <li>segmentfault：
                <a style="color: #32D3C3;" href="https://segmentfault.com/u/linguowei">https://segmentfault.com/u/linguowei</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    mounted () {
        
    },
    methods: {
        
    }
}
</script>

<style scoped>
#about {
    height: 100vh;
    text-align: center;
}
#about > h3{
    font-size: 1.3rem;
    padding: 1rem 2rem;
    border-bottom: 1px dashed #DDD;
}
#about > ul{
    text-align: left;
    line-height: 1.5rem;
    padding: 1rem 1.5rem;
    /*list-style-type: disc;*/
    font-size: 0.7rem;
}
@media screen and (min-width: 768px){ 
    #about {
        height: 100vh;
        text-align: center;
    }
    #about > h3{
        font-size: 1.3rem;
        padding: 1rem 2rem;
        border-bottom: 1px dashed #DDD;
    }
    #about .about-wrap li{
        list-style-type: none;
        text-align: left;
        line-height: 0.6rem;
        padding: 0.6rem 1.5rem;
        font-size: 1rem;
    }
}
</style>