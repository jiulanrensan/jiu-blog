<template>
  <nav class="jiu_title_row">
    <ul class="jiu_title_row-box" @click="handleTitle">
      <li v-for="item in categories" :key="item.title">{{item.title}}</li>
    </ul>
  </nav>
</template>

<script>
import {CATEGORY} from '@/service/defaultConfig'
export default {
  data () {
    return {
      categories: CATEGORY
    }
  },
  methods: {
    handleTitle (ev) {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.jiu_title_row{
  @include absoluteBox(top);
  top: 60px;
  color: $--font-color;
  background-color: $--white-bg-color;
  font-size: $--basic-font-size*.875;
  .jiu_title_row-box{
    @include flexCenter(left);
    @include maxWidth($--max-width);
    li{
      padding: $--basic-width $--basic-width;
      @include cursor($--primary-color);
      &:first-child{
        padding-left: 0;
      }
    }
  }
}
</style>
