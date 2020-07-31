<template>
  <div style="position: relative">
    <TitleRow :categories="categories" />
    <div class="container">
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
import {HOME_CATEGORY} from '@/service/defaultConfig'
export default {
  layout: 'blog',
  data () {
    return {
      categories: HOME_CATEGORY,
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/common.scss';
@include layoutLR();
</style>
