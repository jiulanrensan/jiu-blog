<template>
  <div class="container">
    <div>
      <Logo />
    <h1 class="title">
      jiu-blog
    </h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.container {
  @include fullPage;
  @include flexCenter(center);
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: $--basic-width*10;
  color: #35495e;
  letter-spacing: 1px;
}
</style>