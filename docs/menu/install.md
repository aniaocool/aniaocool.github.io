# 安装

---

## 兼容性

**不支持** `IE11` 及以下版本

## npm 安装

```bash
npm i aniao-form-design -S
```

## git

```
https://gitee.com/aniaocool/aniaoFormDesign
```

## 使用

### 表单生成器

复制`packages`文件夹内容至项目中，只需关注 formRealize 部分。

在 `main.js` 中写入以下内容：

```js
import Packages from "../packages/";
Vue.use(Packages);
```

在 `.vue` 中使用：

```html
<!-- formRealize 数据源formData 配置源formConfig-->
<form-realize
  v-if="false"
  ref="realize"
  v-model="formData"
  :config="formConfig"
  @submit="handleSubmit"
></form-realize>
```

?> 建议在 `formData` 和 `formConfig` 都获取完毕时再执行 `v-if=true`，以便更好的处理响应式数据和初始化渲染。

<!-- 至此，rise 的开发环境已经搭建完毕，可以在项目中使用了。 -->

### 表单设计器

本地代码 `npm run serve` 或者 访问后台给的地址
