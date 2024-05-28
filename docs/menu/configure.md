## 配置

这是一个标题组件，他的最简单的配置看起来是这样的：
```js
{
  "type": "bm-form-title",
  "title": "我是标题"
}
```
这是一段 JSON，它的含义是：

1. `type`是配置中最重要的字段，它告诉当前节点需要渲染的是`标题`组件。
2. `title`字段会作为`标题`组件的属性，`标题`组件根据这个值来渲染页面内容。

这段配置的效果如下所示：

<output data-lang="output">
  <el-tabs type="border-card">
    <el-tab-pane label="组件">
      <h1>{{title}}</h1>
    </el-tab-pane>
    <el-tab-pane label="配置">
      <el-input v-model="title">
        <template slot="prepend">title：</template>
      </el-input>
    </el-tab-pane>
  </el-tabs>
</output>

上面这个配置是可以实时修改预览的，可尝试改一下`title`的值。

## 组件
```js
//非element组件
{
  "type": "bm-form-title",
  ...其他属性
}

//element组件
{
  "type": "el-input",
  ...其他属性
}
```

上面提到，`type`是用于标识当前是哪个组件。这个组件的配置永远都是由`type`字段和**其他属性**（element组件的属性按照文档对应，非element组件的属性则按需添加）构成的。

> 在rise中，element组件的type与其原本一致，以`el`开头。自行添加的非element组件的type统一为`bm`开头。

