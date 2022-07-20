<template>
  <div>
    <h3>v1.0</h3>
    <p>testb分支添加</p>
    <el-form ref="form" :model="formData" :rules="rules" label-width="80px">
      <el-form-item label="注册资本" prop="registCaptial">
        <el-input
          v-if="hide"
          style="width: 220px"
          placeholder="请输入注册资本"
          v-model="formData.registCaptial"
          @blur="inputMoneyFomet($event, 'registCaptial')"
          clearable
          class="input"
        ></el-input>
        <el-input
          v-else
          style="width: 220px"
          placeholder="请输入注册资本"
          v-model="formData.registCaptialThousand"
          @focus="focusMoneyFomet($event, 'registCaptial')"
          class="input thousand"
        ></el-input>
      </el-form-item>
      <el-form-item label="dd.show">
        <el-radio v-model="formData.show" :label="true">显示</el-radio>
        <el-radio v-model="formData.show" :label="false">隐藏</el-radio>
      </el-form-item>
      <el-form-item label="dd.num">
        <test-child :isHide="formData.show" v-model="formData.dd"></test-child>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { getInputValue, formatInputValue } from "./amount.js";
import testChild from "./testChild.vue";

export default {
  components: { testChild },
  name: "CurrencyInput",
  inheritAttrs: false,
  props: {},
  component: {
    testChild,
  },
  data: () => {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value > 10000) {
        callback(new Error(">10000"));
      } else {
        callback();
      }
    };
    return {
      formData: {
        registCaptial: "",
        registCaptialThousand: "",
        dd: "",
        show: false,
      },
      hide: true,
      rules: {
        registCaptial: [
          {
            required: true,
            trigger: "blur",
            validator: validatePass,
          },
        ],
      },
      isHide: false,
    };
  },

  methods: {
    inputMoneyFomet(el, name) {
      this.formData[name + "Thousand"] = getInputValue(el);
      this.hide = false;
    },
    focusMoneyFomet(el, name) {
      this.hide = true;
      console.log(el, name, formatInputValue(el));
      //this.formData[name.replace("Thousand", "")] = formatInputValue(el);
    },
    onSubmit() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          console.log(this.formData);
          console.log("submit!!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
