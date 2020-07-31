<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <span class="el-dropdown-link">
      <slot></slot>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item 
        v-for="item in dropDownContent"
        :key="item.value"
        :command="item.value">
        <nuxt-link :to="{ name: item.value }">{{ item.label }}</nuxt-link>
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
  },
  methods: {
    handleCommand (command) {
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/common.scss';
  .el-dropdown{
    font-size: $--basic-font-size;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: $--primary-color;
    /* 去除点击后出现的边框 */
    outline: none;
  }
  .el-dropdown-menu__item{
    @include link();
  }
  .el-icon-arrow-down {
    font-size: $--basic-font-size;
  }
  .demonstration {
    display: block;
    color: $--font-color;
    font-size: $--basic-font-size;
    margin-bottom: $--basic-width*2;
  }
</style>