## nuxt学习记录

### 1. 新建布局文件
layouts文件用来保存布局文件，所以新建一个blog.vue，但eslint报错'error  Delete `␍`'

[解决方法](https://juejin.im/post/5e4f8a98e51d4527143e45e6)

通过添加`"endOfLine": "auto" `解决

### 2. 添加头部组件
components目录下添加header组件，eslint报错'replace `↹↹↹` with `······`eslint(prettier/prettier)'

[解决方案](http://gwiki.cn/2019/04/%E5%9C%A8tab%E5%A4%84%E7%90%86%E8%BF%99%E4%BB%B6%E4%BA%8B%E4%B8%8A,-%E5%8F%AA%E8%83%BD%E8%AF%B4vscode%E7%9C%9F%E5%82%BB)

### 3. 引入sass
[引入sass](https://zh.nuxtjs.org/api/configuration-css/)

`npm install --save-dev node-sass sass-loader`

在assets目录下新建css文件夹存放公用样式文件