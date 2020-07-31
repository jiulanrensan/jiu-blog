<template>
  <section>
    <nav class="left-title">
      <div v-for="(item, index) in article_nav" :key="item.value">
        <div class="left-title-text">{{item.label}}</div>
        <div class="left-title-divider">
          <el-divider v-if="index !== article_nav.length - 1" direction="vertical"></el-divider>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
import {ARTICLE_NAV} from '@/service/defaultConfig'
export default {
  data () {
    return {
      article_nav: ARTICLE_NAV,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.left-title{
  @include relativeCenter(95%);
  font-size: $--basic-font-size*0.875;
  @include flexCenter(left);
  &>div{
    @include flexCenter(left);
  }
  .left-title-text{
    padding: $--basic-width;
    @include cursor{
      color: $--primary-color;
    };
  }
  .left-title-divider{
    @include flexCenter(center);
    width: $--basic-width;
    height: $--basic-width;
  }
}
</style>