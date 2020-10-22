import Vue from 'vue'
import Router from 'vue-router'
// Users
import UserIndex from '@/components/User/Index'
import UserCreate from '@/components/User/CreateUser'
import bikebikeReturn from '@/components/bike/bikeReturn'
import UserEdit from '@/components/User/EditUser'
import UserShow from '@/components/User/ShowUser'
import Login from '@/components/Login'
import Login2 from '@/components/Login2'
import BikeIndex from '@/components/bike/Index'


Vue.use(Router)

export default new Router({
routes: [
{
  path: '/login',
  name: 'login',
  component: Login
},
{
  path: '/login2',
  name: 'login2',
  component: Login2
},
{
path: '/users',
name: 'users',
component: UserIndex
},
{
path: '/bike',
name: 'bike',
component: BikeIndex
},
{
path: '/user/create',
name: 'users-create',
component: UserCreate
},
{
  path: '/bike/bikeReturn',
  name: 'bike-bikeReturn',
  component: bikebikeReturn
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