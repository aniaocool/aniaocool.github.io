# 联动
***

表单元素的联动是页面开发中很常用的功能之一，类似于：

- 某个条件下显示或隐藏某个组件
- 某个条件下禁用组件
- 某个条件下请求接口
- 等等...

> 联动配置项一般都是通过`JS`代码在[事件](/menu/event.md)中完成

## 组件配置联动

控制组件的显隐，表单项的禁用状态等，看下面这个例子：

<output data-lang="output">
  <el-form :model="formLinkage" label-width="100px" label-suffix=":" style="width:300px;">
    <el-form-item prop="a" label="组件a">
      <el-input v-model="formLinkage.a" @change="aChange"></el-input>
    </el-form-item>
    <el-form-item prop="b" label="组件b" v-if="!bHide">
      <el-select v-model="formLinkage.b" :disabled="bDisabled">
        <el-option
          v-for="item in optionsb"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
  </el-form>
  a值为1，b会禁用
  <p>a值为2，b会隐藏</p>
</output>

这是在组件a的change事件中，通过以下这段代码实现的：
```js
//1.首先通过内置方法handlerFindItem找到 组件b 的配置
//2.再根据不同条件去修改 组件b 的配置值
let b = this.handlerFindItem('b',this.formConfig.column) 

if(value == 1){
  b.disabled = true
}else if(value == 2){
  b.isHide = true
}else{
  b.disabled = false
  b.isHide = false
}
```
> 注意：
> - 隐藏后，并不会在当前数据中删除掉该字段值。若要去掉该字段值需要另行处理
> - 联动后，组件的状态不会保存在配置JSON中。在有默认值的情况下，需要再次判断处理组件的状态

### vifConditions函数

除了事件外，还可以通过配置vifConditions函数来控制显隐：
```js
//组件b 的设置，当 组件a 的值不为 2 时显示，为 2 时隐藏
//显示状态需要 return 为 true 的判断条件
{
  vifConditions:"return a != 2"
}
```
> 注意：
> - 在配置了vifConditions的情况下，再去设置组件的isHide将不会生效

## 接口联动

接口联动是另外一种很常见的场景，看下面这个例子：

<output data-lang="output" v-loading="loadingd">
  <el-form :model="formLinkage" label-width="100px" label-suffix=":" style="width:600px;">
    <el-form-item prop="c" label="">
      <el-button @click="cClick" type="primary">点击重新请求下拉</el-button>
    </el-form-item>
    <el-form-item prop="d" label="组件d">
      <el-radio-group v-model="formLinkage.d">
        <el-radio
          v-for="item in optionsd"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</output>

这是在按钮的click事件中，通过以下这段代码实现的：
```js
//通过内置方法handlerFindItem找到 组件d 的配置
let d = this.handlerFindItem('d',this.formConfig.column) 

//模拟数据请求 返回data数组 
setTimeout(()=>{
  d.options = [
    {value: 'a',label: 'new 选项1'}, 
    {value: 'b',label: 'new 选项2'}, 
    {value: 'c',label: 'new 选项3'}
  ]
},500)
```