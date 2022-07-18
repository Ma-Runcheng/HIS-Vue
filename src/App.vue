<template>
  <div id="App">
    <!-- <LoginPage></LoginPage> -->
    <BasicPage></BasicPage>
  </div>
</template>

<script>
import LoginPage from '@/views/Login.vue'
import BasicPage from '@/views/basicInfoMaintenance.vue'

export default {
  name: 'App',
  components: {
    LoginPage,
    BasicPage
  }
}
</script>

<style lang="less">

</style>
