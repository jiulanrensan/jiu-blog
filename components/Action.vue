<template>
  <ul :class="[`${actionType}_action`]">
    <li>
      <img src="@/assets/img/like.svg" alt="">
      <div>{{content.likeCount}}</div>
    </li>
    <li>
      <img src="@/assets/img/comment.svg" alt="">
      <div>{{content.commentsCount}}</div>
    </li>
    <li>
      <img src="@/assets/img/share.svg" title="分享">
      <div v-if="actionType === 'hot'">分享</div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {
        return {
          likeCount: 23,
          commentsCount: 15
        }
      }
    },
    // 文章: article
    // 沸点: hot
    actionType: {
      type: String,
      default: 'article'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.article_action{
  padding: 0 $--basic-width $--basic-width;
  @include flexCenter(flex-start);
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
    &:last-child{
      opacity: 0;
    }
    div{
      padding: 0 $--basic-width/5;
    }
  }
}
.hot_action{
  @include flexCenter(center);
  li{
    width: 33.33%;
    line-height: 20px;
    padding: $--basic-width/2;
    @include flexCenter(center);
    text-align: center;
    font-size: 14px;
    position: relative;
    @include cursor();
    &:after{
      content: '';
      width: 1px;
      height: 25px;
      position: absolute;
      right: 0;
      border-right: 1px solid rgba(0,0,0,.1);
    }
    &:last-child:after{
      border: none;
    }
  }
}
</style>