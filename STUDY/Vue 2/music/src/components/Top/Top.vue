<template>
    <div class="top">
        <div class="logo">
            <img class="logo-img hand" src="../../static/ico/樱花 - 75x75.png" />
            <div class="logo-font hand">verion: 0.1.2</div>
        </div>
        <div class="menu fr">
            <div class="item fl">
                <div class="item-text hand">商城</div>
                <div class=""></div>
            </div>
            <div class="item fl">
                <div class="item-text hand">文档</div>
                <div class=""></div>
            </div>
            <div class="item fl">
                <div class="item-text hand">首页</div>
                <div class="item-line"></div>
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
    $line_height = 150px
    .top
        width 100%
        height 100%
        display block
        .logo-img
            float left
            margin-top 31px
        .logo-font
            float left
            line-height $line_height
            font-size 14px
            color $gray
        .menu
            margin-top 31px
            .item
                padding 4px 8px
                .item-line
                    height 2px
                    background $pink
        .face
            border-radius 100%
            background #ffffff
            width 75px
            height 75px
</style>
