<template>
    <div class="app">
        <page-tree class="page-tree-el" :ast="ast" @changeAST="astChange"/>
        <div class="page-view-wrapper">
            <page-view class="page-view-el" :ast="ast" />
        </div>
    </div>
</template>

<script>
import PageTree from './page-tree'
import PageView from './PageView'

const ast = require('./main.trident.json')

export default {
    data() {
        return {
            ast: ast
        }
    },
    methods: {
        astChange(v, indexs) {
            let tmp = this.ast
            for (let i=1; i<indexs.length; i++) {
                tmp = tmp.child[indexs[i]]
            }
            if (Array.isArray(tmp.child)) {
                tmp.child.push(v)
            } else {
                let child = [typeof tmp === 'string' ? tmp : tmp.child]
                child.push(v)
                typeof tmp !== 'string' && (tmp.child = child)
            }
        }
    },
    components: {
        PageTree,
        PageView
    }
}
</script>

<style lang="scss" scoped>
.app {
    display: grid;
    grid-template-columns: 250px auto;
    grid-column-gap: 5px;
}
</style>
