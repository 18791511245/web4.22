import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        num:100,
        age:18,
        name:'xiaox'
    },
    getters:{
       count:state=>{
           return state.num>130?130:state.num;
       }
    },
    mutations:{
        increment(state,pload){
            state.num+=pload.n;
            // setTimeout(()=>{
            //     state.num+=pload.n;
            // },2000)
        },
        mincrement(state,pload){
            state.num-=pload.n;
        }
    },
    actions:{
        Addaction(context){
            console.log(context);
            setTimeout(()=>{
                context.commit('increment',{n:5})
            },1000)
            context.dispatch("textAction")
        },
        textAction(){
            console.log("人生得意须尽欢，莫使金樽空对月")
        }
    }
})
export default store