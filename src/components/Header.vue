<template>
  <div class="headContainer">
    <div class="firstHeader">
      <div class="headLeft">
        <h5>COMPLIMENTARY GIFT BOX PACKING ON ALL PRE-PAID ORDERS</h5>
      </div>
      <div class="headRight">
        <div class="list">
          <h5>Our Stores</h5>
        </div>
        <div class="list">
          <h5>My Account</h5>
        </div>
        <div class="list">
          <h5>Blog</h5>
        </div>
      </div>
    </div>
    <div class="midHeader">
      <div class="leftList">

        <div class="list"><h2>Women </h2><img src="@/assets/down.svg"/></div>
        <div class="list"><h2>Men </h2><img src="@/assets/down.svg"/></div>
        <div class="list"><h2>Sale </h2></div>
        <div class="list"><h2>Collection </h2><img src="@/assets/down.svg"/></div>
      </div>
        
      <div class="list logo">
        <font-awesome-icon icon="bars" class="responsivetoggler" @click="handleMobileMenu()"></font-awesome-icon>
           <img src='@/assets/footerLogo.svg/' class="logoimg1">
        <img src="@/assets/logonew.svg" class="logoimg" />
      </div>
      <div class="rightList">
        <div class="list">
           <h2>Our Stories </h2>
           <!-- <img src="@/assets/down.svg"/> -->
        </div>
         <div class="list">  <h2>CRAFTMANSHIP</h2></div>
          
        
        <div class="icons">
                   
        <img src="@/assets/bag.svg" class="selicon" />

            <img src="@/assets/like.svg" class="selicon" />
            <img src="@/assets/search.svg" class="selicon" />

       

        </div>
        


      </div>
     
    </div>
    <div class="mobilemenucontainer" v-if="mobilemenu" @click="mobilemenu=false">
    <div class="mobilemenu" >
      <div class="mobilemenuhead">
  
                <h4 :style="{color:'white'}">MENU</h4>
                <button class="btncross" v-on:click="handleMobileMenu()"><font-awesome-icon icon="fa-x"  class="cross"/></button></div>
   

  <div class="list"><h2>Women </h2><img src="@/assets/down.svg"/></div>
        <div class="list"><h2>Men </h2><img src="@/assets/down.svg"/></div>
        <div class="list"><h2>Sale </h2></div>
        <div class="list"><h2>Collection </h2><img src="@/assets/down.svg"/></div>

         <div class="list">
           <h2>Our Stories </h2><img src="@/assets/down.svg"/>
        </div>
         <div class="list">  <h2>CRAFTMANSHIP</h2></div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "header-comp",
 
  data() {
    return {
      list: ["Women ", "Women", "Sale", "Collection"],
      rightList: ["OUR STORY", "CRAFTMANSHIP"],
      mobilemenu:false,
      openFilter:true,
    };
  },
  methods:{
   handleMobileMenu()
   {
    
     this.mobilemenu=this.mobilemenu==true?false:true;
    //  if(this.mobilemenu)
    //  {
    //    document.getElementById('mobmenu').style.left='0';
    //  }else
    //  {
    //           document.getElementById('mobmenu').style.left='-100';

    //  }
   }
  }
};
</script>

<style scoped>

.headContainer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
  align-items: center;
  box-shadow: 0px 3px 5px #dfdfdf66;
  font-family: "Jost";
  width: 100%;
}

.midHeader {
  display: flex;
  align-items: center;

  width: 100%;
}

.firstHeader{ 
  display:inline-flex;
  width:100%;
  padding:9px 0px;
  align-items: center;
  border-top:none;   
    border-bottom:1px solid 	rgb(240,240,240);
    height: 22px;
    
    color:#303030;
    border-bottom-width:thin;
}
.firstHeader > .headLeft,
.firstHeader > .headRight {
  width: 50%;
  height: 100%;
  align-items: center;
  display: inline-flex;
}

.firstHeader > .headLeft {
  justify-content: space-between;
  margin:0px 10px;
}
.headLeft > h5,
.headRight > .list > h5 {
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;

}
.firstHeader > .headRight {
  justify-content: flex-end;
  
}
.headRight>.list{
  text-align:center;
  width:15%;
}

/*------------------MidHeader css--------------------*/

.midHeader {
  height: auto;
  padding:24.41px 0px;
  color:#303030
}

.leftList,
.rightList {
  display: inline-flex;
    width: 40%;


  
}
.leftList{
justify-content: center
}

.list {
  display: inline-flex;
  justify-content: center;
  width: 20%;
}
.list > h2 {
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
}
.list > img,.rightList>img{
      vertical-align: middle;
      margin:0px 5px;
      font-size:14px;

}
.logoimg1{
  display: none;
}
.logo {
  display: inline-flex;
 width:20%;
   
  justify-content: center;
  align-items: center;
}
.logo > .logoimg {
width: 166px;
height: 104px;
}
.rightList>.list{
      justify-content: center;
      flex:1;

      margin:0px auto;


}
.responsivetoggler{
  display: none;
}
.rightList>.icons{
  flex:2;
  margin:0px auto;
}

.selicon{
 height: 25px;
  float:right;
  margin:0px 20px;


 
}
.mobilemenu{
  display: none;
}
@media(max-width: 768px)
{
  .headContainer{
  max-width: 100vw;
}
.mobilemenuhead{
     
      background: #501337;
      display: flex;
      align-items: center;
      padding:0px 10px;
      justify-content: space-between;
      width: 100%;
      height: 10%;
    

}
 .btncross{
background: none;
border:none;
color:white;
    }
    .btncross>.cross{
      font-size: 15px;

    }
    .mobilemenucontainer{
       display: flex;
  width:100%;
  position: fixed;
 
  top:0;
  left:-100;
    background: rgba(0, 0, 0, 0.6);
  z-index: 1;
  height: 100%;
  flex-direction: column;
  transition-delay:left 10s linear;
    }
    
.mobilemenu{
  display: flex;
  width:70%;
  position: fixed;
  top:0;
  background:white;
  z-index: 100;
  height: 100%;
  flex-direction: column;
  transition-delay:left 10s linear;
}
.mobilemenu>.list{
  width:100%;
  display: inline-flex;
  justify-content: space-between;
  margin:0px auto;
  align-items: center;
  padding:18px 10%;
}
.midHeader{
  display: flex;
  width:100%;
}
.logoimg{
  display: none;
}
.logo{
  width:50%;
  justify-content: flex-start;
  height: 10%;
}
.logoimg1{
  display: block;

}
.midHeader .leftList,.firstHeader{
  display: none;
}
.rightList{
  width:50%;
}
.sidepanel  {
  width: 0;
  position: fixed;
  z-index: 1;
  height: 250px;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;

  padding-top: 60px;
}

.sidepanel a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidepanel a:hover {
  color: #f1f1f1;
}
.responsivetoggler{
  display: block;
  padding:0px 20px;
}
.sidepanel .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
}
.selicon{
  margin:0px 15px;
  height: 90%;
}
.rightList>.list{
  display: none;
}
.rightList>.icons{
  flex:1;
  margin:0px;

}


.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}
.logoimg1{
  padding:auto 10px;
  height: 50%;

}

.openbtn:hover {
  background-color:#444;
}

}
@media(min-width:769px) and (max-width:1024px)
{
.list > h2{
  font-size: 12px;
}
.icons>.selicon{
  font-size: 10px;
  margin:0px 10px;
}
.logo > .logoimg {
width: 83px;
height: 52px;
}
.headLeft>h5{
  font-size: 10px;
}
.headRight>.list>h5{
  font-size: 10px;

}
}
@media(max-width:300px)
{
  .icons>.selicon{
    font-size: 4px;
    margin:0px 4px;
}
}


</style>
