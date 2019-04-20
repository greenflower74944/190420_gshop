/*
入口JS
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})