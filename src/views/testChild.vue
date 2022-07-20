<template>
  <div>
    <p>修复1.0bug</p>
    <el-select v-model="inputValue" v-if="isHide">
      <el-option :value="1" :label="1"></el-option>
      <el-option :value="2" :label="2"></el-option>
      <el-option :value="3" :label="3"></el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  name: "testchild",
  props: {
    isHide: {
      type: Boolean,
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  watch: {
    isHide: {
      handler(val) {
        console.log(val);
      },
      immediate: true,
    },
    value(val) {
      this.inputValue = val;
    },
    inputValue(val) {
      this.$emit("input", val);
    },
  },
};
</script>
