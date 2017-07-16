<template>
  <div class="article">
      <div class="article-title">
        <h1>小短文</h1>
        <h2>不定时更新~</h2>
      </div>
      <el-card class="box-card" >
        <Post v-highlight class="markdown-body"></Post>
      </el-card>
  </div>
</template>
<script>
  import Post from '../../md/test.md'
  export default{
    data(){
      return{

      }
    },
    components:{
      Post
    }
  }
</script>
<style lang="scss" scoped>
.article{
  padding: 50px 100px 0;
  .article-title{
    h1{
      text-align: center;
      color:burlywood;
      font-size: 36px;
    }
    h2{
      text-align: center;
      color:darkgrey;
      font-size: 14px;
      line-height: 40px;
    }
  }
 
}
</style>

