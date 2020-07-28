<template>
  <section class="home">
    <div class="left"></div>
    <div class="right"></div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.home{
  @include flexCenter(center);
  .left,
  .right{
    height: $--basic-width*10;
    background-color: $--white-bg-color;
  }
  .left{
    flex: 1 1 auto;
  }
  .right{
    margin-left: $--basic-width;
    width: $--basic-width*24;
  }
  @include maxWidth980{
    .right{
      display: none;
    }
  }
}
</style>