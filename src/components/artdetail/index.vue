/*
 * @Author: pzzz 
 * @Date: 2017-07-26 16:31:48 
 * @Last Modified by: pzzz
 * @Last Modified time: 2017-07-26 16:47:08
 */
<template>
    <div class="detailbox">
        <div class="markdownttitle">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
            <h1>
                {{h1}}
            </h1>
            <h2>by {{authods}}
                <span>发表于{{date}}</span>
            </h2>
        </div>
        <div v-html="data" class="markdown-body"></div>
    </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
var md = require('markdown-it')({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) { }
        }

        return '';
    }
});


export default {
    data() {
        return {
            data: "",
            h1: "",
            authods: "",
            date: ""
        }
    },
    mounted() {
        this.loaddata(this.$route.query.id)
    },
    methods: {
        loaddata(artid) {
            axios.get(`http://127.0.0.1:3000/article/${artid}`)
                .then((res) => {
                    this.renderMD(res.data.body)
                    this.h1 = res.data.attributes.description;
                    this.authods = res.data.attributes.authod;
                    this.date = res.data.attributes.date;
                })
                .then((err) => { console.log(err) })
        },
        renderMD(data) {
            var result = md.render(data);
            this.data = result;
        }
    }
}
</script>
<style lang="scss">
.detailbox {
    padding: 15px;
    padding-bottom: 200px;
    .markdownttitle {
        h1 {
            text-align: center;
            font-size: 32px;
            margin-bottom: 20px;
        }
        h2 {
            margin-bottom: 40px;
            font-size: 14px;
            color: gray;
            text-align: center;
            font-weight: normal;
            span {
                font-size: 12px;
                color: #256593;
                margin-left: 10px;
            }
        }
    }
}
</style>
