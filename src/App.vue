<template>
  <div id="app">
   <Header/>
  <MainIndex/>
  <Footer/>

    <router-view/>
  </div>
</template>

<script>
import Footer from './components/footer.vue'
import Header from "./components/Header.vue"
import MainIndex from './components/mainPanel/mainIndex.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    MainIndex
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,200;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&display=swap');*{
  font-family: "Jost";
  margin:0px;
  


}


</style>




