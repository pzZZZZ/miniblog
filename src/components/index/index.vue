<template>
    <div class="art_box">
    
        <el-collapse-transition>
            <div class="navbar" v-show="navBarShow">
                <div class="barbody">
                        <ul>
                           <router-link to='/index/content' tag='li'><i class="iconfont icon-home"></i>主页(HomePage)</router-link>
                           <router-link to='/index/content/article' tag='li'><i class="iconfont icon-article"></i>文章(Article)</router-link>
                           <router-link to='' tag='li'><i class="iconfont icon-music"></i>音乐(Music)</router-link>
                        </ul>       
                </div>
            </div>
        </el-collapse-transition>
        <div class="header">
            <img src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1001733352,508584436&fm=117&gp=0.jpg' />
            <p @click.stop.prevent='navBar'>Pzzz</p>
            <h1>这里是Pzzz的家,希望你也喜欢这里</h1>
        </div>
        <router-view></router-view>
    
    </div>
</template>
<script>
import aa from "./index.js"

export default aa
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>