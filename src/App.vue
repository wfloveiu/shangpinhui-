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
  },
  mounted() {
    //通知Vuex发请求  

    // 挂载完毕，需要的数据向state中去取
    this.$store.dispatch('home/categoryList');
  }
};
</script>

<style>
</style>
