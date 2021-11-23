import Vue from 'vue'
import App from './App.vue'
import { store } from './store' // store.js 파일 불러오기

new Vue({
  el: '#app',
  store: store, //뷰 인스턴스의 store 속성에 연결
  render: h => h(App)
})
