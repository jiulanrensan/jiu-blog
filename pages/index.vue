<template>
  <div class="container">
    <Nuxt />
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
  @include maxWidth($--max-width);
  padding-top: $--basic-width*11;
}
</style>
