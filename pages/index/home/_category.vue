<template>
  <div></div>
</template>

<script>
export default {
  asyncData ({ params }) {
    console.log(params);
    return {
      articleItems: []
    }
  },
  data () {
    return {
      articleItems: [],
      router: {}
    }
  }
}
</script>

<style>

</style>