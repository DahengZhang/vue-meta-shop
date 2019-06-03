const _render = (ast, h) => {
    const tag = ast.tag || 'div'
    const attr = ast.attr || []
    const child = ast.child || ''
    let childs = child
    if (Array.isArray(child)) {
        childs = []
        for (let i = 0; i < child.length; i++) {
            if (typeof child[i] === 'string') {
                childs.push(child[i])
            } else {
                childs.push(_render(child[i], h))
            }
        }
    }
    let a = {}
    for (let i = 0; i < attr.length; i++) {
        a[attr[i].key] = attr[i].value
    }
    return h(tag, a, childs)
}

export default _render