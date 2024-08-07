# 函数

---

## 内置函数

### handlerFindItem

- 参数：
  - {String} `prop`
  - {Array} `array`
- 返回值：`目标配置对象`

在传入`array`范围内通过`prop`值寻找并返回第一个匹配的数据项。

```js
let test_prop = this.handlerFindItem("test_prop", this.formConfig.column);
console.log(test_prop);
```

### handlerFindArrayItem

- 参数：
  - {Array} `[prop1,prop2,...]`
  - {Array} `array`
- 返回值：`目标配置对象集合`

在传入`array`范围内通过`[prop1,prop2,...]`数组寻找并返回对应第一个匹配的数据项。

```js
let { test_prop1, test_prop2 } = this.handlerFindArrayItem(
  ["test_prop1", "test_prop2"],
  this.formConfig.column
);
console.log(test_prop1, test_prop2);
```

### handlerFindAllItem

- 参数：
  - {Array} `[]` 空数组作为返回值传入
  - {String} `key`
  - {String} `value`
  - {Array} `array`
- 返回值：`目标key value的目标集合`

在传入`array`范围内通过`key` `value`寻找并返回所有匹配的数据项。

```js
let arr = this.handlerFindAllItem(
  [],
  "type",
  "form-title",
  this.formConfig.column
);
console.log(arr);
//返回所有type为form-title的组件集合
```

### handlerAjax

一个函数对象集合，包含如下内容

- `getDic` 获取字典值函数
- `downloadFn` 通用下载函数
- `headers` 获取当前 token
- `axios` http 库

```js
this.handlerAjax().getDic("bankType");
this.handlerAjax().downloadFn(id);
this.handlerAjax().headers;
this.handlerAjax().axios;
```

## 通用函数

在本地`common.js`文件中可以添加通用函数。

使用时通过`this.commom[函数名]`访问
