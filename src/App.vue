<template>
  <div id="App">
	<router-link to="/">登录</router-link> |
	<router-link to="/basic">基础信息维护</router-link> |
	<router-link to="/drugs">药房</router-link>
	<router-view></router-view>
  </div>
</template>

<script>
import LoginPage from '@/views/Login.vue'
export default {
  name: 'App',
  components: {
    LoginPage
  },
  
}
</script>

<style lang="scss">
#App{
	height: 730px;
}
</style>
