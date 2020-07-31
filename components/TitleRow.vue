<template>
  <nav :class="[`title_${dir}`]">
    <ul :class="[`title_${dir}-box`]" @click="handleTitle">
      <!-- :class="[routePath === item.title ? `current_title_${dir}show` : '']" -->
      <li v-for="item in categories" :key="item.title" :class="[routePath === item.title ? `cur_title_${dir}` : '']">
        <nuxt-link :to="item.router">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    dir: {
      type: String,
      default: 'row'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    routePath () {
			const {path} = this.$route
			const filterRouter = this.categories.filter(el => el.router.path === path)
			return filterRouter && filterRouter.length ? filterRouter[0].title : ''
    },
    dirRow () {
      return this.dir === 'row'
    }
  },
  methods: {
    handleTitle (ev) {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
@mixin titleRowCommon{
  @include cursor{
    color: $--primary-color;
  };
  @include link();
}
.title_row{
  @include absoluteBox(top);
  z-index: 10;
  top: 60px;
  color: $--font-color;
  background-color: $--white-bg-color;
  font-size: $--basic-font-size*.875;
  .title_row-box{
    @include flexCenter(left);
    @include maxWidth($--max-width);
    overflow: auto;
    li{
      padding: $--basic-width $--basic-width;
      flex: none;
      @include titleRowCommon();
      &:first-child{
        padding-left: 0;
      }
    }
  }
}
.title_column{
  width: 100px;
  margin-right: $--basic-width;
  background-color: $--white-bg-color;
  text-align: center;
  .title_column-box{
    li{
      margin: $--basic-width $--basic-width;
      border-radius: 4px;
      @include titleRowCommon();
      &.cur_title_column{
        color: #fff;
        background-color: $--primary-color;
      }
      a{
        display: block;
        line-height: 24px;
        height: 26px;
      }
    }
  }
}
</style>
