<template>
<!-- 个人中心 -->
	<div class="user_center">
		<router-link :to="{name:'userInfo'}">
			<div class="user_info d-flex pl2">
				<div class="head_pic">
					<avatar :src="userInfo.avatar"></avatar>
				</div>
				<div class="user_name p05">
					<p class="fw55 fz14">{{userInfo.nickname}}</p>
					<p>{{userInfo.campus_name}}</p>
				</div>
				<div class="more fz14">
					<icon name="icongengduo"></icon>
				</div>
			</div>
		</router-link>
		<ul class="campus_info ml2 mr2 mt2 d-flex">
			<li><p class="fz24"><icon name="iconxuesheng"></icon></p><p>学员：5</p></li>
			<li><p class="fz24"><icon name="iconshuben"></icon></p><p>教材：10</p></li>
			<li><p class="fz24"><icon name="iconzuoyeben-"></icon></p><p>作业：15</p></li>
		</ul>
		<ul class="user_settings ml2 mr2 mt2">
			<router-link :to="{name:'switchCampus'}" v-if="campus_num > 1">
				<li class="d-flex">
					<div class="settings_icon fz20">
						<icon name="iconqiehuanzhanghao"></icon>
					</div>
					<span class="settings_name fz14">切换校区</span>
					<div class="settings_more">
						<icon name="icongengduo"></icon>
					</div>
				</li>
			</router-link>
			<router-link :to="{name:'switchCampus'}">
				<li class="d-flex">
					<div class="settings_icon fz20">
						<icon name="icontubiao-"></icon>
					</div>
					<span class="settings_name fz14">运营秘籍</span>
					<div class="settings_more">
						<icon name="icongengduo"></icon>
					</div>
				</li>
			</router-link>
			<router-link :to="{name:'switchCampus'}">
				<li class="d-flex">
					<div class="settings_icon fz20">
						<icon name="iconwode"></icon>
					</div>
					<span class="settings_name fz14">意见反馈</span>
					<div class="settings_more">
						<icon name="icongengduo"></icon>
					</div>
				</li>
			</router-link>
			<router-link :to="{name:'switchCampus'}">
				<li class="d-flex">
					<div class="settings_icon fz20">
						<icon name="icondeng"></icon>
					</div>
					<span class="settings_name fz14">在线咨询</span>
					<div class="settings_more">
						<icon name="icongengduo"></icon>
					</div>
				</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: "user-center",
	data() {
		return {
			userInfo:{}
		};
	},
	computed:{
		...mapState({
			campus_num: state => state.campusNum
		})
	},
	created(){
		this.$axios.post("/member/get_member_info").then((res)=>{
			this.userInfo = res.content;
		})
	},
};
</script>

<style scoped>
.user_info{
	/* border-top:6px solid #efefef; */
	padding-top:20px;
}
.head_pic{
	width:60px;
	height:60px;
	border-radius:60px;
}
.user_name{
	line-height:25px;
	flex-grow:1;
}
.more{
	margin-right:20px;
	line-height:60px;
}
.user_settings,.campus_info{
	border-radius: 6px;
	border:2px solid #efefef;
}
.campus_info li{
	flex-grow:1;
	padding-top:7px;
	padding-bottom:4px;
}
.campus_info li p{
	margin:auto;
	text-align:center;
	line-height:30px;
}
.user_settings li{
	line-height:45px;
}
.settings_name{
	flex-grow:1
}
.settings_icon,.settings_more{
	width:30px;
	padding-left:10px;
	color:#999
} 
</style>
