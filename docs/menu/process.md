# 快速上手

## 面板

`form-design`的功能由三部分组成，分别为：组件面板、画布、配置面板。

<img src="/images/panel.png" alt="form-design" title="面板" style="width:100%;max-width:1968px;" />

## 页面搭建过程

1. 在画布中，选择一个【[表单布局](#表单布局)】。

2. 从左侧组件面板中【[拖拽](#拖拽)】组件到画布中。

3. 选中该组件，使用右侧的配置面板对该组件的内容进行【[配置](#配置)】。

4. 重复以上步骤，通过选择需要的组件【[拼接](#拼接)】完成一个完整的表单页面。

5. 在搭建的过程中使用【[预览](#预览)】功能对当前表单页进行实时预览和调试，调试完毕后发布并上传页面。

### 表单布局

##### 容器布局：

与element-ui一致，可参考element文档。

- `<el-container>`：外层容器。
- `<el-header>`：顶栏容器。
- `<el-aside>`：侧边栏容器。
- `<el-main>`：主要区域容器。
- `<el-footer>`：底栏容器。

> 以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<el-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<el-container>`。

##### 组件布局：

基础的 24 分栏的栅格布局。与element-ui一致，可参考element文档。

- `<el-row>`：行容器。
- `<el-col>`：列容器。

### 拖拽

根据业务需求，表单页面的搭建是对 UI 上已经有一定的规范性标准。不需要比较复杂的自由拖动布局场景。这里选择`vue-draggable`来完成拖拽，被拖拽的组件会自动被放置在距离鼠标最近的容器内。

### 配置

在配置面板部分，功能划分为三块。
- 字段属性：管理基本属性（宽度、属性值、标题、栅格等），自定义属性，事件等。
- 表单事件：管理生命周期函数，监听函数等。
- 表单属性：管理表单基本属性（标签、规则、尺寸、按钮等）

> 配置面板中的基本功能字段可参考element文档中的对应的Attributes属性。

### 拼接

通过拖拽组件加入页面时，核心是生成了一份树形结构 JSON ，这份 JSON 描述了页面中所有使用的组件以及这些组件之间的容器关系。

一个简单的结构如下：
```js
{
  column: [
    {
      name: 'main',
      type: 'el-main',
      grade: 'structure',
      column: [
        {
          type: 'el-input',
          label: '字段a',
          span: 24,
          prop: 'a',
          id: 'a171592894883089564'
        },
        {
          type: 'el-input',
          label: '字段b',
          span: 24,
          prop: 'b',
          id: 'a171592895030346417'
        }
      ]
    }
  ],
  labelPosition: 'left',
  labelSuffix: '：',
  labelWidth: 120,
  gutter: 0,
  menuBtn: true,
  submitBtn: true,
  submitText: '提交',
  emptyBtn: true,
  emptyText: '清空',
  saveBtn: true,
  saveText: '保存',
  menuPosition: 'center',
  direction: 'left',
  size: 'medium',
  mapping: [],
  beforeSubmitFn: [
    {
      text: 'console.log('beforeSubmit')'
    }
  ],
  initFn: [
    {
      text: 'console.log('init')'
    }
  ],
  modelName: 'formData',
  refName: 'formRealize',
  rulesName: 'rules'
}
```

### 预览

当我们预览或者生成页面时。其核心是遍历拖拽生成的JSON数据，最终还原一个完整的`el-form`表单页面。