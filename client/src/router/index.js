import Vue from 'vue'
import Router from 'vue-router'
// Users
import UserIndex from '@/components/User/Index'
import UserCreate from '@/components/User/CreateUser'
import UserEdit from '@/components/User/EditUser'
import UserShow from '@/components/User/ShowUser'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
routes: [
{
  path: '/login',
  name: 'login',
  component: Login
},
{
path: '/users',
name: 'users',
component: UserIndex
},
{
path: '/user/create',
name: 'users-create',
component: UserCreate
},
{
path: '/user/edit/:userId',
name: 'user-edit',
component: UserEdit
},
{
path: '/user/:userId',
name: 'user',
component: UserShow
},
]
})