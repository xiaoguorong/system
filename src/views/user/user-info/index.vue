<template>
<!-- 个人信息 -->
	<div class="user_info">
		<x-header-return></x-header-return>
		<div class="mt4">
			<mt-cell title="头像" style="margin-top:-1px;">
				<avatar :src="userInfo.avatar"></avatar>
			</mt-cell>
			<mt-cell title="用户名">
				<span>{{userInfo.realname ? userInfo.realname : userInfo.nickname}}</span>
			</mt-cell>
			<mt-cell title="手机号码">
				<span>{{userInfo.mobile}}</span>
			</mt-cell>
			<mt-cell title="密码" is-link :to="{name:'changePassword'}">
				<span>******</span>
			</mt-cell>
			<mt-cell title="当前校区" is-link :to="{name:'switchCampus'}">
				<span>{{userInfo.campus_name}}</span>
			</mt-cell>
			<mt-cell title="校区角色">
				<span style="margin-right:24px;">{{userInfo.role_name}}</span>
			</mt-cell>
		</div>
	</div>
</template>

<script>
import XHeaderReturn from '@/components/x-header-return'

export default {
	name: "user-info",
	data() {
		return {
			userInfo:{}
		};
	},
	created(){
		this.$axios.post("/member/get_member_info").then((res)=>{
			this.userInfo = res.content;
		})
	},
	components:{
		XHeaderReturn
	}
};
</script>

<style scoped>

</style>
