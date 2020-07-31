<template>
  <div style="position: relative">
    <div class="title_row">
      <TitleRow :categories="categories" dir="row" />
    </div>
    <div class="container">
      <section class="home">
        <div class="left">
          <TitleRow :categories="categories" dir="column" />
          <div class="topic_content"></div>
        </div>
        <div class="right">广告</div>
      </section>
    </div>
  </div>
</template>

<script>
import {HOT_CATEGORY} from '@/service/defaultConfig'
const title = HOT_CATEGORY // eslint-disable-line
export default {
  layout: 'blog',
  asyncData (context) {
    // 获取推荐topic
    // https://apinew.juejin.im/recommend_api/v1/tag/recommend_topic_list
  },
  data () {
    return {
      categories: HOT_CATEGORY,
      title: []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
@include layoutLR();
@include maxWidth980{
  .title_row{
    display: block;
  }
  .container{
    padding-top: $--basic-width*11;
  }
}
.title_row{
  display: none;
}
.container{
  padding-top: $--basic-width*8;
  .home{
    .left{
      background: $--basic-bg-color !important;
      @include flexCenter(center);
      align-items: flex-start;
      .topic_content{
        height: 100px;
        flex: 1;
        background: $--white-bg-color;
      }
    }
  }
}

</style>