<template>
    <div class="page-tree">
        This is Tree
        <textarea v-model="json" ></textarea>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        json: {
            get() {
                return this.value
            },
            set(v) {
                this.$emit('input', JSON.parse(v))
            }
        }
    }
}
</script>
