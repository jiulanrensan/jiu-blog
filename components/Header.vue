<template>
	<header class="jiu_header">
		<div class="jiu_header_box">
			<div class="jiu_header-img">
				<nuxt-link to="/">
					<img src="@/assets/img/juejin.svg" alt="">
				</nuxt-link>
			</div>
			<nav class="jiu_header-nav">
				<ul>
					<li v-for="item in navItems" :key="item.value">{{item.label}}</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
import {headerContent} from '@/service/defaultConfig'
export default {
	data () {
		return {
			navItems: headerContent
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.jiu_header{
	background-color: #fff;

	.jiu_header_box{
		@include flexCenter(left);
		width: 70%;
		height: 60px;
		margin: auto;

		.jiu_header-img{
			@include flexCenter(center);
		}

		.jiu_header-nav{
			ul{
				height: 100%;
				margin-left: 10px;
				@include flexCenter(center);

				li{
					padding: 10px;
					&:hover{
						cursor: pointer;
						color: $--primary-color;
					}
				}
			}
		}
	}
}
</style>
