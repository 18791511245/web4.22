<template>
    <div>
        <ul class="Hnav">
            <!-- <li v-for="(item,index) in datalist" :key="index">{{item.name}}</li> -->
           <li @click="changetitle()">{{aa}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    // props:{
    //     datalist:{
    //         type:Array,
    //         required:true,
    //     }
    // },
    data(){
        return{
            aa:"李黑"
        }
    },
    methods:{
        changetitle(){
            // console.log(58)
            this.$emit("titlechange","君不见，高堂明镜悲白发，朝如青丝暮成雪")
        }
    },
}
</script>
<style >
.Hnav{
    width: 90%;
    overflow: hidden;
    border: 2px solid red;
    box-shadow: 0px 0px 5px #ddd;
    border-radius: 5px;
    margin: auto;
}
.Hnav li{
    width: 150px;
    height: 80px;
    margin: 15px;
    text-align: center;
    float: left;
    line-height: 80px;
    background-color: sandybrown;
    color: white;
    
}
</style>