import Vue from 'vue'
import _render from './util/render'
import App from './App'

import './reset.scss'
import './grid.trident.scss'
// import './grid.webkit.scss'

const ast = require('./main.trident.json')
// const ast = require('./main.webkit.json')

const files = require.context('./', true, /^\.\/(components|layouts)\/.*\.js$/)
files.keys().forEach(key => {
    const comp = files(key).default
    Vue.component(comp.name, comp)
})

new Vue({
    // render: h => _render(ast, h)
    render: h => h(App)
}).$mount('#root')
