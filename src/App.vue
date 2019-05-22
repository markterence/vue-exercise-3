<template>
  <div id="app" class="container-fluid">
    <ClassStyleBinding/>
    <FilterComponent/>
  </div>
</template>

<script>
import ClassStyleBinding from "./components/ClassStyleBinding";
import FilterComponent from "./components/FilterComponent";
export default {
  name: "App",
  components: {
    ClassStyleBinding,
    FilterComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h3,
h2 {
  margin: 20px 0 0;
}
a {
  color: #42b983;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
