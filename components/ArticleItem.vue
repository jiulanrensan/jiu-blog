<template>
  <div class="article">
    <div class="article-container">
      <!-- 左边 -->
      <!-- 顶部信息：分类/作者/时间 -->
      <!-- 标题名称 -->
      <!-- 底部信息：点赞评论 -->
      <!-- 右边 -->
      <!-- 标题图 -->
      <div class="article_left">
        <slot name="article_info"></slot>
        <p>{{content.title}}</p>
        <slot name="article_action"></slot>
      </div>
      <div class="article_right">
        <!-- <img :src="content.screenshot" alt=""> -->
        <el-image
          style="width: 100%; height: 100%"
          :src="content.screenshot"
          fit="cover">
        </el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {}
    }
    
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.article{
  @include cursorBg($--article-bg-color);
  @include border(border-bottom);
  &:hover{
    /deep/.article_action{
      li{
        &:last-child{
          opacity: 1;
        }
      }
    }
  }
}
.article-container{
  @include relativeCenter(95%);
  @include flexCenter(center);
  .article_left{
    flex: auto;
    @include titlePara;
  }
  .article_right{
    width: $--basic-width*6;
    height: $--basic-width*6;
  }
}
</style>