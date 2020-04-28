<template>
    <div>
        <!-- <top :datalist="peoplelist"></top> -->
        <top @titlechange="getdata($event)" ></top>
        <div class="content">
       <h3>{{aa}}
           <font color="blue">{{info}}</font>
       </h3>
       </div>
        <!-- <top :datalist="peoplelist"></top> -->
    </div>
</template>
<script>
import top from './Htop'
export default {
    // props:{
    //     aa:{
    //         type:String,
    //         required:true,
    //     }
    // },
    data(){
        return{
            info:"将进酒",
            aa:'',
            bb:'',
            peoplelist:[
                {name:"李白",age:20,habby:"喝酒"},
                {name:"李黑",age:20,habby:"喝酒"},
                {name:"李赤",age:20,habby:"喝酒"},
                {name:"李橙",age:20,habby:"喝酒"},
                {name:"李黄",age:20,habby:"喝酒"},
                {name:"李绿",age:20,habby:"喝酒"},
                {name:"李蓝",age:20,habby:"喝酒"},
            ]
        }
    },
    
        components:{
            top,
    },
    created(){
        // this.bb=this.$route.query.info;
        console.log(this.bb);
        console.log(this.$route);
        this.bb=this.$route.params.info;

        
    },
    methods:{
        getdata(el){
            this.aa=el;
            console.log(el)
        }
    }
}
</script>
<style >
.content{
    width: 90%;
    height: 500px;
    margin: 50px auto;
    background: yellowgreen;
}
</style>