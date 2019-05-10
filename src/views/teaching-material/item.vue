<template>
<!-- 教材列表 -->
	<div class="teaching_material_item">
		<x-header-return></x-header-return>
		<div class="pl1 pr15 pt1 mt4">
			<!-- <scroller :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller" class="mt4"> -->
				<ul>
					<router-link :to="{name:'teachingMaterialDetail',params:{name:item.class_name,key:item.qnkey,title:item.title,a:a}}" v-for="(item,index) in data" :key="index">
						<li class="mt1 d-flex">
							<div class="pic"></div>
							<div class="ml1 detail">
								<p class="fw55">{{item.class_name}}</p>
								<p>
									<icon name="icondeng" class="icon_deng"></icon>
									<span class="ml2 fw55">200次浏览</span>
									<span class="fr">200人正在学</span>
								</p>
							</div>
						</li>
					</router-link>
				</ul>
			<!-- </scroller> -->
		</div>
	</div>
</template>

<script>
import { mapState,mapActions } from "vuex";
import XHeaderReturn from '@/components/x-header-return'
export default {
	name: "teaching-material-item",
	data(){
		return{
			selected:'1', //选择教师用书还是教材课件，默认教师用书
			page:0,
			data:[],
			a:0
		}
	},
	created(){
		this.setHeaderName(this.$route.params.name)
		this.getData();
	},
	methods:{
		...mapActions(["setHeaderName"]),
		infinite (done) {
			console.log("infinite")
			this.page++    //每当向上滑动的时候就让页数加1
			this.getData(this.page, done)
		},
		refresh (done) { //这是向下滑动的时候请求最新的数据
			console.log("refresh")
			this.page = 0
			this.getData(1, done)
		},
		getData(page,done){
			console.log("getadat")
			const postData = {
				class_id:this.$route.params.classId
			}
			if(this.$route.params.type == '1'){
				this.$axios.post('/teaching_material/teacher_book',postData).then((res)=>{
					// this.data.forEach((e)=>{
					// 	e.cover = 'http://admin.com' + e.cover;
					// })

					if (res.content.length < 10) {    //每次请求数据是10条，如果数据不够10条，就是没数据了 让页数=0；
						this.page = 0
						done(true)
						return
					} else {
						if (done) done()
					}
					if (this.page === 1) {
						this.data = res.content   //如果是想下滑动，刷新数据 就让items等于最新数据
					} else {
						this.data = this.data.concat(res.content) //否则就把数据拼接
					}
				})
			}else{
				console.log("01")
				this.$axios.post('/teaching_material/teaching_material',postData).then((res)=>{
					// this.data.forEach((e)=>{
					// 	e.cover = 'http://admin.com' + e.cover;
					// })
					if (res.content.length < 10) {    //每次请求数据是10条，如果数据不够10条，就是没数据了 让页数=0；
						this.page = 0
						done(true)
						return
					} else {
						if (done) done()
					}
					if (this.page === 1) {
						this.data = res.content   //如果是想下滑动，刷新数据 就让items等于最新数据
					} else {
						this.data = this.data.concat(res.content) //否则就把数据拼接
					}
				})
			}
		}
	},
	computed: {
		...mapState({
			headerName: state => state.headerName
		})
	},
	components:{
		XHeaderReturn
	}
};
</script>

<style scoped>
.teaching_material_item{
	border-top:5px solid #efefef;
}
.teaching_material_item li{
	width:100%;
	padding-bottom:12px;
	border-bottom:1px solid #efefef;
}
.pic{
	width:36vw;
	height:10vh;
	background: red;
	border-radius: 6px;
}
.teaching_material_item p:first-of-type{
	line-height:5vh;
	letter-spacing:2px
}
.teaching_material_item p:last-of-type{
	line-height:5vh;
	position: relative;
	margin-left:-3px;
}
.icon_deng{
	position: absolute;
	color:orange;
	font-size:20px;
	top: 50%;
    margin: -10px 0 0 0;
}
.detail{
	flex-grow:1;
}
</style>
