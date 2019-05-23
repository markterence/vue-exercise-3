<template>
  <div class="mb-5">
    <h2>Class and Style Binding,<code> (see Term.vue)</code></h2>
    <div class="container-fluid mt-3">
      <Term title="Term" ref="term" collapsed/>
    </div>
  </div>
</template>

<script>
import Term from "./Term";
export default {
  components: {
    Term
  }, 
  computed: {
  
  },
  methods: {
    getTerm(){
      const term = this.$refs.term;
      return term;
    }
  }
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
