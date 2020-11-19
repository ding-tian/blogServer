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
      本博客属个人所有，不涉及商业目的。遵守中华人民共和国法律法规、中华民族基本道德和基本网络道德规范，尊重有节制的言论自由和意识形态自由，反对激进、破坏、低俗、广告、投机等不负责任的言行。所有转载的文撰写页面章、图片仅用于说明性目的，被要求或认为适当时，将标注署名与来源。避免转载有明确“不予转载”声明的作品。若不愿某一作品被转用，请及时通知本人。对于无版权或自由版权作品，本博客有权进行修改和传播，一旦涉及实质性修改，本博客将对修改后的作品享有相当的版权。二次转载者请再次确认原作者所给予的权力范围。本博客所有原创作品，包括文字、资料、图片、网页格式，转载时请标注作者与来源。非经允许，不得用于赢利目的。本博客受中国知识产权、互联网法规和知识共享条例保护和保障，任何人不得进行旨在破坏或牟取私利的行为。本博客声明以简体中文版为准，不对其他语言版本负责。
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
}
</style>
