<template>
  <section class="home">
    <div class="left">
      <div>
        <nav class="left-title">
          <div v-for="(item, index) in homeTitle" :key="item.value">
            <div class="left-title-text">{{item.label}}</div>
            <div class="left-title-divider">
              <el-divider direction="vertical" v-if="index !== homeTitle.length - 1"></el-divider>
            </div>
          </div>
        </nav>
      </div>
      <div class="left-content"></div>
    </div>
    <div class="right"></div>
  </section>
</template>

<script>
import {HOMETITLE} from '@/service/defaultConfig'
export default {
  data () {
    return {
      homeTitle: HOMETITLE
    }
  }
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
    &>div{
      @include border(border-bottom);
    }
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
  .left-title{
    @include relativeCenter(95%);
    font-size: $--basic-font-size*0.875;
    @include flexCenter(left);
    &>div{
      @include flexCenter(left);
    }
    .left-title-text{
      padding: $--basic-width;
      @include cursor($--primary-color);
    }
    .left-title-divider{
      @include flexCenter(center);
      width: $--basic-width;
      height: $--basic-width;
    }
  }
  .left-content{
    @include relativeCenter(95%);
  }
}
</style>