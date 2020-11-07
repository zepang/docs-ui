import { createApp, h } from 'vue'

const app = createApp({
  render: () => [
    h('h1', 'Vue3 + Typescript + Snowpack从零开始构建应用')
  ]
})

app.mount('#app')
