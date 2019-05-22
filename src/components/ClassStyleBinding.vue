<template>
  <div>
    <h2>Class and Style Binding</h2>
    <div class="container-fluid mt-3">
      <!-- class and style binding: https://vuejs.org/v2/guide/class-and-style.html-->
      <Term title="Class Binding" ref="term"></Term>
    </div>
  </div>
</template>

<script>
import Term from "./Term";
export default {
  components: {
    Term
  },
  mounted() {
    //const term = this.$refs.term;
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.term {
  transition: height 0.4s;
}
.term.active {
  box-shadow: rgba(75, 0, 196, 0.6) 0px 0px 8px 4px;
}
</style>
