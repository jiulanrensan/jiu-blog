<template>
  <div style="position: relative">
    <TitleRow />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blog'
}
</script>

<style lang="scss">
@import '@/assets/css/common.scss';
.container{
  max-width: $--max-width;
  margin: auto;
  @include maxWidth980{
    width: 100%;
  }
  padding-top: $--basic-width*11;
}
</style>
