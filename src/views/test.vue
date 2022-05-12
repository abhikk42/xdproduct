<template>
  <div>
   <VueSlickCarousel v-bind="settings" class="test">
  <div><h3>1</h3></div>
    <div><h3>2</h3></div>

  <div>3</div>

  <div>4</div>

  /*...*/
</VueSlickCarousel>
  </div>
</template>


<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'

  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    data()
    {
    return{
       settings: {
  "dots": true,
  "dotsClass": "slick-dots custom-dot-class",
  "edgeFriction": 0.35,
  "infinite": false,
  "speed": 500,
  "slidesToShow": 1,
  "slidesToScroll": 1
}
    }
    },
    components: { VueSlickCarousel },
  }
</script>
<style scoped>
.test{
    display: flex;
    width:100%;
    height: 100vh;
    color:wheat;
    height: 100%;
    background: black;
}
</style>