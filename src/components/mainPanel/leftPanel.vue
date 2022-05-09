<template>
<div class="filterComp">
    <div v-for="(val,ind) in filterItems" :key="val.filter_lable" class="filterdiv">
    <button class="accordion" v-on:click="handleAccordian(ind)">{{val.filter_lable}}<span class="icon"><font-awesome-icon :icon="data[ind].open=='false'?'fa-plus':'fa-minus'" />
    </span></button>
<div v-if="data[ind].open=='true'">
    <div v-for="value in val.options" :key="value.value" class="checkbox">
        
    <input type="checkbox" :id="value.value" :value="value" class="checker" v-model="checkedArray"  @click="handleChecked($event,value)">
<label for="checkbox" class='checkboxlabel' @click="handleChecked($event,value)">{{ value.value }}</label>
    </div>

</div>
<hr/>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name:'left-panel',
    data()
    {
        return{filterItems:['Types in shawl','price'],
        data:[{open:'true'},{open:false}],
        checkedArray:[],
        api:'https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=',
        filteredApi:''
            

        }
    },
    async mounted()
    {
         const resp=await axios.get(this.api);
                 let {filter}=this.$route.query;

        console.log(resp.data.result);
        this.filterItems=resp.data.result.filters;
        if(this.filterItems.length>0)
        {
            this.data=this.filterItems.map(()=>{
                return {open:'false'}});
            console.log(this.data)
        }

        if(filter!==''&&filter!==undefined)
        {
            let newarr=filter.split(',');
            console.log("bbbbb",newarr);
            let filterarr=[];
            for(let i=0;i<newarr.length;i++)
            {
                let js={};
                let key=newarr[i].split('-')[0];
                let value=(newarr[i].split("-")[1]).replaceAll('+',' ');
                js['code']=key;
                js['value']=value;
                this.checkedArray.push(js);
               this.$emit("filtereddata",this.checkedArray);


                
            }
        
        }
       
    },
    methods:{
        handleAccordian(ind)
        {
         this.data[ind].open= this.data[ind].open=='true'?'false':'true';

        },
        clearFilterArray()
        {
            this.checkedArray=[];
                 this.getFilteredApi();

       this.$emit("filtereddata",this.checkedArray);

       
       
       },
     
        handleChecked(e,value)
        {
           let ind=this.checkedArray.findIndex(val=>val.value==value.value);
          console.log("ind",ind)
          if(ind>=0)
          {
          this.checkedArray.splice(ind,1)

          }else
          {
             this.checkedArray.push(value);
             

          }

      console.log("valu",JSON.stringify(value))
     this.getFilteredApi();
     this.$emit("filtereddata",this.checkedArray)


        }
        ,
        getFilteredApi()
        {
           
           var filterapi='';
           console.log(this.checkedArray.length);
           for(let i=0;i<this.checkedArray.length;i++)
           {
               filterapi=filterapi+this.checkedArray[i]['code']+'-'+this.checkedArray[i]['value'].replaceAll(" ",'+')+',';
            
           }
        //    filterapi=filterapi.replaceAll("&","+");
           let newapi=filterapi.slice(0,-1);
        //   newapi=encodeURIComponent(newapi);
        
           let js={filterapi:"",filterstring:""};
           
            this.filteredApi=this.api+newapi;
            js.filterapi=this.filteredApi;
            js.filterstring=newapi;
            console.log("kkk",js);
          this.$emit("filtered",js)


        }

    }

}
</script>

<style scoped>
.accordion {
  background-color: white;
  color: #444;
  cursor: pointer;
  text-transform: uppercase;
  padding: 18px 20px 18px 40px; 
  width: 100%;
  border: none;
  text-align: left;
  font-weight: 600;
  outline: none;
  font-size: 16px;
  transition: 0.4s;
}
.filterComp{
    display: flex;
    flex-wrap: wrap;
    width:100%;

}
.icon{
    float:right;
    font-size: 16px;
}
.filterdiv{
    width:100%;
}
.checkbox{
  margin-left:40px;
  margin-top:10px;
  margin-bottom: 10px;
  margin-right:90px;
}
.checker{
    height: 22px;
    accent-color:#4C0B36;
    vertical-align: bottom;
    border:1px solid #4C0B36;
width: 22px;
}

.checkboxlabel{
    margin: auto 11px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    color:#303030;
    font-size: 16px;
    font-family: 'Jost';
}
hr{
     width:85%;
     margin-left: 40px;
    

}


.panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}


</style>