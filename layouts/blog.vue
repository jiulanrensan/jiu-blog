<template>
  <div style="position: relative">
    <JiuHeader></JiuHeader>
    <JiuTitleRow></JiuTitleRow>
    <Nuxt />
  </div>
</template>

<script>
import JiuHeader from '@/components/Header'
import JiuTitleRow from '@/components/TitleRow'
export default {
	components: {
    JiuHeader,
    JiuTitleRow
	}
}
</script>

<style>
</style>
