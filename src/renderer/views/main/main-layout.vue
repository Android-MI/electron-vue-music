<template>
  <v-app>
    <app-side-bar />
    <app-top-bar />
    <v-content class="app-content">
      <v-container fluid class='pl-0 pr-0 __fix-viewport beautify-scrollbar' ref='scroll-wrapper'>
        <keep-alive :include="['recommend', 'music-video', 'personal-fm']">
            <router-view />
        </keep-alive>
      </v-container>
    </v-content>
    <v-footer app height="50px">
      <app-bottom-player />
    </v-footer>
  </v-app>
</template>

<script>
import AppTopBar from '@/components/app-top-bar/app-top-bar'
import AppSideBar from '@/components/app-side-bar/app-side-bar'
import AppBottomPlayer from '@/components/app-bottom-player/app-bottom-player'
import {VApp, VContent, VFooter} from 'vuetify/lib'
import bus from '@/common/bus.js'
import {throttle} from '@/common/utils.js'
const Padding = 24
export default {
  data() {
    return {}
  },
  components: {
    VApp,
    AppTopBar,
    VContent,
    AppSideBar,
    VFooter,
    AppBottomPlayer
  },
  methods: {
    handleScroll(ev){
      if(!ev.target || !ev.target.firstElementChild) {
        return 
      }
      if(ev.target.scrollTop + ev.target.offsetHeight - Padding === ev.target.firstElementChild.offsetHeight) {
        bus.emit('scroll:reachBottom')
      }
    }
  },
  mounted(){
    this.$refs['scroll-wrapper'].addEventListener('scroll', throttle(this.handleScroll))
  }
}
</script>

<style lang="scss" scoped>
.app-content{
  background-color: #16181c;
}
.__fix-viewport{
  height: 100vh;
  max-height: calc(100vh - 102px);
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
