<template>
  <ul class="article_info">
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
  padding-left: $--basic-width;
  @include flexCenter(left);
}
</style>