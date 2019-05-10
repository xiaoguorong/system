<template>
<!-- 头像 -->
	<div class="avatar" :style="{'width':width,'height':height,'lineHeight':height}">
		<img v-if="src" :src="src" alt="">
		<icon v-else name="iconmorentouxiang" class="fz30 icon_head"></icon>
	</div>
</template>

<script>
export default {
	name: "avatar",
	props:{
		src:{
			default:''
		},
		width:{
			default:50+'px'
		},
		height:{
			default:50+'px'
		}
	}
};
</script>

<style scoped>
.avatar{
	border-radius:50%;
	text-align: center;
	overflow: hidden;
}
img{
	display: block
}
.icon_head{
	color:#ccc
}
</style>
