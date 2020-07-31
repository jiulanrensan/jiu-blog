<template>
  <div style="position: relative">
    <div class="container">
      <TitleRow :categories="categories" />
      <section class="home">
        <div class="left">
          <Nuxt />
        </div>
        <div class="right">广告</div>
      </section>
    </div>
  </div>
</template>

<script>
import {CATEGORY} from '@/service/defaultConfig'
export default {
  layout: 'blog',
  data () {
    return {
      categories: CATEGORY,
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/common.scss';
@include container();
.home{
  @include flexCenter(center);
  align-items: flex-start;
  .left,
  .right{
    // height: $--basic-width*10;
    background-color: $--white-bg-color;
  }
  .left{
    flex: 1 1 auto;
    &>section{
      @include border(border-bottom);
    }
  }
  .right{
    display: block;
    margin-left: $--basic-width;
    width: $--basic-width*24;
    height: 300px;
    text-align: center;
    font-size: 30px;
  }
  @include maxWidth980{
    .right{
      display: none;
    }
  }
}
</style>
