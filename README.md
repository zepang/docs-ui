# Vue3 + Typescript + Snowpack从零开始构建应用

> 始于 2020年11月 7日 星期六 15时23分28秒 CST

前段时间，Vue3发布正式版，最近，准备挤一挤时间，挖个UI库的坑，希望不会摔的太惨...

# 环境准备

- node v12.19.0

- npm v6.14.8

- vscode v1.51.0

# 创建项目

```
mkdir docs-ui

npm init -y

touch README.md

git init

git add .

git commit -m '创建项目目录并添加README'

git remote add origin git@github.com:zepang/docs-ui.git

git push -u origin master
```

# 初始化项目

Vue的作者为Vue3项目专门出了一个Vite工具，提升Vue项目的开始效率和体验。

然而。我这里想体验一下的其他的工具--Snowpack。

- 安装依赖

```
npm install --save-dev snowpack

npm install vue@next

npm install @snowpack/plugin-vue

npm install -D editorconfig

# 把下一行命令添加到package.json的scripts
snowpack dev
```

- 创建`public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue3 + Typescript + Snowpack从零开始构建应用</title>
</head>
<body>
  <div id="app">
    <h1>Vue3 + Typescript + Snowpack从零开始构建应用</h1>
  </div>
</body>
</html>
</html>
```

运行`npm run dev`，用浏览器访问`http://localhost:8080/`，可以看到页面上输出了标题“**Vue3 + Typescript + Snowpack从零开始构建应用**”

接下来，删除`index.html`如下代码，然后使用Vue在页面上渲染该标题

```html
<h1>Vue3 + Typescript + Snowpack从零开始构建应用</h1>
```

为此，还需要添加一些文件：

- 创建snowpack.config.js

```js
module.exports = {
  mount: {
    src: '/_dist_',
    public: '/'
  },
  plugins: ['@snowpack/plugin-vue']
}
```

- 创建`src/index.js`

```js
import { createApp, h } from 'vue'

const app = createApp({
  render: () => [
    h('h1', 'Vue3 + Typescript + Snowpack从零开始构建应用')
  ]
})

app.mount('#app')
```
并在`index.html`中加入如下代码，引入js。

```html
<script type="module" src="/_dist_/index.js"></script>
```

重新运行项目，成功使用Vue在页面上渲染改标题。

- 添加typescript支持

```
npm install typescript
```

- 其它文件

- .editorconfig(需要提前在全局或者项目中安装 editorconfig)

```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
```

- .gitignore

```
# 直接在 https://github.com/github/gitignore 仓库中找到node项目的ignore文件内容复制粘贴
```

