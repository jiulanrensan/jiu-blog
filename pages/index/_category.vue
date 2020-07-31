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
import {ARTICLE_NAV, HOME_CATEGORY} from '@/service/defaultConfig'

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
  async asyncData (context) {
    // const {app, error} = context
    // try {
    //   const res = await app.api('article', PARAMS)
    //   // res?.data?.articleFeed?.items 直接报错：You may need an additional loader to handle the result of these loaders.
    //   const articleItems = res.data.articleFeed.items
    //   const RECOMMENDS = !articleItems ? [] : articleItems.map(el => el.node)
    //   return {
    //     recommends: RECOMMENDS,
    //   }
    // } catch (err) {
    //   // eslint-disable-next-line
    //   console.log('err', err.response);
    //   error(err.response)
    // }
    const recommends = [
      {
        category: {name: "前端", id: "5562b415e4b00c57d9b94ac8"},
        commentsCount: 5,
        content: "hello~亲爱的观众老爷们大家好~最近一直沉迷于 GraphQL 的应用实践，正好公司黑客马拉松临近，就拉上了两位小伙伴，结合实际的业务场景，把 GraphQL 作为中间层的解决方案提上去~项目完成度还算不错，对 GraphQL 也有了更深入的理解，在此记下整个过程的收获。 …",
        createdAt: "2019-04-20T01:54:20.218Z",
        eventInfo: null,
        hot: false,
        hotIndex: 925.1856,
        id: "5cba7bcc6fb9a068b367911e",
        lastCommentTime: "2019-04-20T13:14:50.097Z",
        likeCount: 29,
        original: true,
        originalUrl: "https://juejin.im/post/5cad64316fb9a068aa4b82c2",
        rankIndex: 26.631819256332,
        screenshot: "https://user-gold-cdn.xitu.io/2019/4/20/16a38723d6bef1d2?w=1564&h=647&f=png&s=528857",
        summaryInfo: null,
        tags: [{id: "555e9a77e4b00c57d9955d64", title: "Node.js"}, {id: "55cc4fb960b28da5fc3b791b", title: "GraphQL"}],
        title: "基于 GraphQL 实践的一点思考",
        type: "post",
        updatedAt: "2019-04-20T07:12:46.215Z",
        user: {id: "584a7760128fe1006c7b17f9", role: "editor", avatarHd: null, username: 'sea_ljf'},
        viewerHasLiked: false
      }
    ]
    return {
      recommends: recommends
    }
  },
  validate({params, query}){
    const {category} = params
    const matchIdx = HOME_CATEGORY.findIndex(el => el.router.path.slice(1) === category)
    return matchIdx !== -1
  },
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