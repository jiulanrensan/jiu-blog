<template>
  <ul class="article_action">
    <li>{{content.likeCount}}</li>
    <li>{{content.commentsCount}}</li>
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
.article_action{
  padding: 0 $--basic-width $--basic-width;
  @include flexCenter(left);
  li{
    font-size: 14px;
    font-weight: bold;
    border: 2px solid $--basic-bg-color;
    padding: $--basic-width/5 $--basic-width/2;
    border-left: none;
    &:first-child{
      border-left: 2px solid $--basic-bg-color;
    }
  }
}
</style>