<template>
  <div class="filterComponent">
    <h2>Filtering, Conditional Rendering</h2>
    <div class="container-fluid mt-3">
      <div class="form">
        <div class="form-container">
          <input type="text" class="form-control" placeholder="Filter" :model="search">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="chkStar" :model="ratingFilter">
            <label class="form-check-label" for="chkStar" style="user-select:none">Rating</label>
          </div>
          <select class="form-control">
            <option v-for="(rating,i) in ratingOps" :key="i" :value="rating.value">{{rating.text}}</option>
          </select>
        </div>
      </div>

      <div class="my-4">
        <Term title="abc"/>
        <Term title="def"/>
        <Term title="ghi"/>
      </div>
    </div>
  </div>
</template>

<script>
import Term from "./Term";
export default {
  components: {
    Term
  },
  data() {
    return {
      search: "",
      ratingFilter: false,
      ratingOps: [...Array(5)].map((e, i) => {
        return {
          value: i + 1,
          text: `${i + 1} Star`
        };
      })
    };
  }
};
</script>

<style scoped>
</style>
