<template>
  <div class="footerContainer">

  <div class="footerHeader">
     <img src='@/assets/leftLine.png/' class="img1">

      <img src='@/assets/footerLogo.svg/' class="img2">
    <img src='@/assets/rightLine.png/' class="img3">


  </div>
  <div class="footerInnerContainer">
    <div class="footerFirstCol">
      <div class='footerItems'>
        <button class="footeraccordian" @click='handleFooterDrop("shop")'>SHOP <span class="icon"><font-awesome-icon :icon="data['shop']==false?'fa-plus':'fa-minus'" />
    </span></button>

        <ul  v-if="data['shop']" class="responsiveul">
       


            <li v-for="val in shop" :key="val"><a class="link" href="#">{{val}}</a></li>
        </ul>

         <ul  class="footerul">
         <h6>SHOP</h6>


            <li v-for="val in shop" :key="val"><a class="link" href="#">{{val}}</a></li>
        </ul>

      </div>
       <div class="footerItems">
            <button class="footeraccordian" @click='handleFooterDrop("links")'>Quick Links <span class="icon"><font-awesome-icon :icon="data['links']==false?'fa-plus':'fa-minus'" />
    </span></button>
       
        <ul  v-if="data['links']"  class="responsiveul">
            <li v-for="val in links" :key="val"><a class="link" href="#">{{val}}</a></li>
        </ul>
         <ul   class="footerul">
             <h6>QUICK LINKS</h6>
            <li v-for="val in links" :key="val"><a class="link" href="#">{{val}}</a></li>
        </ul>

      </div>
       <div class="footerItems">
            <button class="footeraccordian" @click='handleFooterDrop("service")'>CUSTOMER SERVICE <span class="icon"><font-awesome-icon :icon="data['service']==false?'fa-plus':'fa-minus'" />
    </span></button>
       
        <ul  v-if="data['service']"  class="responsiveul">
          
            <li v-for="val in services" :key="val"><a class="link" href="#">{{val}}</a></li>
        </ul>
         <ul    class="footerul">
             <h6>CUSTOMER SERVICE</h6>
            <li v-for="val in services" :key="val"><a class="link" href="#">{{val}}</a></li>
        </ul>

      </div>
      
       <div class="footerItems">
           <button class="footeraccordian" @click='handleFooterDrop("profile")'>My Profile <span class="icon"><font-awesome-icon :icon="data['service']==false?'fa-plus':'fa-minus'" />
    </span></button>
        <ul  v-if="data['profile']" class="responsiveul">
       

            <li v-for="val in profile" :key="val"><a class="link" href="#">{{val}}</a></li>
        </ul>
         <ul class="footerul">
         <h6>MY Profile</h6>

            <li v-for="val in profile" :key="val"><a class="link" href="#">{{val}}</a></li>
        </ul>
       </div>
    </div>
    <div class="footerSecondCol">
       <div class="footerItems  ">
           <ul>
               <h6>Sign Up and save</h6>
               <li >
                   Subscribe to our newsletter and get 10% off your first purchase
             

               </li>
                   <li class="input">   <input type='text' id='email' placeholder="Enter your Email" /><label for='email'>Subscribe</label>
                </li>
                <li class="iconshead">  <h5>GIVE US A FOLLOW</h5></li>
               <div class="icons">
                   
                   <a href='#'><img class="" src="@/assets/Group 80.png" alt=""></a>
                  <a href='#'><img src="@/assets/twitter.png" alt=""></a>
                  <a href="#"><img src="@/assets/youtube.png" alt=""></a>
                  <a href="#"><img src="@/assets/pinterest.png" alt=""></a>



               </div>
            
           </ul>
       </div>
    </div>
      
  </div>
   <div class="footerText">
           Copyright © 2021 by Ahujasons I Powered by GreenHonchos
       </div>
  </div>
</template>

<script>
export default {
    name:"footer-comp",
    data()
    {
        return{
            shop:['Men', 'Woman','Home', 'Sale',' Collection'],
            services:['Terms and Condition','Shipping & Delivery',' Returns & Cancellation',' Contact us Store appointment'],
            links:['Ahujasons Export','Ahujasons Wholesale','Our Story', 'Legacy',' Craftsman ship Our Store', 'Blogs'],
            profile:['My Account','Track Order',"My Cart","WishList","Order Summary"],
            signup:[],
            ind:0,
            data:{shop:false,service:false,links:false,profile:''}

        }
    },
    methods:{
        handleFooterDrop(value)
        {
            this.data[value]=this.data[value]==false?true:false;
        }
    }

}
</script>

<style scoped>
.footerInnerContainer{
    display: grid;
            overflow: hidden;

    grid-template-columns: 70% 25%;
          font-family: "Jost", sans-serif;    

    width:100%;
}
.footerHeader{
    display: flex;
    align-items: center;
    padding:40px 22.6px;

    width: 100%;
}
.footerHeader>.img1{
    justify-content: flex-start;
    width: 48%;
}
.footeraccordian{
    display: none;
}
.footerHeader>.img2{
    justify-content: center;
    width:92px;
}
.footerHeader > .img3{
    width:48%;
}
.footerFirstCol{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    width: 100%;
}
ul{
    list-style-type: none;
    margin:0px;
    opacity: 0.8;
}
ul>h6{
     font-size: 16px;
      font-family: "Jost", sans-serif;    
      text-transform: uppercase;

    font-weight:400;
}
.input {
  outline: 0;
  width:100%;
  display: flex;
  border-bottom:1px solid black;
  
  justify-content: space-between;
  width:100%;
  border-color: #000000
}
input{
    border:none;
}
label{
font-weight: 600;}
 


li,.sign-text{
    font-size: 14px;
    margin:5% 0px;

}
.footerText{
    display: inline-flex;
    width:95%;
    font-size: 14px;
        margin-top: 26px;

    margin-bottom: 26px;

    justify-content: flex-end;
    align-items: center;
}
.icon{
    float:right;
    font-size: 16px;
}
.responsiveul{
    display: none;
}
.footerul{
    display: block;
}

.link{
    color:#303030;
    text-decoration: none;

}
.icons > a{
    margin:0 5%;
    height: 15%;


}
@media(max-width:768px)
{
    .footerHeader{
    margin:0px;
    }
    .footerInnerContainer{
        display: flex;
        flex-direction: column;
        padding:0px;
        width:100%;
    }
    .footerHeader>.img1,.footerHeader>.img3{
        width:40%;
    }
    .footerHeader>.img2{
        width:20%;
    }
    .footerFirstCol{
        order:2;
        flex-direction: column;
        display: flex;
        width: 100%;
    }
    .footerItems{
        flex-basis: 95%;
        border-bottom: 1px solid #707070 ;



    }
    .footerText{
        flex-basis: 100%;
        font-size: 16px;
        display: flex;
       padding:0px 15px;
        margin-bottom:20%;
        align-items: center;
        justify-content: center;
    }
    
    .footerSecondCol{
        order:1;
        font-size: 18px;
        width:100%;

    }
    .footerItems>ul>h6{
        font-size: 20px;
    }
    .footerItems>ul>li{
        font-size: 18px;
    }
    .responsiveul{
        display: block;
        font-size: 20px;
    }
    .responsiveul>li{
        font-size: 18px;
    }
    .footerul{
        display: none;
    }
.footeraccordian {
  background-color:white;
  color: #444;
  display: block;
  cursor: pointer;
  text-transform: uppercase;
  padding: 18px 20px 18px 20px; 
  width: 100%;
  border: none;
  text-align: left;
  font-weight: 600;
  outline: none;
  font-size: 16px;
  transition: 0.4s;
}
.icons{
    padding: 20px 0px;
}

ul{
    padding: 0px 20px;
}
 .footerItems{
        width:100%;
    }
    .footerSecondCol{
        order:1;
        width:100%;
    }
}

</style>