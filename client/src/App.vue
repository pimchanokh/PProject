<template>
<div id="app">
<center><p>บริการเว็บยืม-คืนจักรยาน  <button v-on:click="bike">บริการจักรยาน</button>  <button v-on:click="logout">ผู้ดูแลระบบ</button></p></center>
<router-view/>
</div>
</template>
<script>
import UsersService from '@/services/UsersService'
export default {
name: 'App',
methods: {
logout () {
this.$store.dispatch('setToken', null)
this.$store.dispatch('setUser', null)
this.$router.push({
name: 'login'
})
},
bike () {
this.$store.dispatch('setToken', null)
this.$store.dispatch('setUser', null)
this.$router.push({
name: 'login2'
})
}
}
}
</script>
<style>
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: #2c3e50;
}
</style>