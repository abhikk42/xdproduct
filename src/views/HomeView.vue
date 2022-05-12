<template>
  <div class="home">
     <Header ref="header" />
    <MainIndex ref="mainIndex" />
    <Footer />
  
  </div>
</template>

<script>
// @ is an alias to /src

import MainIndex from "../components/mainPanel/mainIndex.vue"
import Footer from "../components/footer.vue";
import Header from '../components/Header.vue';
export default {
  components: { Header },
  name: 'HomeView',
  components:{Header,MainIndex,Footer},
   methods: {
    handleMenu(leftlist, rightlist) {
      this.$refs.mainIndex.handleMobileMenu(leftlist, rightlist);
    },
  },
 
}
</script>
