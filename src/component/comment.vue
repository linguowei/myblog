<template>
    <div>
        <div id="container" v-comment:id="ArticlesId"></div>
    </div>
</template>

<script>
import Gitment from '../assets/gitment/gitment.js'
import '../assets/gitment/default.css'
export default {
    props: ['ArticlesId'],
    data () {
        return {
            
        }
    },
    mounted () {
        
    },
    directives: {
        comment: {
            bind: function(el, binding){
                const myTheme = {
                    render(state, instance) {
                        const container = document.createElement('div')
                        container.lang = "en-US"
                        container.className = 'gitment-container gitment-root-container'
                        // container.appendChild(instance.renderHeader(state, instance))
                        container.appendChild(instance.renderEditor(state, instance))
                        container.appendChild(instance.renderComments(state, instance))
                        // container.appendChild(instance.renderFooter(state, instance))
                        return container
                    },
                }
                var gitment = new Gitment({
                    id: binding.value,
                    owner: 'linguowei',
                    repo: 'blog-comment',
                    oauth: {
                        client_id: 'd7c66377574e5e6acfe5',
                        client_secret: '7c52883d0368ee18a496491b9695d506f6890ccf',
                    },
                    theme: myTheme
                })
                gitment.render(el)

            }
        }
    }
}
</script>

<style scoped>
</style>