<template>
 <fragment >
  <div class="rightCont" v-if="processStatus=='success' && data">
     
      <div class='prodCont' v-for="val,ind in data" :key="ind">
          <div class="box">
            <img :src="val.image" class="prodImg"/>
           
          </div>
           <div class="detailbox">
              <p class="heading">{{val.name}}</p>
              <p class="price">Rs:{{val.price}}</p>
              </div>

      </div>
     

  </div>
   
    <div class="spinnercomp" v-else>
      <div class="spinner-1" ></div>
    </div>
    </fragment>
</template>

<script>
import axios from 'axios'


export default {
    name:'right-panel',
    data()
    {
      return{
          data:"undefined",
          processStatus:"waiting",
          filter:'',
          sort:"",
          sortdir:'desc',
          url_key:'top-wear-kurtas',
          page:"1",
          api:'https://pim.wforwoman.com/pim/pimresponse.php/'

      }
    },
    async mounted()
    {  
       let {filter,sort_by,sort_dir,page}=this.$route.query;
          this.filter=filter;
          this.sort=sort_by;
          this.sort_dir=sort_dir;
          this.page=page?page:1;
        this.handleApiCall(this.api)
       
    }
    ,methods:{
        onFilteredApi(value)
        {
            this.filter=value.filter;
            this.sort=value.sort_by;
            this.page=value.page
            this.sortdir=value.sort_dir;
            this.handleApiCall(this.api);
           

        },
        async handleApiCall(api)
        {
            this.processStatus='waiting';
             const resp=await axios.get(api,{
               params:{service:'category',store:1,url_key:this.url_key,page:this.page,count:'20',sort_by:this.sort,sort_dir:this.sortdir,filter:this.filter}
             });
             if(resp.status==200 || resp.status==201)
             {
               this.processStatus='success'
             }
              this.$parent.updatedData(resp.data.result)
        this.data=resp.data.result?resp.data.result.products:'undefined';


        }
    }

}
</script>

<style scoped>
.rightCont{
    /* display:flex;justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: repeat(4,1fr);
        overflow: hidden;

    width:100%;
    gap:31px;
    
}
.box{
    /* background:#E6E6E2;
    overflow: hidden; */
}
.prodCont{
  flex-grow: 1;
  flex-basis: 20%;

  display: flex;
  flex-wrap: wrap;
   margin-top: 10.48px;


 margin-bottom: 10.48px;
}
.box>.prodImg{ 
width:100%;
max-width: auto;
height: 100%;
}
.detailbox{
    margin-top: auto;

}

.detailbox>.heading{

 font-size:16px;
 margin-top:0px;
 color:#0C0C0C;
 margin-top:15.88px;
    margin-bottom:8.52px;
    font-weight: 500;
    font-family: 'Jost';
}
.price{
    color:#4C0B36;
    font-weight: 600;
}
.spinnercomp{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.spinner-1 {  
  width:50px;
  height:50px;
  border-radius:50%;
  border:8px solid;
  border-color:#000 #0000;
  animation:s1 1s infinite;
}
@keyframes s1 {to{transform: rotate(.5turn)}}

@media(max-width:750px)
{
  .rightCont{
    display: flex;
    flex-wrap: wrap;
    margin:0 0px;
    width:100%;
  }
  .prodCont{
    flex-basis:45%;
    margin:0px;

  }
  .prodImg{
    width:100%;
  }
}
</style>