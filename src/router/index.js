import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import Tool from '../components/tool/Tool.vue'
import WatchHouse from '../components/watchHouse/WatchHouse.vue'
import Self from '../components/self/Self.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tool',
      name: 'tool',
      component: Tool
    },
    {
      path: '/watchHouse',
      name: 'watchHouse',
      component: WatchHouse
    },
    {
      path: '/self',
      name: 'self',
      component: Self
    }
  ]
})
