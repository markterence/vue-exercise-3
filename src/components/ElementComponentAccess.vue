<template>
  <div>
    <h2>Element & Component Access</h2>
    <div class="container-fluid mt-3">
      <div class="d-block">
        <div>
          <span class="h5 text-secondary">Text:</span>
          <p>Message is: {{ text1 }}</p>
          <input type="text" class="text-dark form-control" v-model="text1">
        </div>
        <!-- <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="chkBox" :model="form.chk1">
          <label class="form-check-label" for="chkBox" style="user-select:none">Box</label>
        </div>-->
        <button class="btn btn-block btn-primary">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text1: "components",
      form: {
        text1: "component",
        chk1: false
      }
    };
  }
};
</script>
