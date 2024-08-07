# 配置与组件

---

## 配置

通过配置可以修改整个表单页面，包括页面、属性、函数、校验等。

### 最简单的配置

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

---

### 表单组件的配置

这是一个输入框组件，组成表单的原子组件，他的重要配置如下：

```js
{
  type: 'el-input',             //此节点为input输入框
  grade: 'lego',                //此节点为原子节点
  label: '输入框',               //标签文字
  labelWidth: 100,              //标签宽度
  span: 24,                     //栅格宽度
  offset: 0,                    //分栏偏移的栏数
  prop: 'test',                 //字段名
  id: 'a171696775363826896',    //组件唯一id，不可修改
  rules: [{required: true}],    //检验
  disabled: false,              //是否禁用
  isHide: false                 //是否隐藏
}
```

这段配置的效果如下所示：

<output data-lang="output">
  <el-tabs type="border-card" @tab-click="resetForm">
    <el-tab-pane label="组件">
      <el-form :model="formData" ref="form" :label-width="formItem.labelWidth+'px'">
        <el-row>
          <el-col :span="formItem.span" :offset="formItem.offset">
            <el-form-item :label="formItem.label" v-if="!formItem.isHide" :rules="formItem.rules" :prop="formItem.prop">
              <el-input v-model="formData[formItem.prop]" :disabled="formItem.disabled"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="配置">
      <el-form :model="formItem" label-width="100px" label-suffix=":">
        <el-row>
          <el-col :span='12'>
            <el-form-item prop="label" label="名称">
              <el-input v-model="formItem.label"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span='12'>
            <el-form-item prop="labelWidth" label="名称宽度">
              <el-input-number v-model="formItem.labelWidth" :min="0" :max="1000"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='12'>
            <el-form-item prop="span" label="栅格宽度">
              <el-input-number v-model="formItem.span" :min="1" :max="24"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span='12'>
            <el-form-item prop="offset" label="偏移数">
              <el-input-number v-model="formItem.offset" :min="0" :max="24"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='12'>
            <el-form-item prop="disabled" label="是否禁用">
              <el-switch v-model="formItem.disabled"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :span='12'>
            <el-form-item prop="isHide" label="是否隐藏">
              <el-switch v-model="formItem.isHide"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='12'>
            <el-form-item prop="required" label="是否必填">
              <el-switch v-model="formItem.required" @change="requiredChange"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</output>

?> 完整的配置请使用表单设计器，此处仅供演示。

---

## 组件

组件是组成表单页面的基本单位。分为原生组件（element）和自定义组件（非 element）两种。

生成时，通过 `component` 组件对他们动态渲染

```html
<component v-bind:is="componentName"></component>
```

以下是两个省去其他字段的配置示例：

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

上面提到，`type`是用于标识当前是哪个组件。这个组件的配置永远都是由`type`字段和**其他属性**（element 组件的属性按照文档对应，非 element 组件的属性则自定义添加）构成的。

> 提示：
>
> - element 组件的 type 与其原本一致，以`el`开头。
> - 自行添加的非 element 组件的 type 应统一前缀方便判断，此处以`bm`为例。

### 组件树

在实现页面时，我们经常会使用容器型组件来包含组件，组合成树形结构。

在配置中，grade 字段代表此组件的树形属性，他有三个值：

- **structure**：代表结构组件，组成表单的结构布局，可包含所有层级的组件。例：`<el-container>`、`<el-header>`等
- **frame**：代表容器组件，只可包含自身及 lego 组件。例：`<el-row>`、`<el-tabel>`等
- **lego**：代表原子组件，表单最小组成单位。

> 所有嵌套结构都以树形保存在 column 字段中。

一个包含头、尾、侧边栏的结构类型大体如下：

```text
Page
  ├── Header        --structure
  │  └─ Title       --lego
  ├── Container     --structure
  │  ├─ Aside       --structure
  │  │  └─ Info     --lego
  │  └─ Main        --structure
  │     └─ Row      --frame
  │      └─ Input   --lego
  │      └─ Input   --lego
  └── Footer        --structure
```
