<template>
  <div id="app">
    <!-- <Header ref="header" />
    <MainIndex ref="mainIndex" />
    <Footer /> -->

    <router-view />
  </div>
</template>

<script>
// import Footer from "./components/footer.vue";
// import Header from "./components/Header.vue";
// import MainIndex from "./components/mainPanel/mainIndex.vue";
export default {
  name: "App",
  methods: {
    handleMenu(leftlist, rightlist) {
      this.$refs.mainIndex.handleMobileMenu(leftlist, rightlist);
    },
  },
  // components: {
  //   Header,
  //   Footer,
  //   MainIndex,
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,200;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&display=swap");
* {
  font-family: "Jost";
  margin: 0px;
  max-width: 1600px;
  box-sizing: border-box;
}
@media (min-width: 1600px) {
  #app {
    max-width: 1600px;
    padding: 0px auto;
  }
}
</style>




