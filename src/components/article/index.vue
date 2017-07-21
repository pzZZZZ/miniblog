<template>
  <div class="article">
    <div class="article-title">
      <h1>小短文</h1>
      <h2>不定时更新~</h2>
    </div>
  
    <el-card class="box-card" v-for="i in list">
      <span v-if="i.img" v-bind:style="{background: 'url(' + i.img + ')'}"></span>
      <div class="box_header">
        <h1>{{i.title}}</h1>
        <div class="article_desc">{{i.description}}</div>
  
      </div>
  
      <div class="card_footer">
        <div class="authod">{{i.authod}}</div>
        <el-button type="primary" class="showall">查看全文</el-button>
      </div>
  
    </el-card>
  </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';

Vue.use(axios)
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    axios.get('http://172.16.211.149:3000/update')
      .then((res) => {
        console.log(res)
        this.list = res.data
      })
      .then((err) => { console.log(err) })
  },
  components: {
    // Post
  }
}
</script>
<style lang="scss" scoped>
.article {
  padding: 50px 100px 0;
  .article-title {
    h1 {
      text-align: center;
      color: burlywood;
      font-size: 36px;
    }
    h2 {
      text-align: center;
      color: darkgrey;
      font-size: 14px;
      line-height: 40px;
    }
  }
  .el-card {
    position: relative;
  }
  .el-card__body {
    span {
      width: 100%;
      height: 240px;
      display: block;
      background-color: #ccc;
      background-repeat: no-repeat!important;
      background-size: cover;
      background-position: 50%;
      transition: all .5s .1s;
    }
    .box_header {
      h1 {
        font-size: 28px;
        margin-bottom: 10px;
        cursor: pointer;
        transition: color .3s;
      }
    }
  }
  .card_footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>

