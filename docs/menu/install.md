# 安装

## 兼容性

**不支持** `IE11` 及以下版本

## npm安装
```bash
npm i aniao-form-design -S
```

## git
```
https://gitee.com/aniaocool/aniaoFormDesign
```

## 引入
复制`packages`文件夹内容至项目中，只需关注formRealize部分。

在 `main.js` 中写入以下内容：
```js
import Packages from '../packages/';
Vue.use(Packages)
```

## 开始使用
```html
<!-- formRealize 数据源formData 配置源formConfig-->
<form-realize
  ref="realize"
  v-model="formData"
  :config="formConfig"
  @submit="handleSubmit"
></form-realize>
```
至此，rise的开发环境已经搭建完毕，可以在项目中使用了。
