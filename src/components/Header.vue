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
        <div class="list"><h2>Women <img src="@/assets/down.svg"/></h2></div>
        <div class="list"><h2>Men <img src="@/assets/down.svg"/></h2></div>
        <div class="list"><h2>Sale </h2></div>
        <div class="list"><h2>Collection <img src="@/assets/down.svg"/></h2></div>
      </div>

      <div class="list logo">
        <img src="@/assets/logonew.svg" class="logoimg" />
      </div>
      <div class="rightList">
        <div class="list">
           <h2>Our Stories <img src="@/assets/down.svg"/></h2>
        </div>
         <div class="list">  <h2>CRAFTMANSHIP</h2></div>
          
        
        <div class="icons">
                   
        <img src="@/assets/bag.svg" class="selicon" />

            <img src="@/assets/like.svg" class="selicon" />
            <img src="@/assets/search.svg" class="selicon" />

       

        </div>
        


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
    };
  },
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
.firstHeader,
.midHeader {
  display: flex;
  align-items: center;

  width: 100%;
}
.firstHeader{ 
  border-top:none;   
    border-bottom:1px solid 	rgb(240,240,240);
    height: 20px;
    
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
  width: 20%;
}
.list > h2 {
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
}
.list > img{
      vertical-align: middle;

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
.rightList>.icons{
  flex:2;
  margin:0px auto;
}
.selicon{
 height: 25px;
  float:right;
  margin:0px 20px;


 
}
@media(max-width: 768px)
{
  .headContainer{
  max-width: 100vw;
};
.midHeader{
  display: none;
}
.logo{
  width:100%;
  justify-content: center;
  height: 20%;
}
.midHeader .leftList,.midHeader .rightList{
  display: none;
  background: blue;
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
  transition: 0.3s;
}

.sidepanel a:hover {
  color: #f1f1f1;
}

.sidepanel .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color:#444;
}

}


</style>
