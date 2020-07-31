<template>
  <div class="left">
    <ArticleNav />
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
import {ARTICLE_NAV, CATEGORY} from '@/service/defaultConfig'

// 页数
// eslint-disable-next-line
const first = 20
// eslint-disable-next-line
// 分类
const order = ARTICLE_NAV[0].value
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
      article_nav: ARTICLE_NAV,
      recommends: [],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';

</style>