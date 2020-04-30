import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page from '@/components/page'
import Work from '@/components/work'
import Frist from '@/components/frist'
import Datalist from '@/components/datalist'
import Sort from '@/components/sort'
import Count from '@/components/count'
const User={
  template:`<div>
  <h3><>font color="green> 我是父组件{{￥route.params.id}}</font></h3>
  <router-view/>
  </div>`
}
const Profile={
  template:`<div><h3><>font color="green> 我是Profile的子组件</font></h3></div>`
}
const Posts={
  template:`<div><h3><>font color="red>404不存在的</font></h3></div>`
}
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      // redirect:"/page"
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/page",
      name:"page",
      component:Page
    },
    {
      path:"/work",
      name:"work",
      component:Work
    },
    {
      path:"/frist/:id",
      name:"Frist",
      component:Frist
    },
    {
      path:'/user/:id',
      name:"User",
      component:User,
      children:[
        {
          path:'profile',
          name:"Profile",
          component:Profile
        },{
          path:'posts',
          name:"Posts",
          component:Posts
        }
      ]
    },
    {
      path:'/getdata',
      name:'Datalist',
      component:Datalist
    },
    {
      path:'/sort',
      name:'Sort',
      component:Sort
    },
    {
      path:'/count',
      name:'Count',
      component:Count
    }
     ]
})
