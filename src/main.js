import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

import App from "./App.vue";
import BaseFilter from './components/_base-filter.vue';

import 'bootstrap/dist/css/bootstrap.css'
import modules from "./store";
import routes from "./router";

Vue.component('BaseFilter', BaseFilter)

Vue.config.productionTip = false;
Vue.use(Vuex);
const store = new Vuex.Store({
  namespaced: true,
  modules: modules
});

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history"
});
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
