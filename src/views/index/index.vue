<template>
<!-- 首页 -->
	<div class="index">
		<div class="header_exit pl2 pr2">
			<span class="title fl fz18 fw6">首页</span>
			<span class="fr fz14" @click="exit">退出</span>
		</div>
		<!-- banner -->
		<div class="banner mt4 p2">
			<div style="height:180px;margin:auto;border-radius:20px;text-align:center">
				<mt-swipe :auto="4000">
					<mt-swipe-item>
						<div class="banner_img" :style="{'backgroundImage':'url('+banner1+')'}">
							<!-- <img :src="banner1" alt=""> -->
						</div>
					</mt-swipe-item>
					<mt-swipe-item>
						<div class="banner_img" :style="{'backgroundImage':'url('+banner2+')'}">
							<!-- <img :src="banner2" alt=""> -->
						</div>
					</mt-swipe-item>
					<mt-swipe-item>
						<div class="banner_img" :style="{'backgroundImage':'url('+banner3+')'}">
							<!-- <img :src="banner3" alt=""> -->
						</div>
					</mt-swipe-item>
				</mt-swipe>
			</div>
		</div>
		<!-- 明星教师 -->
		<div class="star_teacher pl2 pr2 pb2">
			<p class="fz14 title">明星教师</p>
			<ul class="d-flex">
				<li>
					<div class="head_pic" :style="{backgroundImage:'url('+banner1+')'}"></div>
					<p class="teacher_name fw55 fz14">泡泡老师</p>
					<p class="teacher_position">语商一级任教</p>
				</li>
				<li>
					<div class="head_pic" :style="{backgroundImage:'url('+banner2+')'}"></div>
					<p class="teacher_name fw55 fz14">泡泡老师</p>
					<p class="teacher_position">语商一级任教</p>
				</li>
				<li>
					<div class="head_pic" :style="{backgroundImage:'url('+banner3+')'}"></div>
					<p class="teacher_name fw55 fz14">泡泡老师</p>
					<p class="teacher_position">语商一级任教</p>
				</li>
			</ul>
		</div>
		<!-- 热门活动 -->
		<div class="activity pl2 pr2 pb2">
			<p class="fz14 title">热门活动</p>
			<ul>
				<li class="p15 d-flex mb1">
					<div class="activity_pic" :style="{backgroundImage:'url('+banner1+')'}"></div>
					<div class="pl1">
						<p class="fz14 activity_title">首批青少年口才考级终于来啦！</p>
						<p class="activity_process">
							<span>活动报名中</span>
							<span class="fr">剩余<b>25</b>个名额</span>
						</p>
					</div>
				</li>
				<li class="p15 d-flex mb1">
					<div class="activity_pic" :style="{backgroundImage:'url('+banner2+')'}"></div>
					<div class="pl1">
						<p class="fz14 activity_title">首批青少年口才考级终于来啦！</p>
						<p class="activity_process">
							<span>活动报名中</span>
							<span class="fr">剩余<b>25</b>个名额</span>
						</p>
					</div>
				</li>
				<li class="p15 d-flex mb1">
					<div class="activity_pic" :style="{backgroundImage:'url('+banner3+')'}"></div>
					<div class="pl1">
						<p class="fz14 activity_title">首批青少年口才考级终于来啦！</p>
						<p class="activity_process">
							<span>活动报名中</span>
							<span class="fr">剩余<b>25</b>个名额</span>
						</p>
					</div>
				</li>
				<li class="p15 d-flex mb1">
					<div class="activity_pic" :style="{backgroundImage:'url('+banner2+')'}"></div>
					<div class="pl1">
						<p class="fz14 activity_title">首批青少年口才考级终于来啦！</p>
						<p class="activity_process">
							<span>活动报名中</span>
							<span class="fr">剩余<b>25</b>个名额</span>
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import {mapState} from 'vuex'
import banner1 from './../../../static/img/banner1.jpg'
import banner2 from './../../../static/img/banner2.jpg'
import banner3 from './../../../static/img/banner3.jpg'
export default {
	name: 'index',
	data(){
		return {
			banner1:banner1,
			banner2:banner2,
			banner3:banner3
		}
	},
	created(){
		
	},
	computed:{
		
	},
	mounted() {
		 	
	},
	methods: {
        exit(){
			this.clearLocalstroage();
			this.$router.replace({name: 'login'});
		}
  }
}
</script>		

<style scoped>
.header_exit{
	top: 0;
    right: 0;
    left: 0;
    position: fixed;
	z-index: 1;
	background: #fff;
	line-height:40px;
}
.header_exit span:last-child{
	color:#0079fe;
}
.banner_img{
	width:100%;
	height:100%;
	border-radius:20px;
    overflow: hidden;
    background-size: cover;
}
.banner_img img{
	width:100%;
	height:100%;
}
.star_teacher,.activity{
	border-top:6px solid #efefef;
}
.title{
	line-height:40px;
}
.star_teacher li{
	flex-grow: 1;
	padding-top:10px;
	padding-bottom:10px;
	border:1px solid #efefef;
    border-radius: 3px;
    box-shadow:0px 0px 5px 1px #eee;
}
.star_teacher li:nth-child(2){
	margin-left:10px;
	margin-right:10px;
}
.head_pic{
	width:40px;
	height:40px;
	border-radius: 40px;
	margin:auto;
	background-size: cover;
}
.teacher_name{
	color:#0079fe;
	line-height:40px;
	text-align: center
}
.teacher_position{
	color:#ccc;
	text-align: center
}
.activity_pic{
	width:60px;
	height:50px;
	background-size: cover;
}
.activity li{
	border-bottom:1px solid #efefef;
}
.activity li:last-of-type{
	border-bottom:0;
}
.activity li div{
	flex-grow:1
}
.activity_title{
	line-height:24px;
}
.activity_process{
	line-height:28px;
}
.activity_process span:first-child{
	color:#0079fe;
}
b{
	color:#0079fe;
	font-size:14px;
}
</style>

