# 校验
***
## 提交校验

提交时：优先判断当前表单下的组件校验，通过后，会执行表单提交前事件。

表单提交前事件有以下2种方式：

- **同步校验**：在表单提交前事件中，如果`return false`，则会中止表单提交。
- **异步校验**：需要请求接口判断或其他异步情况时，需要`return new Promise`，如下：
```js
return new Promise(resolve=>{
    ...其他代码
    resolve(false) //中止提交
    resolve(true)  //通过提交
})
```

## 组件校验

表单组件如要添加校验，有三种方式：

前两种与element文档相同，可配置required、message、trigger等属性。
1. 正则表达式：编写pattern
2. 自定义函数：编写validator函数，自定义校验`callback`必须被调用。 
3. 校验函数引用：引用本地`Validate.js`文件中的方法，方便管理和修改。

> 注意：
> - 三种校验方法无法同时生效
> - 优先级为：**校验函数引用 > 自定义函数 > 正则表达式**


