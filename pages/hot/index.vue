<template>
  <div style="position: relative">
    <TitleRow :categories="categories" />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import {TOP_CATEGORY} from '@/service/defaultConfig'
const title = TOP_CATEGORY // eslint-disable-line
export default {
  layout: 'blog',
  asyncData (context) {
    // 获取推荐topic
    // https://apinew.juejin.im/recommend_api/v1/tag/recommend_topic_list
  },
  data () {
    return {
      categories: TOP_CATEGORY,
      title: []
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/common.scss';
@include container();
</style>