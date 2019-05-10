<template>
<!-- 不带搜索的顶部 -->
	<div class="footer fw55">
		<mt-tabbar v-model="selected" fixed>
			<mt-tab-item id="1" @click.native="$router.push({name:'index'})">
				<icon name="icontubiao-" class="fz24"></icon>
				<p class="mt05 fz12">首页</p>
			</mt-tab-item>
			<mt-tab-item id="2" @click.native="$router.push({name:'workbench'})">
				<icon name="icongongzuotai" class="fz24"></icon>
				<p class="mt05 fz12">工作台</p>
			</mt-tab-item>
			<mt-tab-item id="3" @click.native="$router.push({name:'userCenter'})">
				<icon name="iconwode" class="fz24"></icon>
				<p class="mt05 fz12">我的</p>
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
export default {
	name: "x-footer",
	data() {
		return {
			selected:'1'
		};
	},
	created(){
		if(this.$route.meta && this.$route.meta.tabBar){
			this.selected = this.$route.meta.tabBar;
		}
	},
};
</script>

<style scoped>

</style>
