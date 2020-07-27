<template>
	<header class="jiu_header">
		<div class="jiu_header-img">
			<nuxt-link to="/">
				<img src="@/assets/img/juejin.svg" alt="">
			</nuxt-link>
		</div>
		<nav class="jiu_header-nav">
			<ul v-for="item in navItems" :key="item.value">
				<li>{{item.label}}</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	data () {
		return {
			navItems: [
				{'label': '首页', 'value': 'home'},
				{'label': '沸点', 'value': 'hot'},
				{'label': '话题', 'value': 'topic'},
				{'label': '小册', 'value': 'book'},
				{'label': '活动', 'value': 'activity'}
			]
		}
	}
}
</script>

<style scoped>
.jiu_header{
	display: flex;
}
.jiu_header-nav{
	display: flex;
	justify-content: center;
	flex-wrap: nowrap;
}
</style>
