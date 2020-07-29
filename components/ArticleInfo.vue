<template>
  <ul class="article_info">
    <li v-if="content.hot">荐</li>
    <li>专栏</li>
    <li>{{content.user.username}}</li>
    <li>{{content.updatedAt}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.article_info{
  padding: $--basic-width $--basic-width 0;
  font-size: 14px;
  @include flexCenter(left);
}
</style>