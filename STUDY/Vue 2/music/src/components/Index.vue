<template>
  <div>
    <GetStarted />
    <AboutUs />
  </div>
</template>

<script>
import GetStarted from '../pages/Index/Getstarted/Getstarted.vue'
import AboutUs from '../pages/Index/AboutUs/AboutUs.vue'
export default {
  components: {
    GetStarted,
    AboutUs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../static/stylus/base.styl';

</style>
