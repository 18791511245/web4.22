<template>
    <div>
        <ul class="navUl">
            <li v-for="(item,index) in datalist" :key="index" @click="getName(item.name)">{{item.name}}</li>
        </ul>
        <hr/>
       <div class="sortbox">
           <div class="sortitem" v-for="(item,index) in sortDatelist" :key="index">
               <img :src="item.pict_url" >
               <h3>{{item.category_name}}</h3>
              <a :href="item.url" target="_blank">详情</a>
              <a :href="item.coupon_share_url" target="_blank">领取优惠券</a>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:"abc",
            datalist:[],
            sortDatelist:[],
        }
    },
    mounted(){
        this.dataAll();
    },
   
    methods:{
        dataAll(){

            let self=this;
            this.$axios.get("/api/w/website/findGoodsTypeList").then(function(res){
            self.datalist=res.data.data;
          
            console.log(self.datalist)
        })
        },
        getName(aa){
            console.log(aa);
            // console.log(aa);
            if(aa != '' || aa != null || aa != undefined){
            // console.log(info)
            this.$axios.get("/api/w/website/findGoodsList",{
                params:{
                    info:aa,
                    pageNo:1,
                    platId:'d0a500ecf8ab41aa9ffe8e18ac6419e1'
                }
            }).then(res=>{
                // console.log(res);
                this.sortDatelist=res.data.data.tbk_dg_material_optional_response.result_list.map_data;
                console.log(self.sortDatelist)
            })
           }
        }

    }
}
</script>
<style>
.navUl{
    width:90%;
    overflow: hidden;
    margin: 50px auto;
}
.navUl li{
    width: 60px;
    height: 40px;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    background-color: sandybrown;
    color: white;
    border-radius: 8px;
    float: left;
    margin: 10px;
}
.sortbox {
        width: 90%;
        overflow: hidden;
        margin: auto;
    }
.sortitem{
    width: 150px;
    height: 210px;
    box-shadow: 0px 0px 5px #000;
    margin: 30px;
    float: left;
}
.sortitem img{
    width: 100%;
    height: 150px;
}
.sortitem h3{
    text-align: center;
    line-height: 30px;
    color: slateblue;
}
</style>