<template>
    <div class="clear-float get-started">
        <div class="data col-6" id="data_swiper">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img class="img" src="../../../static/swiper/0.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img" src="../../../static/swiper/1.png" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img" src="../../../static/swiper/2.gif" alt="">
                    </div>
                </div>
            </div>
        </div>
        <button class="btn btn-index"><i class="iconfont icon-play"></i>&nbsp;&nbsp;Get started</button>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    data () {
        return {
            swiper_list: [
                '../static/swiper/01.jpg',
                '../static/swiper/02.png',
                '../static/swiper/03.jpg'
            ],
            msg_height: ''
        }
    },
    mounted () {
        var index_swiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            autoplay: true,
            loop: true
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import '../../../static/stylus/base.styl';
    .data
        position relative
    .btn-index
        position absolute
        z-index 2000
        display block
        right 0
        &:hover
            text-shadow 0 0 5px rgba(0, 0, 0, 1)
</style>
