<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <slot></slot>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item 
        v-for="item in dropDownContent"
        :key="item.value">
        {{item.label}}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  props: {
    // 下拉内容
    dropDownContent: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    /* 去除点击后出现的边框 */
    outline: none;
  }
  /* .el-icon-arrow-down {
    font-size: 12px;
  } */
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>