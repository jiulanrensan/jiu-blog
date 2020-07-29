<template>
  <section class="home">
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
        <ArticleItem v-for="(item, index) in recommends" :key="item.id" :content="item">
          <template slot="article_info">
            <ArticleInfo :content="articleInfo[index]"></ArticleInfo>
          </template>
          <template slot="article_action">
            <ArticleAction :content="articleAction[index]"></ArticleAction>
          </template>
        </ArticleItem>
      </div>
    </div>
    <div class="right">{{nums}}</div>
  </section>
</template>

<script>
import {HOMETITLE} from '@/service/defaultConfig'
export default {
  asyncData (context) {
    const OBJ = {
      category: {name: "前端", id: "5562b415e4b00c57d9b94ac8"},
      commentsCount: 5,
      content: "hello~亲爱的观众老爷们大家好~最近一直沉迷于 GraphQL 的应用实践，正好公司黑客马拉松临近，就拉上了两位小伙伴，结合实际的业务场景，把 GraphQL 作为中间层的解决方案提上去~项目完成度还算不错，对 GraphQL 也有了更深入的理解，在此记下整个过程的收获。 …",
      createdAt: "2019-04-20T01:54:20.218Z",
      eventInfo: null,
      hot: true,
      hotIndex: 925.1856,
      id: "5cba7bcc6fb9a068b367911e",
      lastCommentTime: "2019-04-20T13:14:50.097Z",
      likeCount: 29,
      original: true,
      originalUrl: "https://juejin.im/post/5cad64316fb9a068aa4b82c2",
      rankIndex: 26.631819256332,
      screenshot: "https://user-gold-cdn.xitu.io/2019/4/20/16a38723d6bef1d2?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1",
      summaryInfo: null,
      tags: [{id: "555e9a77e4b00c57d9955d64", title: "Node.js"}, {id: "55cc4fb960b28da5fc3b791b", title: "GraphQL"}],
      title: "基于 GraphQL 实践的一点思考",
      type: "post",
      updatedAt: "2019-04-20T07:12:46.215Z",
      user: {id: "584a7760128fe1006c7b17f9", role: "editor", avatarHd: null, username: 'sea_ljf'},
      viewerHasLiked: false
    }
    const RECOMMENDS = Array.from({length: 10}, () => OBJ)
    const NUMS = context.app.api('test')
    return {
      recommends: RECOMMENDS,
      articleInfo: RECOMMENDS.map(el => {
        return {
          originalUrl: el.originalUrl,
          user: el.user,
          hot: el.hot,
          updatedAt: el.updatedAt,
          tags: el.tags
        }
      }),
      articleAction: RECOMMENDS.map(el => {
        return {
          likeCount: el.likeCount,
          commentsCount: el.commentsCount
        }
      }),
      nums: NUMS
    }
  },
  data () {
    return {
      homeTitle: HOMETITLE,
      recommends: [],
      articleInfo: [],
      articleAction: [],
      nums: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
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
  }
  @include maxWidth980{
    .right{
      display: none;
    }
  }
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
}
</style>