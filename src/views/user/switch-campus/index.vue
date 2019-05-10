<template>
<!-- 切换校区 -->
	<div class="switch_campus">
		<x-header-return></x-header-return>
		<div class="mt4">
			<mt-cell
				v-for="(item,index) in campusList"
				:key = "index"
				:title="item.name"
				@click.native="switchCampus(item.id)"
				is-link>
			</mt-cell>
		</div>
	</div>
</template>

<script>
import XHeaderReturn from '@/components/x-header-return'
import {mapActions} from 'vuex'
import auth from '@/mixin/auth'
export default {
	name: "switch-campus",
	data() {
		return {
			campusList:[]
		};
	},
	mixins:[auth ],
	created(){
		this.$axios.post("/campus/get_campus_list").then((res)=>{
			this.campusList = res.content;
		})
	},
	methods:{
		...mapActions(["setCamId","setOrgId","setIsAdmin"]),
		switchCampus(camid){
			let postData = {
				camid:camid
			}
			this.$axios.post("/campus/switch_campus",postData).then((res)=>{
				this.setCamId(res.content.id);
				this.setOrgId(res.content.orgid);
				this.setIsAdmin(res.content.is_admin);
			})
			
			//刷新权限
			this.getAuth();
			this.$router.push({name:'userCenter'});
		}
	},
	components:{
		XHeaderReturn
	}
};
</script>

<style scoped>

</style>
