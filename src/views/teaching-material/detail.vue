<template>
<!-- 教材详情 -->
	<div class="teaching_material_detail">	
		<x-header-return class="header"></x-header-return>
		<!-- <div class="pdf_header d-flex">
			<span class="pdf_name pl2">{{$route.params.title.length > 6 ? $route.params.title.substr(0,6)+'...' : $route.params.title}}</span>
			<span class="pdf_page">{{pageNum}}/{{numPages}}</span>
			<span class="pdf_download pr2"></span>
			<span class="pdf_download pr2">
				<icon class="fz14" name="iconxiazai1"></icon>
			</span>
		</div> -->
		<!-- <div class="pdf_box">
			<pdf 
				v-for="i in numPages"
				:key="i"
				:src="pdfUrl"
				:page="i"
				@num-pages="pageTotalNum=$event"
				@page-loaded="currentPage = $event"
				>
			</pdf>
		</div> -->
		 <!-- <h1><p @click="a">显示pdf文档</p></h1>
		<div id="container" style="display: none;">
			<div class="lightbox"></div>
			<div id="pop" class="pop">
				<canvas id="the-canvas"></canvas>
			</div>
		</div> -->
		<iframe id="testtest" class="mt4" :src="'./../../../static/web/viewer.html?file='+this.pdfUrl" :style="{width:'100vw',boxSizing:'border-box',height:h+'px'}"></iframe>
	</div>
</template>
<script>
import {mapActions} from 'vuex'
import XHeaderReturn from '@/components/x-header-return'
  
export default {
	name: 'teaching-material-detail',
	data(){
		return {
			pdfUrl:"",
			pageNum:1,
			numPages:1,
			currentPage:1,
			pageTotalNum:1,
			h:0
		}
	},
	created(){
		this.h = window.screen.height - 40 - 55;
		console.log(this.h)
		this.setHeaderName(this.$route.params.name)
		this.pdfUrl = "http://static.solearn.cn/"+this.$route.params.key;


		console.log(this.$route.params.a)
	},
	mounted(){
		
	},
	methods: {
		...mapActions(["setHeaderName"]),
	},
	components:{
		XHeaderReturn,
	}
}
</script>		

<style scoped>
.pdf_header{
	background:rgb(0, 0, 0,1);
	color:#fff;
	line-height:44px;
	border-top:6px solid #efefef;
	position: fixed;
	top:40px;
	z-index:1;
}
.pdf_name{
	width:40vw;
	box-sizing: border-box;
}
.pdf_page{
	width:20vw;
	text-align: center
}
.pdf_download{
	width:40vw;
	text-align: right;
	box-sizing: border-box;
}
.pdf_box{
	margin-bottom:55px;
}
</style>

