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
        <ul>
         <h6>SHOP</h6>

            <li v-for="val in shop" :key="val"><a class="link" href="#">{{val}}</a></li>
        </ul>

      </div>
       <div class="footerItems">
       
        <ul>
             <h6>QUICK LINKS</h6>
            <li v-for="val in links" :key="val"><a class="link" href="#">{{val}}</a></li>
        </ul>

      </div>
       <div class="footerItems">
       
        <ul>
             <h6>CUSTOMER SERVICE</h6>
            <li v-for="val in services" :key="val"><a class="link" href="#">{{val}}</a></li>
        </ul>

      </div>
      
       <div class="footerItems">
        <ul>
         <h6>MY Profile</h6>

            <li v-for="val in profile" :key="val"><a class="link" href="#">{{val}}</a></li>
        </ul>
       </div>
    </div>
    <div class="footerSecondCol">
       <div class="footerItems ">
           <ul>
               <h6>Sign Up and save</h6>
               <li >
                   Subscribe to our newsletter and get 10% off your first purchase
             

               </li>
                   <li>   <label for='email'>Subscribe</label><input type='text' id='email' placeholder="Enter your Email" />
                </li>
                <li>   <h5>GIVE US A FOLLOW</h5></li>
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
            signup:[]

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

    width: 95%;
}
.footerHeader>.img1{
    justify-content: flex-start;
    width: 45%;
}
.footerHeader>.img2{
    justify-content: center;
}
.footerHeader > .img3{
    justify-content: flex-end;
    width:50%;
}
.footerFirstCol{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    width: 100%;
}
ul{
    list-style-type: none;
    opacity: 0.8;
}
ul>h6{
     font-size: 16px;
      font-family: "Jost", sans-serif;    
      text-transform: uppercase;

    font-weight:400;
}
input {
  outline: 0;
  border-width: 0 0 2px;
  width:100%;
  position: relative;
  border-color: #000000
}
 


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
        order:2
    }
    ul{
    }
    .footerSecondCol{
        order:1;
        width:100%;

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