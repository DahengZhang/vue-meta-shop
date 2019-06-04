<script>
import _render from './util/render'

export default {
    props: {
        ast: {
            type: Object|String,
            default: () => {}
        }
    },
    render: function(h) {
        return _render(this.ast, h)
    }
}
</script>
