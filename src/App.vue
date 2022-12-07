<template>
  <Header/>
  <!-- <main> -->
    <v-app>
      <v-container fluid>
        <router-view to="/Home"></router-view>
      </v-container>
    </v-app>
    <!-- </main> -->
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  components:{
    Header,
  },
  
}
</script>

<style>
main {
  background-color: #fff;
  color: #3e404d;
  padding: 25px 0 40px;
  padding-top: 25px;
  padding-right: 3%;
  padding-bottom: 40px;
  padding-left: 3%;
}
#app{
  height: -1px
}
.vsc-initialized{
  margin: -10px;
}
body{
  overflow-x: hidden;
}

</style>
