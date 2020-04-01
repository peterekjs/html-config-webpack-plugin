# html-config-webpack-plugin
Webpack configuration plugin for html compilation

1. Template files specified by `.tpl.html` can be imported into script modules as string
1. Any other html files will be compiled into output directory. Attribute values (src, href) are not processed.

## Installation
```bash
npm i -D @peterek/html-config-webpack-plugin
```

## Application

```js
const HtmlConfigWebpackPlugin = require('@peterek/html-config-webpack-plugin')

module.exports = {
    plugins: [
        new HtmlConfigWebpackPlugin()
    ]
}

```
