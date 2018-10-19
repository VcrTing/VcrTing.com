<template>
  <div id="app">
    <Header />
    <div id="top" class="container">
      <Top />
    </div>
    <router-view id="center" class="container"/>
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Top from '@/components/Top/Top'
import Footer from '@/components/Footer/Footer'
export default {
  components: {
    Header,
    Top,
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './static/stylus/base.styl';
  #app
    position absolute
    width 100%
    height auto
    min-height 100%
    background-color $bg
    color #ffffff
  #top
    height 150px
    margin 0 auto
  #center
    margin 0 auto
  #footer
    margin-top 120px
</style>
