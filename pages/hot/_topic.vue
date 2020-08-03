<template>
  <div style="position: relative">
    <div class="row_show">
      <TitleRow :categories="categories" dir="row" />
    </div>
    <div class="container">
      <section class="home">
        <div class="left">
          <div class="column_show">
            <TitleRow :categories="categories" dir="column" />
          </div>
          <div class="topic_content">
            <HotItemTitle></HotItemTitle>
            <div class="topic_content-text">
              1234
            </div>
            <el-divider></el-divider>
            <Action actionType="hot"></Action>
          </div>
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
    // const recommend = []
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

.row_show{
  display: none;
}
.column_show{
  display: flex;
  align-items: flex-start;
}
.container{
  padding-top: $--basic-width*8;
  .home{
    .left{
      background: $--basic-bg-color !important;
      @include flexCenter(center);
      align-items: flex-start;
      .topic_content{
        flex: 1;
        background: $--white-bg-color;
        align-items: flex-start;
        .topic_content-text{
          margin: $--basic-width;
          margin-left: $--basic-width*7;
        }
      }
    }
  }
}

@include maxWidth980{
  .row_show{
    display: block;
  }
  .column_show{
    display: none;
  }
  .container{
    padding-top: $--basic-width*11;
  }
}

</style>