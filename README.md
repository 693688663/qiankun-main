<!--
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-09-22 14:35:40
 * @Description: 文件介绍
-->
# qiankun-main

## 项目安装
```
yarn install
```

### 开发环境
```
yarn serve
```

### 生产
```
yarn build
```

### 修复文件
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

node_modules 文件夹 npm install 安装的依赖代码库
build 构建相关
src 文件夹 是项目
│ ├── api // 接口
│ ├── assets // 主题 字体等静态资源
│ ├── components // 全局公用组件
│ ├── directive // 全局指令
│ ├── filtres // 全局 过滤器
│ ├── icons // 项目所有 svg icons
│ ├── lang // 国际化 language
│ ├── mixins // 全局混入
│ ├── mock // 项目mock 模拟数据
│ ├── qiankun // 乾坤js
│ ├── router // 路由
│ ├── store // 全局 store管理
│ │ ├── index.js //注入所有vuex相关，并导出
│ │ ├── getters.js //store的计算属性
│ │ ├── muattion.js //更改store中的状态(唯一方法)
│ │ ├── state.js //储存状态
│ │ └── actions.js //维护异步数据
│ ├── utils // axios封装
│ ├── views // 页面组件
│ App.vue
│ main.js
tests文件夹 测试文件目录
static文件夹：存放静态资源(图片、字体等),不会被wabpack构建
.babelrc: babel的配置
.editorconfig: 编辑器的配置
.eslintigonre: 忽略语法检查的目录文件配置
.eslinttrc.js: eslint的配置
.gitignore: git提交忽略的文件目录配置
.package.json: npm包配置文件
vue.config 配置相关
README.md: 项目描述
————————————————
版权声明：本文为CSDN博主「不爱吃糖的程序媛」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_45822171/article/details/124740517