<template>
  <div id="app" class="container-fluid w-75 py-5">
    
    <ElementComponentAccess @onSendClicked="broadcastMessage" @onPurgeClicked="clearMessages"/>
    <ClassStyleBinding ref="termFeed"/>
    <FilterComponent/>

    <ResourcesComponent />
  </div>
</template>

<script>
import ClassStyleBinding from "./components/ClassStyleBinding";
import FilterComponent from "./components/FilterComponent";
import ElementComponentAccess from "./components/ElementComponentAccess";
import ResourcesComponent from './components/Resources'
export default {
  name: "App",
  components: {
    ClassStyleBinding,
    FilterComponent,
    ElementComponentAccess,
    ResourcesComponent
  },
  methods: {
    clearMessages() {
      const feedRef = this.$refs.termFeed;
      const feed = feedRef.getTerm();
      feed.clearTermContent()
    },
    broadcastMessage({data}){ 
      const feedRef = this.$refs.termFeed;
      const feed = feedRef.getTerm();
      feed.setTermContent(data)
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
