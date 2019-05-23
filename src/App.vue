<template>
  <div id="app" class="container-fluid w-75 py-5">
    <ClassStyleBinding ref="termFeed"/>
   
    <ElementComponentAccess @onSendClicked="broadcastMessage" @onPurgeClicked="clearMessages"/>

    <FilterComponent/>

    <h3>Resources</h3>
    <ul class="list-group">
      
      <li>
        <h5>Scoped Slots</h5>
        <ul class="list-group">
          <li><a href="https://adamwathan.me/the-trick-to-understanding-scoped-slots-in-vuejs/">The Trick to Understanding Scoped Slots in Vue.js</a></li>
          <li><a href="https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots">Scoped Slots</a></li> 
        </ul>
      </li>

      <li>
        <h5>Events</h5>
        <ul class="list-group">
          <li><a href="https://vuejs.org/v2/guide/components-custom-events.html">Custom Events</a></li>
        </ul>
      </li>

      <li>
        <h5><span class="monospace">$refs</span></h5>
        <ul class="list-group">
          <li><a href="https://vuejs.org/v2/guide/components-edge-cases.html#Element-amp-Component-Access">Element &amp; Component Access</a></li>
        </ul>
      </li>
    </ul>

    <div class="d-flex justify-content-center align-items-center mt-5">
      <span class="mr-2"> Github Repo: </span>
      <a target="_blank" href="https://github.com/markterence/vue-exercise-3" style="color: #e83e8c;">
        <code>https://github.com/markterence/vue-exercise-3</code>
      </a>
    </div>
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
