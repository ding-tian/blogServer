<template>
  <div>
    <div class="hero">
      <h1>About</h1>
    </div>
    <ul class="intrduce clearfix">
      <li>性别:男</li>
      <li>年龄:21</li>
      <li>电话号码:15070633605</li>
      <li>邮箱:yx2601261664@163.com</li>
      <li>求职意向:前端工程师</li>
      <li>学历: 大专</li>
    </ul>
    <div class="statement">
      <h3>其他项目</h3>
      <ul class="project">
        <li><a href="http://dt_love_gj.gitee.io/todolist/">todolist</a></li>
        <li><a href="http://dt_love_gj.gitee.io/honor-of-kings/">王者荣耀</a></li>
        <li><a href="https://dt_love_gj.gitee.io/h5-animation/">h5动画</a></li>
        <li><a href="http://121.196.96.144:8080">多人社交网</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.intrduce {
  padding-top: 2em;
  font-size: 1.3em;
  line-height: 1.8;
  li {
    float: left;
    width: 50%;
    height: 40px;
    line-height: 40px;
  }
}
.hero:after {
  background-color: #d4a259;
  display: block;
  content: '';
  margin-top: 1.66667em;
  height: 1px;
  width: 60px;
}
.statement {
  padding-top: 2em;
  font-size: 1.3em;
  line-height: 1.8;
  .project {
    animation: run 1s;
    transform: translate(5vw, 8vh);
    li {
      float: left;
      text-align: center;
      width: 30vw;
      height: 10vh;
      line-height: 10vh;
      background-color: #29d;
      margin-top: 1px;
      margin-left: 1px;
    }
    a {
      color: #f5f5f5;
      font-size: 50px;
      transition: all 0.5s;
      &:hover {
        font-size: 60px;
      }
    }
  }
}
@keyframes run {
  0% {
    opacity: 0;
    transform: translate(-13vw, 0);
  }
  100% {
    opacity: 1;
    transform: translate(5vw, 8vh);
  }
}
</style>
