<template>
	<header class="jiu_header">
		<nav class="jiu_header-nav">
			<div class="jiu_header-img">
				<nuxt-link to="/">
					<img src="@/assets/img/juejin.svg" alt="">
				</nuxt-link>
			</div>
			<div class="jiu_header-gt980">
				<ul>
					<li v-for="item in navItems" :key="item.value">{{item.label}}</li>
				</ul>
			</div>
			<div class="jiu_header-lt980">
				<jiu-drop-down :drop-down-content="navItems">
					<!-- 默认插槽 -->
					<template>
						首页<i class="el-icon-arrow-down el-icon--right"></i>
					</template>
				</jiu-drop-down>
			</div>
			<div class="jiu_header-search">
				<el-input
					v-model="searchContent"
					style="width: 150px"
					placeholder="搜索掘金"
					size="small"
					suffix-icon="el-icon-search"
					>
				</el-input>
			</div>
			<div class="jiu_header-write">
				<i class="el-icon-tickets"></i>写文章
			</div>
			<!-- <div class="jiu_header-message">
				<i class="el-icon-message-solid"></i>
			</div> -->
			<div class="jiu_header-divider">
				<el-divider direction="vertical"></el-divider>
			</div>
			<div class="jiu_header-user">
				<span class="jiu_header-sign_in">登录</span>
				<span>·</span>
				<span class="jiu_header-sign_out">注册</span>
			</div>
		</nav>
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
			navItems: headerContent,
			searchContent: ''
		}
	},
	methods: {
		handleClick () {}
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';

.jiu_header{
	background-color: #fff;
	@include absoluteBox(top);

	.jiu_header-nav{
		@include flexCenter(left);
		max-width: $--max-width;
		height: 60px;
		margin: auto;
		@include maxWidth980{
			width: 96%;
		}

		.jiu_header-img{
			@include flexCenter(center);
		}

			
		.jiu_header-lt980{
			display: none;
			margin-left: $--basic-width*3;
		}

		.jiu_header-gt980{
			margin-left: $--basic-width*3;
			ul{
				height: 100%;
				@include flexCenter(center);

				li{
					padding: $--basic-width;
					&:hover{
						cursor: pointer;
						color: $--primary-color;
					}
				}
			}
		}

		.jiu_header-write{
			color: $--primary-color;
		}

		.jiu_header-divider{
			padding: 0 $--basic-width;
		}

		.jiu_header-search{
			margin-right: $--basic-width*3;
			flex: 1 1 auto;
			display: flex;
			justify-content: flex-end;
		}

		.jiu_header-user{
			color: $--primary-color;
		}

		@include maxWidth980 {
			.jiu_header-lt980{
				display: block;
			}
			.jiu_header-gt980{
				display: none;
			}
		}
	}
}

</style>
