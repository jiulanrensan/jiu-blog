<template>
  <div class="hot_item_title">
    <div class="hot_item_title-nail">
      <el-avatar size="large" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
    </div>
    <div class="hot_item_title-user">
      <div class="user_name">jiulanrensan</div>
      <div class="user_info">
        <span>菜鸟</span>
        <span>1小时前</span>
      </div>
    </div>
    <div class="hot_item_title-follow">关注</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.hot_item_title{
  @include flexCenter(center);
  padding-top: $--basic-width;
  .hot_item_title-nail{
    width: $--basic-width*7;
    @include flexCenter(center);
  }
  .hot_item_title-user{
    flex: 1;
    .user_name{
      font-weight: bold;
      color: #000;
      font-size: 20px;
    }
    .user_info{
      font-size: 14px;
    }
  }
  .hot_item_title-follow{
    font-size: 14px;
    padding: $--basic-width/4 $--basic-width;
    margin-right: $--basic-width;
    border: 1px solid rgb(134, 240, 134);
    color: rgb(134, 240, 134);
    @include cursor();
  }
}
</style>