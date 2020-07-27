<template>
	<header class="jiu_header">
		<div class="jiu_header_box">
			<div class="jiu_header-img">
				<nuxt-link to="/">
					<img src="@/assets/img/juejin.svg" alt="">
				</nuxt-link>
			</div>
			<nav class="jiu_header-nav">
				<!-- <ul>
					<li v-for="item in navItems" :key="item.value">{{item.label}}</li>
				</ul> -->
				<jiu-drop-down :dropDownContent="navItems">
					<!-- 默认插槽 -->
					<template>
						首页<i class="el-icon-arrow-down el-icon--right"></i>
					</template>
				</jiu-drop-down>
			</nav>
		</div>
	</header>
</template>

<script>
import JiuDropDown from './DropDown'
import {headerContent} from '@/service/defaultConfig'
export default {
	components: {
		JiuDropDown
	},
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
	@include absoluteBox(top);

	.jiu_header_box{
		@include flexCenter(left);
		width: 70%;
		height: 60px;
		margin: auto;

		.jiu_header-img{
			@include flexCenter(center);
		}

		.jiu_header-nav{
			margin-left: 30px;
			// ul{
			// 	height: 100%;
			// 	margin-left: 10px;
			// 	@include flexCenter(center);

			// 	li{
			// 		padding: 10px;
			// 		&:hover{
			// 			cursor: pointer;
			// 			color: $--primary-color;
			// 		}
			// 	}
			// }
		}
	}
}
</style>
