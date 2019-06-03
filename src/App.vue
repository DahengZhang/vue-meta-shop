<template>
    <div class="app">
        <page-tree class="page-tree-el" v-model="pageJson" />
        {{JSON.stringify(pageJson)}}
        <page-view class="page-view-el" />
    </div>
</template>

<script>
import PageTree from './page-tree'
import PageView from './PageView'

export default {
    data() {
        return {
            pageJson: {}
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
    grid-template-columns: 150px auto;
    grid-column-gap: 5px;
}
</style>
