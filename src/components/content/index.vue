<template>
    <div class="content">
        <div class="box">
             <router-view></router-view>
        </div> 
    </div>
  
</template>
<style lang="scss" scoped>
.content{
    background:url('http://www.quazero.com/uploads/allimg/140325/1-140325221516.jpg');
    .box{
        width: 950px;
        margin: 0 auto;
        height: 1000px;
        background: #fff;
    }
}
</style>


