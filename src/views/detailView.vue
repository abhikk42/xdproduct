<template>
  <div class="aboutContainer">
    <section>
      <Header ref="header" />
    </section>

    <section class="detailcontainer">
      <div class="topdetail">
        <div class="topcol">
          <!-- <VueSlickCarousel v-bind="settings" >
            

          <div  v-for="val in gallery" :key="val" class="carouselimg">
              <img :src="val.image" :style="{height:'200px'}"/>
            </div>
           
     
    </VueSlickCarousel> -->
        </div>

        <div class="topcol textcont">
          <h4>{{ data ? data.name : "" }}</h4>
          <h6>Rs.{{ data.selling_price }}</h6>
          <div class="sizecont">
            <h6>select size</h6>
            <div v-for="val in size" :key="val" class="sizebox">{{ val }}</div>
          </div>
          <div class="colorcont">
            <h6>COLOURS</h6>
            <div>Green</div>
            <div>Red</div>
          </div>
          <div class="cartcont">
            <button class="btncart">ADD TO CART</button>
            <h5 class="wishlist">Add to wishlist</h5>
          </div>

          <div class="accordiancont">
            <div class="filterdiv">
              <button class="accordion" @click="toggleAccordian(0)">
                SIZE GUIDE
                <span class="icon"
                  ><font-awesome-icon
                    :icon="
                      accorddata[0].open == 'false' ? 'fa-plus' : 'fa-minus'
                    "
                  />
                </span>
              </button>
              <div v-if="accorddata[0].open=='true'">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, temporibus!
              </div>
            </div>
            <div class="filterdiv">
              <button class="accordion" @click="toggleAccordian(1)">
                FIT
                <span class="icon"
                  ><font-awesome-icon
                    :icon="
                      accorddata[1].open == 'false' ? 'fa-plus' : 'fa-minus'
                    "
                  />
                </span>
              </button>
              <div v-if="accorddata[1].open=='true'">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit praesentium sequi cumque fugiat perferendis, maxime officia modi itaque unde quae enim pariatur voluptatem odio!
              </div>
            </div>
            <div class="filterdiv productacc">
              <button class="accordion" @click="toggleAccordian(2)">
                product description
                <span class="icon"
                  ><font-awesome-icon
                    :icon="
                      accorddata[2].open == 'false' ? 'fa-plus' : 'fa-minus'
                    "
                  />
                </span>
              </button>
              <div v-if="accorddata[2].open=='true'">
              <ul>
                <li v-for="val in data.visible_attributes" :key="val.code"><h4>{{val.code}}</h4>{{val.value}}</li>
              </ul>
              </div>
            </div>
          </div>

          <!--  -->
          <div class="pincodecont">
            <h6>CHECK PINCODE FOR DELIVERY</h6>
            <input type="text" placeholder="Enter pincode" class="pininput">
            <button class="pinbtn">check</button>
          </div>
        </div>


      </div>

      <div class="midsection">
        <div class="imgcont">
        <img src="@/assets/fast.svg" alt="">
        <h6>free shipping</h6>

        </div>
        <div class="imgcont">
        <img src="@/assets/quality.svg" alt="">
        <h6>high quality unbeatable value</h6>

        </div>
        <div class="imgcont">
        <img src="@/assets/exchange.svg" alt="">
        <h6>Easy Exchange</h6>

        </div>
      </div>

      <!-- Bottom Detail Section -->

      <div class="bottomcarousel">
        <h4>BEING HUMAN EXCLUSIVE</h4>
        <!-- <carousel class="vueslick" :autoplay="true">
             <img src="@/assets/fast.svg" alt="">
               <img src="@/assets/quality.svg" alt="">
                 <img src="@/assets/exchange.svg" alt="">
        </carousel> -->
    <VueSlickCarousel v-bind="settings" class="vueslick">
        <div class="slide">1</div>
      <div class="slide">2</div>
      <div class="slide">3</div>
      <div class="slide">4</div>

    </VueSlickCarousel>
  </div>
    </section>

    <section>
      <Footer />
    </section>
  </div>
</template>
<script>
import axios from "axios";
import Footer from "../components/footer.vue";
  import VueSlickCarousel from 'vue-slick-carousel'


  import 'vue-slick-carousel/dist/vue-slick-carousel.css'



  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import Header from "../components/Header.vue";
export default {
  components: { Header, Footer, VueSlickCarousel  },
  name: "detailpage",

  data() {
    return {
      api: "https://pim.wforwoman.com/pim/pimresponse.php/",
      service: "product",
      store: "1",
      gallery: [],
      url_key: "",
      accorddata: [{ open: 'false' }, { open: 'false' }, { open: 'false' }],
      data: "",
      size: [],
      settings: {
  "dots": true,
  "focusOnSelect": true,
  "infinite": true,
   "autoplay": true,
  "autoplaySpeed": 2000,
  "vertical":false,
  "arrows":true,
  "slidesToShow": 3,
  "slidesToScroll": 1,
  "touchThreshold": 5
},
    };
  },

  mounted() {
    let key = this.$route.query.url_key;
    if (key) this.url_key = key;
    this.getdata();
  },
  methods: {
    async getdata() {
      let resp = await axios.get(this.api, {
        params: {
          service: this.service,
          store: 1,
          url_key: this.url_key,
        },
      });

      console.log("reponse", resp);

      if (resp.status == 200 || resp.status == 201) {
        this.data = resp.data.result;
        this.gallery = [...resp.data.result.gallery];
        let currval = this.data.size.replace(/[\])}[{(]/g, "");
        let size = currval.split(",");
        this.size = [...size];
      }
    },
     toggleAccordian(ind){
    this.accorddata[ind].open=this.accorddata[ind].open=='true'?'false':'true';
  }
  },
 
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,200;1,400&family=Montserrat:ital,wght@0,100;0,400;0,500;1,100;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&display=swap");

.detailContainer {
  display: flex;
  width: 100%;
  background: #f8f8f8;
  text-transform: uppercase;
  font-family: "Montserrat";
  height: 100%;
}

.topdetail {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 48px 50px;
}
.topdetail > .topcol {
  width: 50%;
  justify-content: center;
  height: 90%;
}
.textcont {
  flex-direction: column;
  justify-content: space-between;
}
.colorcont {
  color: #747474;
  display: flex;
  padding: 20px 0px;
  flex-wrap: wrap;
  width: 100%;
}
.colorcont h6 {
  font-size: 15px !important;
  width: 100%;
  text-transform: uppercase;
}

.textcont h4 {
  font-size: 25px;
  font-weight: 400;
  text-transform: uppercase;
}
.textcont h6 {
  font-size: 22px;
  font-weight: 400;
}
img {
  height: 10%;
  width: 100%;
}
.sizecont {
  font-size: 15px;
  width: 100%;
  margin: auto 0px;

  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  color: #747474;
}
.sizecont > h6 {
  width: 100%;
}
.cartcont {
  display: inline-flex;
  width: 100%;

  align-items: center;
  justify-content: flex-start;
}
.wishlist {
  color: #231f20;
  margin: 0px 10%;
}
.btncart {
  width: 415px;
  height: 63px;
  font-family: "Montserrat";
  font-size: 17px;
  background: #231f20;
  color: #ffcb05;
}
.sizebox {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dfdfdf;
  width: 59px;
  align-items: center;
  height: 59px;
}
/*-----------Accordian---------*/
.accordiancont {
  padding: 50px 0px;
}
.accordion {
  background-color: white;
  color: #444;
  cursor: pointer;
  text-transform: uppercase;
  padding: 15px 10px 15px 10px;
  width: 100%;
  border: none;
  text-align: left;

  font-weight: 600;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}
.icon {
  float: right;
  font-size: 15px;
}
.filterdiv {
  width: 100%;
  margin: 0px 0px;
  color: #231f20;
  font-weight: 400;

  padding-top: 2px;
  padding-bottom: 2px;
  border-top: 1px solid #231f20;
}
.productacc {
  border-bottom: 1px solid #231f20;
}
/*--------pincode-----------*/
.pincodecont h6{
  font-size: 15px;
  color:#747474
}
.pininput{
  width:80%;
  background:#F3F3F3;
  border:none;
  padding:22px 32px;

}
.pinbtn{
  
  color:#FFCB05;
  background: #231F20;
  padding:20px 35px;
  font-size: 17px;
  outline: none;
  text-transform: uppercase;
  text-align: center;

} 
li{
list-style-type: none;
display: inline-flex;
width:100%;
font-size: 12px;
justify-content: space-between;
}
li> h4{
  font-size: 14px !important;
  
}

/* Mid container */
.midsection{
  display: flex;
  width: 100%;
  justify-content:space-around;
  border-top:1px solid #F3F3F3;
    border-bottom:1px solid #F3F3F3;


  padding:10px 40px;
}

.imgcont>img{
  width:80%;
  height: 80%;
}
.imgcont{
  display: flex;
  width:10%;
  text-transform: capitalize;
  height: 100px;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  
}
.imgcont>h6{
  font-size: 15px;
  color:#231F20;
  font-weight: 500;
}

/* Bottom container */
.bottomcarousel{
  width:100%;
  height: 100%;
  
  padding:80px 50px;
}
.bottomcarousel h4{
  text-align: center;
  
}
.slide{
  width:100%;
}

.vueslick{
  border:1px solid red;
  width: 100%;
  color:black;
  height: 100%;
}
.slider{
  width:100%;
}

</style>
