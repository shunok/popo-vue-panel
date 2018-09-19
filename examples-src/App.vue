<template>
    <div id="app">
        <panel target="1" title="Panel 1">
            <div slot="center">123</div>
        </panel>
    </div>
</template>
<script>
import * as P from 'popojs';
import Panel from '../src/Panel.vue';


export default {
    name: 'app',
    components: {
        Panel,
    },
    mounted() {
        this.$nextTick().then(() => {
            P.init({
                container: 'app',
                gutter: 20,
                layout: {
                    rows: 3,
                    cols: 8
                },
                panel: {
                    enable: true,
                    custom: [
                        {panels: [1], headHeight: 30}
                    ]
                },
                dev: {
                    enable: true,
                    panel: {
                        show: false,
                    }
                },
                style: {
                    custom:[
                        {panels:[1], panel: {classname:'popo-panel', css: {border: '5px solid red'}}}
                    ]
                }
            });
        })
    },
};
    
</script>
<style>
html, body, #app{
    width:100%;
    height: 100%;
    padding:0;
    margin:0;
}
.popo-panel {
    background-color:#888;
}
</style>

