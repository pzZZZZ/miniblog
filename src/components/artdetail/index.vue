<template>
    <div class="detailbox">
        <div class="markdownttitle"></div>
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
            data: ""
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
.detailbox{
    padding:  15px;
    background: lightslategray;
    padding-bottom: 200px;
}
</style>
