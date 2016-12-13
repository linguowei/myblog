<template>
    <div id="app">
        <textarea 
            id="editor" 
            rows="15"
            name="content">
        </textarea>
    </div>
</template>

<script>
import SimpleMDE from 'simplemde'
import './assets/simplemde.min.css'
export default {
    name: 'app',
    data () {
        return {
            content:{
                type:String,
                required: true,
                twoWay: true
            }
        }
    },
    mounted: function(){
        var smde = new SimpleMDE({
            autofocus: true,
            element: document.getElementById('editor')
        });
    },
    directives: {
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
