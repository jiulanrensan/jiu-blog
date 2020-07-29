<template>
  <ul class="article_info">
    <li v-if="content.hot">荐</li>
    <li>专栏</li>
    <li>{{content.user.username}}</li>
    <li>{{updatedTime}}</li>
  </ul>
</template>

<script>
import {timeToNow} from '@/service/utils'
export default {
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      updatedTime: timeToNow(this.content.updatedAt)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.article_info{
  padding: $--basic-width $--basic-width 0;
  font-size: 14px;
  @include flexCenter(left);
  li{
    &:after{
      content: '·';
      padding: 0 $--basic-width/2.5;
    }
    &:last-child:after{
      content: '';
    }
  }
}
</style>