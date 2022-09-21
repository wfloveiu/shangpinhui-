<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>

</template>

<script>
import Header from './components/MyHeader/MyIndex.vue'
import Footer from './components/MyFooter/MyFooter.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style>
</style>
