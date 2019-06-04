<template>
    <div class="page-tree-item" :class="[{'is-root': isRoot}]">
        <p v-if="typeof ast === 'string'" class="tree-title"><span class="title-text">{{ast}}</span><button>-</button><button @click="addNode">+</button> </p>
        <p v-else class="tree-title"><span class="title-text">{{ast.tag}}-{{typeof ast.child === 'string' ? ast.child : '' }}</span><button>-</button><button @click="addNode">+</button> </p>
        <template v-if="Array.isArray(ast.child)">
            <tree-item v-for="(item, index) in ast.child" :key="item+index" :ast="item" :index="index" @changeAST="astChange" />
        </template>
    </div>
</template>

<script>
import TreeItem from './tree-item'

export default {
    name: 'TreeItem',
    props: {
        ast: {
            type: Object|String,
            default: () => {}
        },
        isRoot: {
            type: Boolean,
            default: false
        },
        index: {
            type: Number,
            default: 0
        }
    },
    methods: {
        astChange(v, indexs=[]) {
            indexs.unshift(this.index)
            this.$emit('changeAST', v, indexs)
        },
        addNode() {
            this.astChange({
                 "tag": "div",
                "attr": [{
                    "key": "class",
                    "value": ["col-1"]
                }],
                "child": new Date().getTime().toString().substring(8)
            })
        }
    },
    components: {
        TreeItem
    }
}
</script>

<style lang="scss">
.page-tree-item {
    &.is-root {
        padding-left: 0;
    }
    padding-left: 10px;
    .tree-title {
        background-color: #F8FADB;
        line-height: 28px;
        padding-left: 10px;
        cursor: pointer;
        position: relative;
        width: 150px;
        .title-text {
            display: inline-block;
            width: 100px;
            white-space: nowrap;
        }
        &::after {
            position: absolute;
            content: " ";
            height: 1px;
            transform: scaleY(.2);
            background-color: #999999;
            right: 10px;
            bottom: 0;
            left: 0;
        }
    }
}
</style>
