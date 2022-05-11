<template>
  <div class="indexContainer">
    <div class="head">
      <jumboTron
        @handleToggle="hanldeLeftPanel"
        @sorted="handleSort"
        ref="jumbo"
      />
    </div>
    <div class="left" v-if="leftPanel">
      <left-panel
        @filtered="handleFilter"
        @filtereddata="getFilteredData"
        ref="leftpanel"
      />
    </div>
    <div class="mobileleft" v-if="openMobileFilter" >
      <div class="closinghead">
        <h4>Applied Filters</h4>
        <button class="btnred" v-on:click="handleMobileMenu()">
          <font-awesome-icon icon="fa-x" class="cross" />
        </button>
        <div class="mobiledisplayfilter">
          <p
            v-for="val in filterdata"
            :key="val.value"
            class="item"
            @click="handleRemoveFilterByJumbo(val)"
          >
            {{ val.value }} <font-awesome-icon icon="fa-x" class="cross" />
          </p>
        </div>
        <div class="inlinerrow">
          <button
            class="clearfilter"
            v-on:click="clearFilter()"
            v-if="filterdata.length > 0"
          >
            Clear All
          </button>
        </div>
      </div>
      <left-panel
        @filtered="handleFilter"
        @filtereddata="getFilteredData"
        ref="leftpanel1"
      />
    </div>
    <div class="right" id="right">
      <right-panel ref="rightComp" />
    </div>
    <div class="paginationrow">
      <div class="pagecol1"></div>
      <div class="pagecol2">
        <button
          class="btn next"
          @click="handlePage(activePage - 1)"
          v-if="activePage > 1"
        >
          <font-awesome-icon icon="fa-angle-left" class="anglebtn" /> Prev
        </button>

        <button
          v-for="val in pages"
          :key="val"
          :class="activePage == val ? 'btn active' : 'btn'"
          @click="handlePage(val)"
        >
          {{ val }}
        </button>

        <button
          class="btn next"
          @click="handlePage(activePage + 1)"
          v-if="activePage < totalPages - 1"
        >
          Next<font-awesome-icon icon="fa-angle-right" class="anglebtn" />
        </button>
      </div>
    </div>
 
    <div  class="mobilesort" id='mobsort' v-if="openmobilesort" @click="closemobdiv" >
        

      <div class="card">
        <div class="sortitem"><h3>Sort By</h3></div>
        <div
          v-for="val in sortArray"
          :key="val"
          :class="sortactive==val?'sortactive sortitem':'sortitem'"
          @click="handleMobileSort(val)"
        >
          {{ val }}
        </div>
      </div>
   
    </div>
    <div class="mobilesortdiv">
      <div class="sort" @click="toggleMobileSort">Sort</div>
      <div class="filter" v-on:click="handleMobileMenu">Filter</div>
    </div>
  </div>
</template>

<script>
import jumboTron from "./jumboTron.vue";
import LeftPanel from "./leftPanel.vue";
import RightPanel from "./rightPanel.vue";

export default {
  components: { jumboTron, LeftPanel, RightPanel },
  data() {
    return {
      leftPanel: true,
      api: "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=",
      pages: [1, 2, 3, 4, 5, 6],
      totalPages: "",
      openmobilesort: false,
      filterdata: "",
      filterObject: { filter: "", sort_by: "", sort_dir: "desc", page: 1 },
      filtervalue: "",
      sortactive:"",
      sortArray: [
        "Newest",
        "Price(Low to High)",
        "Price(High to Low)",
        "Discount",
      ],

      activePage: 1,
      openMobileFilter: false,
      data: "",
    };
  },
  methods: {
    hanldeLeftPanel(value) {
      console.log("value", value);
      this.leftPanel = value == "HIDE FILTER" ? true : false;
      if(this.leftPanel)
      {
       document.getElementById("right").style.flexBasis ='78%';
               document.getElementById("right").style.paddingLeft ='0px'


      }else
      {
        document.getElementById("right").style.flexBasis ='auto';
        document.getElementById("right").style.paddingLeft ='4%'


      }
      
    },
    closemobdiv()
    {
        document.getElementById('mobsort').style.display='none';
    },
    toggleMobileSort()
    {
      this.openmobilesort =  this.openmobilesort == false ? true : false;
      if(this.openmobilesort)
      {
                  document.getElementById('mobsort').style.display='block';

      }else
      {
                  document.getElementById('mobsort').style.display='none';

      }

    },
    handleMobileSort(value) {
       this.sortactive=value;
        
       this.openmobilesort = false;
       console.log(this.openmobilesort)

      this.$refs.jumbo.handleMobileSort(value);
      window.scrollTo(0, 0)
      
    },
    handleMobileMenu() {
      this.openMobileFilter = this.openMobileFilter == false ? true : false;
    },
    handlePage(pagevalue) {
      this.filterObject.page = pagevalue;
      this.$refs.rightComp.onFilteredApi(this.filterObject);

      this.activePage = pagevalue;
      this.$router.push({
        path: "/home",
        query: {
          sort_by: this.filterObject.sort_by,
          sort_dir: this.filterObject.sort_dir,
          filter: this.filterObject.filter,
          page: this.filterObject.page,
        },
      });
    },
    clearFilter() {
      console.log("heklljfkjkdfjkdjfkdjfdfdfdf");
      this.$refs.leftpanel.clearFilterArray();
    },
    getFilteredData(data) {
      this.filterdata = data;
      this.$refs.jumbo.getFilteredData(data);
    },
    handleSort(value) {
      console.log("vkvalue in sort", value);
      //   let api=this.api.replace("sort_by=&sort_dir=des",value);
      //   console.log(api)
      this.filterObject.sort_by = value.sort_by;
      this.filterObject.sort_dir = value.sort_dir;
      this.$refs.rightComp.onFilteredApi(this.filterObject);
      this.activePage=1;
      this.$router.push({
        path: "/home",
        query: {
          sort_by: value.sort_by,
          sort_dir: value.sort_dir,
          page:1,
          filter: this.filterObject.filter,
        },
      }).catch(()=>{});
    },
    closeMobileMenu(value) {
      this.openMobileFilter = false;
    },
    updatedData(data) {
      this.data = data;
      this.totalPages = Math.ceil(data.count / 20);
      console.log("kjgkjgfjkgjfkgjkfjgkfgkfkgfkgjkf", this.totalPages);
      let updatedpages = [];
      for (
        let i = this.activePage;
        i < this.activePage + 6 && i <= this.totalPages;
        i++
      ) {
        updatedpages.push(i);
      }
      console.log(updatedpages);
      this.pages = updatedpages;
      this.$refs.jumbo.getProdData(data);
    },
    handleRemoveFilterByJumbo(value) {
      console.log("leftjfjkdfjkdfjkdjfkdj");
      this.$refs.leftpanel.handleChecked("", value);
    },
    handleFilter(value) {
      this.api = value.filterapi;
      this.filterObject.filter = value.filterstring;
      this.openMobileFilter = false;
      this.activePage=1;
      console.log("vkajdkf", value.filterapi);
      this.$refs.rightComp.onFilteredApi(this.filterObject);
      this.$router.push({
        path: "/home",
        query: {
          filter: value.filterstring,
          sort_by: this.filterObject.sort_by,
          sort_dir: this.filterObject.sort_dir,
          page: 1,
        },
      });
            window.scrollTo(0, 0)

    },
  },
};
</script>

<style scoped>
.indexContainer {
  display: flex;
  width: 100%;

  flex-wrap: wrap;
}
.head {
  width: 100%;
}
.left {
  width: 22%;
}
.paginationrow {
  display: flex;
  margin: 70px 0px;

  width: 100%;
}
.pagecol1 {
  width: 20%;
}
.mobileleft {
  display: none;
}
.pagecol2 {
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right {
  transition: 0.2s ease-in-out;
  padding-right: 40px;

  flex-basis: 78%;
}
.btn {
  background: white;
  height: 40px;
  cursor: pointer;
  font-size: 16px;
  width: 40px;
  border: none;
}
.mobilesortdiv {
  display: none;
}
.active {
  background: #4c0b36;
  color: white;
}
.next {
  border: 1px solid lightgray;
  width: auto;
}
.anglebtn {
  padding: 0px 10px;
  font-size: 14px;
}
@media (max-width: 780px) {
  .indexContainer {
    justify-content: flex-start;
    box-sizing: border-box;
  }
  .left {
    display: none;
  }
  .mobileleft {
    display: block;
    position: fixed;
    width: 100%;
    z-index: 1;
    overflow-y: scroll;
    margin-bottom: 10px;

    left: 0;
    background: rgba(0, 0, 0, 0.6);
    top: 0;
    bottom: 0;
  }
  .mobileheader {
    display: block;
    position: fixed;
    width: 100%;
    z-index: 1;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    top: 0;
    bottom: 0;
  }
  .right {
    margin: 0px 0px;
    padding:0px;
    flex-basis: 100%;
  }
  .pagecol1 {
    display: none;
  }
  .btnred {
    background: none;
    font-size: 20px;
    border: none;
    color: white;
  }
  h4 {
    color: white;
  }
  .closinghead {
    background: #501337;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: auto;
    max-height: 40%;
    overflow-y: scroll;
  }
  .pagecol2 {
    width: 100%;
  }
 
  .mobilesort {
    width: 100%;
    top:0;
    height: 100%;
    z-index: 2;
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
  }
  .mobilesortdiv {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10%;
    background: #501337;
    color: white;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sort,
  .filter {
    width: 50%;
    display: inline-flex;
    justify-content: center;
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    position: fixed;
    display: flex;
    flex-direction: column;
    color: black;
    z-index: 2;
    background: white;
    bottom: 0;
    width: 100%;
    height: 50%;
    padding-bottom: 15%;
    bottom: 0;
    border-radius: 5px;
  }
  .sortactive{
      background: #ececec;

  }
  .mobiledisplayfilter {
    display: flex;
    height: auto;
    overflow-y: auto;
    overflow-x: hidden;

    width: 80%;
    margin: 0px 10px;
    height: 50%;

    align-items: center;
  }
  .mobiledisplayfilter > .item {
    width: auto;
    color: #303030;
    font-weight: 500;
    font-size: 12px;
    background: white;
    padding: 0px 1%;
    margin: 0px 10px;
    cursor: pointer;

    text-align: center;
    justify-content: center;
    border: 1px solid #707070;
    border-radius: 15px;
    opacity: 0.7;
    height: 20px;
  }
  .innerrow {
    display: flex;
    width: 100%;
    padding:auto 0px;
    cursor: pointer;
  }
  .clearfilter {
    border-radius: 12px;
    font-size: 18px;
  }
  .card > .sortitem {
    width: 100%;
    display: inline-flex;
    margin: auto 0px;
    padding:10px auto;

    font-size: 18px;
    align-items: center;
    justify-content: center;
  }
}
@media(min-width:769px) and (max-width:1024px)
{
   
}
</style>