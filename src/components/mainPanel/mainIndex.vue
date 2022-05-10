<template>
  <div class="indexContainer">
      <div class="head">
      <jumboTron  @handleToggle="hanldeLeftPanel" @sorted="handleSort" ref="jumbo"/>

      </div>
      <div class="left" v-if="leftPanel" >
        <left-panel @filtered="handleFilter" @filtereddata="getFilteredData" ref='leftpanel'/>

      </div>
        <div class="mobileleft" v-if=" openMobileFilter" >
            <div class="closinghead">
                <h4>Applied Filters</h4>
                <button class="btnred" v-on:click="handleMobileMenu()"><font-awesome-icon icon="fa-x"  class="cross"/></button>
                 <div class="displayfilter">
                <p v-for="val in filterdata" :key="val.value" class="item" @click="handleRemoveFilterByJumbo(val)">{{val.value}} <font-awesome-icon icon="fa-x"  class="cross"/></p>

            </div>
            <div class="inlinerrow">
             <button class="clearfilter" v-on:click="clearFilter()" v-if="filterdata.length>0">
                 Clear All
             </button>

            </div>

                </div>
        <left-panel @filtered="handleFilter" @filtereddata="getFilteredData" ref='leftpanel1'/>

      </div>
      <div class="right" id='right'>
      
      <right-panel ref="rightComp"/>
      </div>
       <div class="paginationrow">
           <div class="pagecol1"></div>
           <div class="pagecol2">
             <button class="btn next" @click="handlePage(activePage-1)" v-if="activePage>1"><font-awesome-icon icon="fa-angle-left" class="anglebtn" />  Prev</button>

               <button  v-for="val in pages" :key="val" :class="activePage==val?'btn active':'btn'" @click="handlePage(val)">{{val}}</button>
         
               <button class="btn next" @click="handlePage(activePage+1)" v-if="activePage<totalPages-1">Next<font-awesome-icon icon="fa-angle-right" class="anglebtn" /></button>


           </div>
          

      </div>
     
      <div class="mobilesort" v-if="openmobilesort">
          <div class="card">
              <div class="sortitem"><h3>Sort By</h3></div>
              <div v-for="val in sortArray" :key="val" class="sortitem" @click="handleMobileSort(val)">{{val}}</div>
          </div>


      </div>
      <div class="mobilesortdiv">
        <div class="sort" @click="openmobilesort=true">Sort
        </div>
        <div class="filter" v-on:click="handleMobileMenu">Filter</div>

         
      </div>
      
  </div>
</template>

<script>
import jumboTron from './jumboTron.vue'
import LeftPanel from './leftPanel.vue'
import RightPanel from './rightPanel.vue'


export default {
  components: { jumboTron,LeftPanel,RightPanel },
  data()
  {
      return{
          leftPanel:true,
          api:'https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=',
          pages:[1,2,3,4,5,6],
          totalPages:'',
          openmobilesort:false,
          filterdata:'',
          filterObject:{filter:"",sort_by:'',sort_dir:'desc',page:1},
          filtervalue:"",
         sortArray:['Newest','Price(Low to High)','Price(High to Low)','Discount'],

          activePage:1,
          openMobileFilter:false,
          data:""
      }

  },
  methods:{
      hanldeLeftPanel(value){
          console.log("value",value)
          this.leftPanel=value=='HIDE FILTER'?true:false;
          document.getElementById('right').style.flexBasis=this.leftPanel==true?'75%':'auto';

        

      },
      handleMobileSort(value)
      {
           this.$refs.jumbo.handleMobileSort(value);
           this.openmobilesort=false;
      },
      handleMobileMenu(){
          this.openMobileFilter=this.openMobileFilter==false?true:false;
      },
      handlePage(pagevalue)
      {
          this.filterObject.page=pagevalue
     this.$refs.rightComp.onFilteredApi(this.filterObject);


       this.activePage=pagevalue;
         this.$router.push({path:"/home",query:{'sort_by':this.filterObject.sort_by,'sort_dir':this.filterObject.sort_dir,filter:this.filterObject.filter,page:this.filterObject.page}})
      },
      clearFilter()
      {
          console.log("heklljfkjkdfjkdjfkdjfdfdfdf");
           this.$refs.leftpanel.clearFilterArray();
      },
      getFilteredData(data){
     this.filterdata=data;
this.$refs.jumbo.getFilteredData(data)
      },
      handleSort(value)
      {
          console.log("vkvalue in sort",value)
        //   let api=this.api.replace("sort_by=&sort_dir=des",value);
        //   console.log(api)
        this.filterObject.sort_by=value.sort_by;
        this.filterObject.sort_dir=value.sort_dir;
          this.$refs.rightComp.onFilteredApi(this.filterObject)
         this.$router.push({path:"/home",query:{'sort_by':value.sort_by,'sort_dir':value.sort_dir,filter:this.filterObject.filter}})


      },
      closeMobileMenu(value)
      {
          this.openMobileFilter=false;

      },
      updatedData(data)
      {
          this.data=data;
          this.totalPages=Math.floor(data.count/20);
          let updatedpages=[]
          for(let i=this.activePage;i<this.activePage+6&& i<this.totalPages;i++)
          {
              updatedpages.push(i);
          }
          this.pages=updatedpages;
          this.$refs.jumbo.getProdData(data)

      },
      handleRemoveFilterByJumbo(value)
      {
        console.log("leftjfjkdfjkdfjkdjfkdj")
       this.$refs.leftpanel.handleChecked('',value)
      },
      handleFilter(value)
      {
          this.api=value.filterapi;
          this.filterObject.filter=value.filterstring;
          this.openMobileFilter=false;
          console.log("vkajdkf",value.filterapi)
          this.$refs.rightComp.onFilteredApi(this.filterObject);
          this.$router.push({path:"/home",query:{'filter':value.filterstring,'sort_by':this.filterObject.sort_by,'sort_dir':this.filterObject.sort_dir,page:this.filterObject.page}})

      }

  }

}
</script>

<style scoped>
.indexContainer{
    display: flex;
    width:100%;
    flex-wrap:wrap;
}
.head{
    width:100%
}
.left{
    width: 22%;
}
.paginationrow{

    display: flex;
    margin:70px 0px;

    width:100%;
}
.pagecol1{
        width: 20%;

}
.mobileleft{
    display: none;
}
.pagecol2{
    width:75%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.right{
margin-left:36px;
  transition: 0.2s ease-in-out;

flex-basis: 75%;
}
.btn{
    background:white;
    height: 40px;
    cursor: pointer;
    font-size: 16px;
    width:40px;
    border:none
}
.mobilesortdiv{
    display: none;
}
.active{
    background: #4C0B36;
    color:white;
}
.next{
    border:1px solid lightgray;
    width:auto;
}
.anglebtn{
    padding:0px 10px;
    font-size: 14px;
}
@media(max-width:780px)
{
    .indexContainer{
    justify-content: flex-start;
    box-sizing: border-box;

    }
    .left{
        display: none;
    }
    .mobileleft{
        display: block;
        position: fixed;
        width: 100%;
        z-index: 1;
        overflow-y:scroll;
         margin-bottom: 10px;

        left: 0;
        background: rgba(0,0,0,.6);
        top:0;
        bottom: 0;

    }
      .mobileheader{
        display: block;
        position: fixed;
        width: 100%;
        z-index: 1;
        left: 0;
        background: rgba(0,0,0,.6);
        top:0;
        bottom: 0;

    }
    .right{
     margin:0px 2px;
     flex-basis: 100%;
    }
    .pagecol1{
        display: none;
    }
    .btnred{
background: none;
font-size: 20px;
border:none;
color:white;
    }
    h4{
        color:white;
    }
    .closinghead{
      background: #501337;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      height: 20%;
      max-height: 40%;
      overflow-y:scroll;
    }
    .pagecol2{
        width:100%
    }
    .mobilesort{
        width:100%;
        background: rgba(0,0,0,.6);
       
    }
    .mobilesortdiv{
        position:fixed;
        bottom:0;
        width:100%;
        height: 10%;
              background: #501337;
              color:white;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .sort,.filter{
        width:50%;
        display: inline-flex;
        justify-content: center;
    }
     .card{
        
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
   position:fixed;
   display: flex;
   flex-direction: column;
   color:black;
   z-index: 2;
   background:whitesmoke;
        bottom:0;
  width: 100%;
  height: 50%;
  margin-bottom: 15%;
  bottom:0;
  border-radius: 5px;
}
.displayfilter{
    display: flex;
    height: auto;
        overflow-y:auto;
        overflow-x:hidden;

    width:80%;
        margin:0px 10px;
          height: 50%;

    align-items: center;
}
.displayfilter>.item{
    width:auto;
    color:#303030;
    font-weight: 500;
    font-size: 12px;
    background: white;
    padding:0px 1%;
    margin: 0px 10px;
    cursor: pointer;

    text-align: center;
    justify-content: center;
   border: 1px solid #707070;
border-radius: 15px;
opacity: 0.7;
    height: auto;
}
.innerrow{
      display: flex;
    width:100%;
    cursor: pointer;
}
.clearfilter{
    border-radius: 12px;
    font-size: 18px;
}
.card>.sortitem{
    width:100%;
    display: inline-flex;margin:auto 0px;

    font-size: 18px;
    align-items: center;
    justify-content: center;
}

    
}
</style>