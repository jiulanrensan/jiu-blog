<template>
  <ul class="article_action">
    <li>
      <img src="@/assets/img/like.svg" alt="">
      <div>{{content.likeCount}}</div>
    </li>
    <li>
      <img src="@/assets/img/comment.svg" alt="">
      <div>{{content.commentsCount}}</div>
    </li>
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
    padding: 0 $--basic-width/2;
    border-left: none;
    line-height: 20px;
    background-color: $--white-bg-color;
    @include flexCenter(center);
    @include cursorBg($--basic-bg-color);
    &:first-child{
      border-left: 2px solid $--basic-bg-color;
    }
    div{
      padding: 0 $--basic-width/5;
    }
  }
}
</style>