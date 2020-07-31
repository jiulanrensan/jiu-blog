<template>
  <div class="left">
    <section>
      <nav class="left-title">
        <div v-for="(item, index) in homeTitle" :key="item.value">
          <div class="left-title-text">{{item.label}}</div>
          <div class="left-title-divider">
            <el-divider v-if="index !== homeTitle.length - 1" direction="vertical"></el-divider>
          </div>
        </div>
      </nav>
    </section>
    <div class="left-content">
      <ArticleItem v-for="item in recommends" :key="item.id" :content="item">
        <template slot="article_info">
          <ArticleInfo :content="item"></ArticleInfo>
        </template>
        <template slot="article_action">
          <ArticleAction :content="item"></ArticleAction>
        </template>
      </ArticleItem>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import {HOME_TITLE, CATEGORY} from '@/service/defaultConfig'

// 页数
// eslint-disable-next-line
const first = 20
// eslint-disable-next-line
// 分类
const order = HOME_TITLE[0].value
const PARAMS = {
  "operationName": "",
  "query": "",
  "variables": {
    first,
    "after": "",
    order
  },
  "extensions": {
    "query": {
      "id": "21207e9ddb1de777adeaca7a2fb38030"
    }
  }
}
export default {
  // async asyncData (context) {
  //   const {app, error} = context
  //   try {
  //     const res = await app.api('article', PARAMS)
  //     // res?.data?.articleFeed?.items 直接报错：You may need an additional loader to handle the result of these loaders.
  //     const articleItems = res.data.articleFeed.items
  //     const RECOMMENDS = !articleItems ? [] : articleItems.map(el => el.node)
  //     return {
  //       recommends: RECOMMENDS,
  //     }
  //   } catch (err) {
  //     // eslint-disable-next-line
  //     console.log('err', err.response);
  //     error(err.response)
  //   }
  // },
  data () {
    return {
      homeTitle: HOME_TITLE,
      recommends: [],
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