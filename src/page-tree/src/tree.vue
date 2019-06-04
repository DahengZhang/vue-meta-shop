<template>
    <div class="page-tree">
        <h3 class="page-tree-title">结构树</h3>
        <tree-item :ast="ast" @changeAST="astChange" :isRoot="true" />
    </div>
</template>

<script>
import TreeItem from './tree-item'

export default {
    props: {
        ast: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {}
    },
    methods: {
        astChange(v, indexs) {
            this.$emit('changeAST', v, indexs)
        }
    },
    components: {
        TreeItem
    }
}
</script>

<style lang="scss">
.page-tree {
    background-color: aliceblue;
    overflow-x: scroll;
}
</style>
