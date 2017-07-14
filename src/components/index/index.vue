<template>
    <div class="art_box">
    
        <el-collapse-transition>
            <div class="navbar" v-show="navBarShow">
                <div class="barbody">
                        <ul>
                            <li><i class="iconfont icon-home"></i>主页(HomePage)</li>
                            <li><i class="iconfont icon-article"></i>文章(Article)</li>
                            <li><i class="iconfont icon-music"></i>音乐(Music)</li>
                        </ul>       
                </div>
            </div>
        </el-collapse-transition>
        <div class="header">
            <img src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1001733352,508584436&fm=117&gp=0.jpg' />
            <p @click.stop.prevent='navBar'>Pzzz</p>
        </div>
        <router-view></router-view>
    
    </div>
</template>
<script>
import aa from "./index.js"

export default aa
</script>
<style lang="scss">
@import "./index.scss";
</style>