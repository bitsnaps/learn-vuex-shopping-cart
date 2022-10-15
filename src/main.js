import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createStore } from 'vuex'
import store from './store/index'
// import {currency} from "./helpers/currency";

createApp(App)
    // .use(createStore(store))
    .use(store)
    // .filter('currency', currency) // removed in Vue 3
    .mount('#app')
