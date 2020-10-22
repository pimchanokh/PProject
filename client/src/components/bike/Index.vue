<template>
<div>
<h2>ประเภทจักรยาน</h2>
<p><button v-on:click="logout">ออกจากระบบ</button></p>
<p>id:1</p>
<p>ประเภท: จักรยาน 1 ที่นั่ง</p>
<p>
<button v-on:click="navigateTo('/bike/bikeReturn')">ยืมจักรยาน</button>
</p>
<p>id:2</p>
<p>ประเภท: จักรยาน 2 ที่นั่ง</p>
<p>
<button v-on:click="navigateTo('/bike/bikeReturn')">ยืมจักรยาน</button>
</p>
<hr>
</div>
</template>
<script>
import UsersService from '@/services/UsersService'
export default {
    data () {
return {
users: []
}
},
async created () {
    try{
this.users = (await UsersService.index()).data
    }catch(error){
        consol.log(error)
    }
},
methods: {
data () {
return {
email: '',
password: '',
error: null
}
},
logout () {
this.$store.dispatch('setToken', null)
this.$store.dispatch('setUser', null)
this.$router.push({
name: 'login'
})
},
navigateTo (route) {
this.$router.push(route)
},
async deleteUser (user) {
try {
await UsersService.delete(user)
this.refreshData()
} catch (err) {
console.log(err)
}
},
async refreshData() {
this.users = (await UsersService.index()).data
}
}
}
</script>
<style scoped>
</style>