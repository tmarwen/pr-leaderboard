// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify, {
  VApp,
  VCard,
  VDataTable,
  VDialog,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VToolbar,
  VTooltip
} from 'vuetify/lib';
import VGrid from 'vuetify/lib/components/VGrid';
import transitions from 'vuetify/lib/components/transitions';
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VDataTable,
    VDialog,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VTooltip,
    transitions
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
