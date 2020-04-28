<template>
    <div>
        杯莫停
        <input type="button" @click="go()" value="点点">
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:"ccc"
        }
    },
    methods:{
        go(){
            // location.href="页面地址"
            // this.$router.push("/page?info="+this.name);
            this.$router.push({name:'page',params:{info:this.name}});
        }
    }
}
</script>