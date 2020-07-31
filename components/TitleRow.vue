<template>
  <nav class="jiu_title_row">
    <ul class="jiu_title_row-box" @click="handleTitle">
      <li v-for="item in categories" :key="item.title">
        <nuxt-link :to="item.router">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
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
  z-index: 10;
  top: 60px;
  color: $--font-color;
  background-color: $--white-bg-color;
  font-size: $--basic-font-size*.875;
  .jiu_title_row-box{
    @include flexCenter(left);
    @include maxWidth($--max-width);
    overflow: auto;
    li{
      padding: $--basic-width $--basic-width;
      flex: none;
      @include cursor{
        color: $--primary-color;
      };
      @include link();
      &:first-child{
        padding-left: 0;
      }
    }
  }
}
</style>
