<template>
  <div class="indexContainer">
      <div class="head">
      <jumboTron  @handleToggle="hanldeLeftPanel" @sorted="handleSort" ref="jumbo"/>

      </div>
      <div class="left" v-if="leftPanel" >
        <left-panel @filtered="handleFilter" @filtereddata="getFilteredData" ref='leftpanel'/>

      </div>
      <div class="right" id='right'>
      
      <right-panel ref="rightComp"/>
      </div>
       <div class="paginationrow">
           <div class="pagecol1"></div>
           <div class="pagecol2">
             <button class="btn next" @click="handlePage(activePage-1)" v-if="activePage>1"><font-awesome-icon icon="fa-angle-left" />  Prev</button>

               <button  v-for="val in pages" :key="val" :class="activePage==val?'btn active':'btn'" @click="handlePage(val)">{{val}}</button>
         
               <button class="btn next" @click="handlePage(activePage+1)" v-if="activePage<totalPages-1">Next    <font-awesome-icon icon="fa-angle-right" /></button>


           </div>
          

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
          filterObject:{filter:"",sort_by:'',sort_dir:'desc',page:1},
          filtervalue:"",
          activePage:1,
          data:""
      }

  },
  methods:{
      hanldeLeftPanel(value){
          console.log("value",value)
          this.leftPanel=value=='HIDE FILTER'?true:false;
          document.getElementById('right').style.flexBasis=this.leftPanel==true?'75%':'auto';

        

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
       this.$refs.leftpanel.handleChecked('',value)
      },
      handleFilter(value)
      {
          this.api=value.filterapi;
          this.filterObject.filter=value.filterstring;
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
.active{
    background: #4C0B36;
    color:white;
}
.next{
    border:1px solid lightgray;
    width:auto;
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
    .right{
     margin:0px 2px;
     flex-basis: 100%;
    }
    .pagecol1{
        display: none;
    }
    .pagecol2{
        width:100%
    }
}
</style>