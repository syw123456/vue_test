# vue_test

> it is a project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

|-  dist下面存放发布的js、css 文件 （自动生成）

|- node_modules 下面是npm安装的包文件 （自动创建）

|- src 存放具体的业务代码

|- build 存放webpack的配置代码

|- build

     |- webpack.api.conf.js 用于webpack的api方式的配置文件 server.js用到

     |- webpack.dev.conf.js 用于CLI方式使用webpack 的配置

     |- webpack.prod.conf.js 用于生产环境打包输出的配置

|- .postcssrc.js  post-loader的插件配置文件，由于后面用了postcss.config.js所以重命名了这个

|- .babelrc babel的配置文件，为了解析es6语法

|- .gitignore git的配置，指出要不参与版本控制的文件及文件夹

|- .package.json 包配置文件

|- postcss.config.js  post-loader配置

|- README.md github.com自动创建的项目说明文件

|- server.js  本地开发调式用的web服务器
|- eslint 是用来管理和检测js代码风格的工具，可以和编辑器搭配使用，如vscode的eslint插件
当有不符合配置文件内容的代码出现就会报错或者警告
|- .eslintignore  不做语法的检查
|- .editorconfig的自定义文件。该文件用来定义项目的编码规范，编辑器的行为会与.editorconfig 文件中定义的一致，并且其优先级比编辑器自身的设置要高，这在多人合作开发项目时十分有用而且必要
