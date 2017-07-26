<template>
    <div class="content">
        <div class="box">
             <router-view></router-view>
        </div> 
    </div>
  
</template>
<style lang="scss" scoped>
.content{
    background:url('http://pic1.win4000.com/wallpaper/a/592672aec1ea3.jpg') no-repeat;
    background-size: cover;
    .box{
        width: 950px;
        margin: 0 auto;
        // height: 1000px;
        background: #fff;
    }
}
</style>


