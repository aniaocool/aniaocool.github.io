# 模板

---

## 引用

一个流程，通常由申请页，多个审批页和详情页构成。

<img src="/images/process.drawio.svg" alt="process" title="流程" style="width:100%;max-width:800px;" />

为了方便管理和维护，我们将其中相同的页面部分抽离出来作为一个`模板`单独维护，在使用时`引用`模板路径。

它在 JSON 中以一段配置信息保存，在实际渲染时再拼合成完整页面。

```js
//申请页示例
[
  {
    type: "bm-form-title",
    title: "标题",
  },
  {
    type: "bm-quotation",
    label: "模板引用",
    option: [
      {
        key: "appId",
        value: "123456",
      },
      {
        key: "nodeId",
        value: "template",
      },
    ],
  },
  //...其他组件,
];
```
