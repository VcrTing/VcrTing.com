<template>
    <div class="footer">
        <div class="container">
            <div class="item fl hand">
                <i class="iconfont icon-give-love"></i>&nbsp;&nbsp;Give <span class="footer-text">VcrTing</span> a donation
            </div>
            <div class="item fr hand">
                Give VcrTing a star on&nbsp;&nbsp;<span class="footer-text"><i class="iconfont icon-github"></i>Github!</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import '../../static/stylus/base.styl';
    .footer
        display block
        width 100%
        min-height 60px
        border-top 3px dashed rgb(44, 47, 56)
        background rgba(28, 30, 38, 1)
        position absolute
        bottom 0px
    .item
        line-height 60px
    .footer-text
        color $pink
</style>
