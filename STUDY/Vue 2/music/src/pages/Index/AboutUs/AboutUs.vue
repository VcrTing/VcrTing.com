<template>
    <div class="call-us">
        <div class="title">
            <p class="hand">About us</p>
            <div class="line"></div>
        </div>
        <div class="content">
            <p>Hi, we are the team behind the <span class="main-color-text">VcrTing</span> website and wish everyone a happy mood in the new month. 
                When I started this website, I made a lot of relevant considerations. 
                Many people didn't think it necessary. 
                But ultimately it was the dream that made us decide to make the site and stick with it. 
                Now come to think of it, the dream is really a strange thing. 
                We should be able to promote this music game platform. 
                Without further ado, I hope you will find fun on this platform!</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import '../../../static/stylus/base.styl';
    .call-us
        margin-top 50px
        font-size 30px
        .title
            display block
    .line
        width 130px
        height 2px
        background $deeppink
        display block
        margin-top -30px
    .content
        border 1px solid rgba(44, 47, 56, 1)
        display block
        padding 20px 4%
        p
            font-size 14px
            color #dddddd
            &:hover
                color #ffffff
</style>
