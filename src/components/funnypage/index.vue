<template>
  <div class="funny">
    <img src=" " class="fushishan" />
    <div class="text-box">
      <p class="text"></p>
    </div>
  
  </div>
</template>
<script>
import Typed from 'typed.js';
console.log(Typed)
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.initpage()
    this.textinit()
  },
  methods: {
    initpage() {
      let img = document.querySelector('.fushishan');
      let funny = document.querySelector('.funny');
      img.onload = function () {
        var engine = new RainyDay({
          image: this,
          parentElement: funny


        });
        engine.rain([[1, 2, 10]]);
        engine.rain([[3, 3, 0.88], [5, 5, 0.9], [6, 2, 1]], 100);
        // img.style.display = 'none'
      }
      img.crossOrigin = 'anonymous';
      img.src = 'http://otqd4qbmh.bkt.clouddn.com/img54582511_5.jpg';


    },
    textinit() {
      
      var typed = new Typed(".text", {
        // Waits 1000ms after typing "First"
        strings: ["This is a JavaScript library", "This is an ES6 module"],
        smartBackspace: true // Default value
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.funny {
  // display: flex;
  // justify-content: center;
  background: rgba(0, 0, 0, .7);
  // flex-direction: column;
  img {
    height: 500px;
  }
  .typed-cursor {
    opacity: 1;
    -webkit-animation: blink 0.7s infinite;
    -moz-animation: blink 0.7s infinite;
    animation: blink 0.7s infinite;
  }
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>


