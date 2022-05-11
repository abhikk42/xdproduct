<template>
  <div class="headContainer">
    <div class="headTextCont">
      <div class="headText">{{ data.name }}</div>
      <div class="itemsHead">{{ data.count }} Items</div>
    </div>
    <div class="actionRow">
      <div class="leftAction">
        <button class="toggler" v-on:click="handleClick">
          <font-awesome-icon
            icon="fa-sliders"
            :style="{ marginRight: '10px' }"
          />{{ togglerText }}
        </button>
      </div>
      <div class="rightAction">
        <div class="displayfilter">
          <p
            v-for="val in filterarray"
            :key="val.value"
            class="item"
            @click="$parent.handleRemoveFilterByJumbo(val)"
          >
            {{ val.value }} <font-awesome-icon icon="fa-x" class="cross" />
          </p>
        </div>

        <select
          v-model="selectedValue"
          class="sortbtn"
          @change="getSortedApi($event)"
        >
          <option v-for="item in sortArray" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
    </div>
    <div class="bottomrow">
      <span
        class="clear"
        v-on:click="this.$parent.clearFilter"
        v-if="filterarray.length > 0"
        ><font-awesome-icon icon="fa-x" /> Clear All Filter</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemSelected: "Womens Pashima Shawls",
      totalItems: 810,
      togglerText: "HIDE FILTER",
      selectedValue: "Sort By",
      filterarray: [],
      data: "",
      sortArray: [
        "Sort By",
        "Newest",
        "Price(Low to High)",
        "Price(High to Low)",
        "Discount",
      ],
      api: "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=",
    };
  },
  mounted() {
    let { sort_by, sort_dir } = this.$route.query;
    if (sort_by && sort_dir) {
      if (sort_by == "selling_price" && sort_dir == "asc")
        this.selectedValue = "Price(Low to High)";
      if (sort_by == "selling_price" && sort_dir == "desc")
        this.selectedValue = "Price(High to Low)";
      if (sort_by == "product_position") this.selectedValue = "Newest";
      if (sort_by == "Discount") this.selectedValue = "Discount";
    } else {
      this.selectedValue = "Sort By";
    }
  },
  methods: {
    handleClick() {
      this.togglerText =
        this.togglerText == "HIDE FILTER" ? "SHOW FILTER" : "HIDE FILTER";
      this.$emit("handleToggle", this.togglerText);
    },
    handleMobileSort(value) {
      this.selectedValue = value;
      this.getSortedApi();
    },

    getFilteredData(data) {
      this.filterarray = data;
    },
    getProdData(data) {
      console.log("data", data);

      this.data = data;
    },
    getSortedApi() {
      let sortjs = { sort_by: "", sort_dir: "" };
      let sortedApi = "";
      sortjs.sort_by = this.selectedValue;
      sortjs.sort_dir = "desc";
      //   sortedApi=`sort_by=${this.selectedValue}&sort_dir=des`

      if (this.selectedValue == "Price(Low to High)") {
        sortjs.sort_by = "selling_price";
        sortjs.sort_dir = "asc";
      } else if (this.selectedValue == "Price(High to Low)") {
        sortjs.sort_by = "selling_price";
        sortjs.sort_dir = `desc`;
      } else if (this.selectedValue == "Newest") {
        sortjs.sort_by = "product_position";
        sortjs.sort_dir = `desc`;
      } else if (this.selectedValue == "Sort By") {
        sortjs.sort_by = "";
        sortjs.sort_dir = "desc";
      }
      this.$emit("sorted", sortjs);
    },
  },
};
</script>

<style scoped>
.headContainer {
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  margin-bottom: 25px;

  width: 100%;
}
.headTextCont {
  display: inline-flex;
  width: 100%;
  margin-top: 40.3px;
  margin-bottom: 39px;

  flex-wrap: wrap;
}
.actionRow {
  display: grid;
  grid-template-columns: 22% 78%;
  width: 100%;
}
.displayfilter {
  display: flex;
  overflow-x: hidden;
  align-items: center;
  overflow-y:auto;
  flex-wrap: wrap;

  width: 80%;
  margin: 0px 10px;
  height: 50px;

  align-items: center;
}
.displayfilter > .item {
  width: auto;
  display: inline-flex;
  color: #303030;
  font-weight: 500;
  font-size: 13px;
  padding: 0px 1%;
  margin: 10px 10px;
  cursor: pointer;
  flex-wrap: nowrap;

  text-align: center;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #707070;
  border-radius: 15px;
  height: 20px;
  max-height: auto;
  
}
.itemsHead,
.headText {
  width: 100%;
  text-align: center;
}
.itemsHead {
  opacity: 0.8;
  margin-top: 10px;
  font-size: 18px;
  color: #303030;
}
.toggler {
  background: white;
  margin-left: 40px;
  height: 46px;
  cursor: pointer;
  color: #303030;
  padding: 0px 20px;
  font-size: 14px;
  font-weight: 500;
  width: auto;
  border: 1px solid grey;
}
.cross {
  margin-left: 10px;
  font-size: 10px;
}
.sortbtn {
  width: 268px;
  height: 46px;
  font-size: 16px;
  font-weight: 500;
  margin-left: auto;
  margin-right: 22px;
}
.rightAction {
  display: flex;
  width: 100%;
}
.headText {
  font-weight: 400;
  font-family: "Playfair Display", serif;
  font-size: 32px;
}
.bottomrow {
  display: flex;
  width: 100%;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 10px;
  align-items: center;
  margin-left: 40px;
}
@media (max-width: 750px) {
  .leftAction {
    display: none;
  }
  .displayfilter {
    display: none;
  }
  .headTextCont{
    margin-top:20px;
    margin-bottom: 20px;
  }
  .rightAction {
    display: none;
  }
  .bottomrow {
    display: none;
  }
}
</style>