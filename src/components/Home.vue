<template>
  <div class="site-content">
    <div class="hero">
      <p>
        My Name is Nicholas-Zhaosi i'm a web developer in Beijing, It's nice to meet you, I hope we can be good friends
      </p>
    </div>
    <div class="guoguang">
      <a> <img src="../assets/computer.jpg" alt="" @load="fun"/></a>
      <div class="work-header" v-show="show">
        <div class="work-meta">
          <time>March 3,2017-November 11,2018</time>
        </div>
        <h2 class="post-title">
          按照产品经理设计需求负责公司产品 web前端功能开发和实现
        </h2>
        <div class="post-tags">
          <span>#javascript</span>
          <span>#jQuery</span>
          <span>#less</span>
          <span>#htm5</span>
          <span>#css3</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      show: false
    }
  },
  methods: {
    fun() {
      this.show = true
    }
  }
}
</script>

<style scoped>
.site-content div {
  max-width: 1080px;
}
.hero {
  max-width: 720px !important;
  margin: 0 auto;
  margin-bottom: 2.5rem;
}
.hero > p {
  margin: 0 auto;
  font-size: 1.6rem;
  font-family: 'Crimson Text';
  line-height: 1.6;
  margin: 0;
  color: #1d1d1d;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.hero:after {
  background-color: #d4a259;
  display: block;
  content: '';
  margin-top: 1.66667em;
  height: 1px;
  width: 60px;
}
.guoguang {
  position: relative;
  width: 100%;
  margin-bottom: 1.6rem;
}
.guoguang img {
  /* margin-left: 30px; */
  /* text-align: center; */
  width: 90%;
}
.guoguang .work-header {
  position: absolute;
  bottom: 1.66667em;
  left: 2.5em;
  background: rgba(29, 29, 29, 0.9);
  border-left: 2px solid #d4a259;
  /* margin: 0px; */
  width: 60%;
  padding: 1.5em;
}
.word-meta {
  color: #aaa !important;
  font-size: 0.77778rem;
  letter-spacing: 1px;
  line-height: 1.5;
}
.post-title {
  color: #fff;
  line-height: 2.5rem;
}
.post-tags {
  font-size: 0.777778rem;
  line-height: 1.5;
  color: #d4a259;
}
.post-tags span {
  display: inline-block;
  padding-right: 10px;
}
@media only screen and (min-width: 801px) and (max-width: 1001px) {
}
@media only screen and (max-width: 800px) {
}
</style>
