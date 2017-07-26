<template>
  <div class="article">
    <div class="article-title">
      <h1>小短文</h1>
      <h2>不定时更新~</h2>
    </div>
  
    <el-card class="box-card" v-for="i in list" :key="i.id">
      <span v-if="i.img" v-bind:style="{background: 'url(' + i.img + ')'}"></span>
      <div class="box_header">
        <h1>{{i.title}}</h1>
        <div class="article_desc">{{i.description}}</div>
  
      </div>
  
      <div class="card_footer">
        <div class="authod">-- by {{i.authod}} {{i.date}}</div>
  
        <router-link :to="{ path: 'detail', query: { id: i.id }}">
          <el-button type="primary" class="showall">查看全文</el-button>
        </router-link>
      </div>
  
    </el-card>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="page" :current-page.sync="nowpage" :page-size=5 @current-change="pagechange">
      </el-pagination>
    </div>
  
  </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';

Vue.use(axios)
export default {
  data() {
    return {
      list: [],
      page: 0,
      nowpage: 1,
      pagesize: 5
    }
  },
  methods: {
    pagechange() {
      console.log(this.nowpage)
      this.pageload();
    },
    pageload() {
      axios.get('http://127.0.0.1:3000/update')
        .then((res) => {
          console.log(res)
          this.list = res.data.sort(function (a, b) {
            //修正node 无法按顺序读取文件的问题
            return b.id - a.id
          });
          this.list = res.data.slice(this.nowpage - 1, this.nowpage - 1 + this.pagesize);
          this.page = res.data.length;
        })
        .then((err) => { console.log(err) })
    }
  },
  created() {
    this.pageload();
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
    margin: 30px 0;
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
      .article_desc {
        color: gray;
        font-size: 14px;
        margin-bottom: 20px;
        word-break: break-word;
        line-height: 1.4;
      }
    }
  }

  .card_footer {
    display: flex;
    justify-content: space-between;
    .authod {
      color: gray;
      font-size: 14px;
      margin-bottom: 20px;
      word-break: break-word;
      line-height: 1.4;
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
</style>

