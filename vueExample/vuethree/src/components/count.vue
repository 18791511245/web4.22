<template>
    <div class="countnum">
      <h1>简单计算器</h1>
      <input type="button" value="-" @click="jian(3)">
      <span>{{num}}</span>
      <input type="button" value="+" @click="jia(9)">
      {{count}}
      <p>年龄：{{age}}</p>
      <p>姓名：{{name}}</p>
    </div>
</template>

<script>
import {mapGetters,mapState,mapActions} from "vuex"
    export default {
        // data(){
        //     return{
        //     num:this.$store.state.num,
        //     }
        // },
        computed:{
            //  num(){
            //      return this.$store.state.num
            //  },
            ...mapState({
                num(){
                  return this.$store.state.num
              },
              age(){
                  return this.$store.state.age
              },
              name(){
                  return this.$store.state.name
              },
            }),
            ...mapGetters({
               count:'count'
             
            })
             
        },
        methods:{
            ...mapActions({
                addhandle:'Addaction'
            }),
            jia(num){
                // this.num+=5
                this.$store.commit("increment",{n:num,name:"xiaomu"})
                this.$store.dispatch('Addaction');
            },
            jian(num){
                this.$store.commit("mincrement",{n:num,name:"xiaoxiao"})
                // this.num-=5
            }
        }
    }
</script>

<style >
  .countnum{
      text-align: center;
  }
</style>