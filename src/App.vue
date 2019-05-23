<template>
  <div id="app" class="container-fluid w-75">
    <ClassStyleBinding ref="termFeed"/>
   
    <ElementComponentAccess @onSendClicked="broadcastMessage" @onPurgeClicked="clearMessages"/>

    <FilterComponent/>
  </div>
</template>

<script>
import ClassStyleBinding from "./components/ClassStyleBinding";
import FilterComponent from "./components/FilterComponent";
import ElementComponentAccess from "./components/ElementComponentAccess";
export default {
  name: "App",
  components: {
    ClassStyleBinding,
    FilterComponent,
    ElementComponentAccess
  },
  mounted() { 
    const feedRef = this.$refs.termFeed;
    this.feed = feedRef.getTerm();
  },
  methods: {
    clearMessages() {
       this.feed.clearTermContent()
    },
    broadcastMessage({data}){ 
      this.feed.setTermContent(data)
    }
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

.v-green {
  color: #42b983;
}
</style>
