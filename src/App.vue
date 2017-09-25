<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item id="home" @click.native="select" :style="$route.path==='/' ? 'color:#ac0319' : 'color:black'">
        <img slot="icon" src="./assets/img/39@2x.png" alt="" v-if="$route.path==='/'">
        <img slot="icon" src="./assets/img/43@2x.png" alt="" v-else>
        首页
      </mt-tab-item>
      <mt-tab-item id="tool" @click.native="select" :style="$route.path==='/tool' ? 'color:#ac0319' : 'color:black'">
        <img slot="icon" src="./assets/img/40@2x.png" alt="" v-if="$route.path==='/tool'">
        <img slot="icon" src="./assets/img/44@2x.png" alt="" v-else>
        工具
      </mt-tab-item>
      <mt-tab-item id="watchHouse" @click.native="select" :style="$route.path==='/watchHouse' ? 'color:#ac0319' : 'color:black'">
        <img slot="icon" src="./assets/img/41@2x.png" alt="" v-if="$route.path==='/watchHouse'">
        <img slot="icon" src="./assets/img/45@2x.png" alt="" v-else>
        看房
      </mt-tab-item>
      <mt-tab-item id="self" @click.native="select" :style="$route.path==='/self' ? 'color:#ac0319' : 'color:black'">
        <img slot="icon" src="./assets/img/42@2x.png" alt="" v-if="$route.path==='/self'">
        <img slot="icon" src="./assets/img/46@2x.png" alt="" v-else>
        我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        selected: 'home'
      }
    },
    methods: {
      select () {
        var self = this
        switch (this.selected) {
          case 'home':
            self.$router.push('/')
            break
          case 'tool':
            self.$router.push('tool')
            break
          case 'watchHouse':
            self.$router.push('watchHouse')
            break
          case 'self':
            self.$router.push('self')
            break
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  .mint-tabbar {
    background-color:#fff;
    border-top: 2px solid #fafafa;
  }
  .mint-tabbar>.mint-tab-item.is-selected {
    background-color:#fff;
  }
</style>
