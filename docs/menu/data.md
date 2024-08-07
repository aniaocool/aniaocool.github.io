# 数据

---

## 基本的数据结构

表单的数据都会存储在`formData`字段中，它是 rise 中最重要的属性之一。

```js
//数据示例
{
  name: 'test',
  region: 'shenzhen',
  date1: '2024-05-30',
  date2: '2024-05-31',
  delivery: false,
  type: [1,2,3],
  resource: 'test-resource',
  desc: 'test-resource'
}
```

> 在各[事件](/menu/event.md)中可以通过 this 访问 formData 数据。

## 数据监听

在 rise 中使用的是 Vue 的`$watch`方法对 formData 下的字段进行监听。

示例：
<output data-lang="output">
<el-table
    class="elCommonTable"
    :data="emptyTableData"
    style="width: 100%"
    stripe>
<el-table-column label="输入对象" width="150">
<template slot-scope="scope">
<el-tooltip class="item" effect="dark" content="需要监听的prop值，在编辑函数中可以直接访问 [输入对象] 的组件配置" placement="top-start">
<el-button type="text">输入 prop</el-button>
</el-tooltip>
</template>
</el-table-column>
<el-table-column label="输出对象" width="150">
<template slot-scope="scope">
<el-tooltip class="item" effect="dark" content="与监听对象关联的输出prop值，可填写多个，以逗号分隔。在编辑函数中可以直接访问 [输出对象] 的组件配置" placement="top-start">
<el-button type="text">输出 prop</el-button>
</el-tooltip>
</template>
</el-table-column>
<el-table-column label="对象类型" width="150">
<template slot-scope="scope">
<el-tooltip class="item" effect="dark" content="需要监听的对象类型，除数组对象外的不用选择" placement="top-start">
<el-select v-model="scope.row.type">
<el-option label="对象" value="1"></el-option>
<el-option label="数组" value="2"></el-option>
</el-tooltip>
</el-select>
</template>
</el-table-column>
<el-table-column label="深度监听" width="100">
<template slot-scope="scope">
<el-tooltip class="item" effect="dark" content="deep" placement="top-start">
<el-switch v-model="scope.row.deep"></el-switch>
</el-tooltip>
</template>
</el-table-column>
<el-table-column label="立即执行" width="100">
<template slot-scope="scope">
<el-tooltip class="item" effect="dark" content="immediate" placement="top-start">
<el-switch v-model="scope.row.immediate"></el-switch>
</el-tooltip>
</template>
</el-table-column>
<el-table-column label="判断条件" width="100">
<template slot-scope="scope">
<el-tooltip class="item" effect="dark" content="编写js代码，如需增加判断，return true 执行监听" placement="top-start">
<el-button v-model="scope.row.a" type="primary">编辑</el-button>
</el-tooltip>
</template>
</el-table-column>
<el-table-column label="执行函数" width="100">
<template slot-scope="scope">
<el-tooltip class="item" effect="dark" content="编写js代码，补充监听逻辑，" placement="top-start">
<el-button v-model="scope.row.fn" type="primary">编辑</el-button>
</el-tooltip>
</template>
</el-table-column>
<el-table-column label="操作" width="100">
<template slot-scope="scope">
<el-tooltip class="item" effect="dark" content="删除" placement="top-start">
<el-button
          size="mini"
          type="primary"
          icon="el-icon-delete" circle
        ></el-button>
</el-tooltip>
</template>
</el-table-column>
</el-table>
</output>

<!-- 详情请查阅 [Vue 文档](https://v2.cn.vuejs.org/v2/api/#vm-watch) -->

!> 要注意的是：在监听数组或者对象时，可能会遇到 bug。这是因为由于 Vue 2.X 中不允许动态添加根级响应式 property。
