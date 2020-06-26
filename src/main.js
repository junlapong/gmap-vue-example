import Vue from "vue";
import App from "./App.vue";
import * as GmapVue from "gmap-vue";

Vue.config.productionTip = false;

Vue.use(GmapVue, {
  load: {
    key: process.env.VUE_APP_GMAP_KEY,
    libraries: "places",
    region: "TH",
    language: "th"
  },
  installComponents: true
});

new Vue({
  render: h => h(App)
}).$mount("#app");
