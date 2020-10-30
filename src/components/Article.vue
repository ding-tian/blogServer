<template>
  <div>
    <!-- 后台传递的文章数据 -->
    <div v-html="article"></div>
    <!-- 上一章与下一章切换 -->
    <div class="flip">
      <div class="pageup" @click="toggle('up')">上一章</div>
      <div class="pagedown" @click="toggle('down')">下一章</div>
    </div>
    <!-- 返回顶部按钮 -->
    <div class="fixed-btn" v-show="btnShow">
      <div class="block-sidebar-item iconfont" @click="scrollTop" title="返回顶部">&#xe695;</div>
    </div>
    <!-- 顶部进度条 -->
    <div class="progress-indicator" :style="{ width: width }"></div>
  </div>
</template>

<script>
// 引入markdown主题
import hljs from 'highlight.js'
import 'highlight.js/styles/srcery.css'
export default {
  name: 'Artivle',
  data() {
    return {
      // 文章数据
      article: '',
      // 顶部进度条宽度
      width: '0%',
      // 笔记列表
      noteList: []
    }
  },
  computed: {
    // 计算页面是否在顶部
    btnShow() {
      return !(this.width === '0%')
    }
  },
  mounted() {
    // 调用获取文章的方法
    this.getArticle()
    // 注册滚动事件
    window.addEventListener('scroll', this.handleScroll, true)
    // 请求笔记数据
    this.getNoteList()
  },
  destroyed() {
    // 离开该页面需要移除这个监听的事件，不然会报错
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 获取文章内容
    async getArticle() {
      // 获取传递的文章名
      const { id } = this.$route.params
      // 获取文章内容
      const { data } = await this.$axios.get('/note/getNoteByName/' + id)
      // 将获取的文章内容赋值给this
      this.article = data
      //   一旦完成界面更新, 立即调用
      this.$nextTick(() => {
        // 获取页面dom元素
        const blocks = document.querySelectorAll('pre code')
        blocks.forEach((block) => {
          // 让dom元素使用上markdown主题
          hljs.highlightBlock(block)
        })
      })
    },
    // 滚动触发的事件
    handleScroll() {
      // 页面的高度
      const scrollHeight = document.documentElement.scrollHeight
      // 页面滚动的距离
      const scrollTop = document.documentElement.scrollTop
      // 可视高度
      const clientHeight = document.documentElement.clientHeight
      // 滚动条距离底部的总距离
      const scroll = scrollHeight - clientHeight
      // 滚动条的高度
      const scrollBottom = scroll - (scrollHeight - scrollTop - clientHeight)
      // 导航条距离底部距离的百分比,赋值给this
      this.width = Math.ceil((scrollBottom / scroll) * 100) + '%'
    },
    // 返回顶部
    scrollTop() {
      let timer = -1
      let scrollTo = document.documentElement.scrollTop || document.body.scrollTop
      if (timer === -1) {
        timer = setInterval(() => {
          scrollTo -= 100
          if (scrollTo <= 0) {
            scrollTo = 0
            window.clearInterval(timer)
            timer = -1
          }
          window.scrollTo(0, scrollTo)
        }, 10)
      }
    },
    // 请求笔记数据
    async getNoteList() {
      // 向后台请求数据
      const result = await this.$axios.get('/note/findNoteList')
      // 请求失败处理-
      if (result.status !== 200) return console.log('获取数据失败')
      // 将数据赋值给noteList
      this.noteList = result.data
      console.log(this.noteList)
    },
    // 上一章
    toggle(count) {
      const { id } = this.$route.params
      const index = this.noteList.findIndex((note) => note.name === id)
      let note
      if (count === 'up') {
        if (index === 0) return
        note = this.noteList[index - 1].name
      } else {
        if (index === this.noteList.length) return
        note = this.noteList[index + 1].name
      }

      console.log(note)
      // this.$router.push(note)
      window.location = note
    }
  }
}
</script>

<style lang="less" scoped>
// 上一章下一章
.flip {
  position: fixed;
  height: 20px;
  width: 100%;
  bottom: 10px;
  font-size: 10px;
  text-align: center;
  .pageup,
  .pagedown {
    height: 20px;
    width: 70px;
    display: inline-block;
    border-radius: 5px;
    background-color: #aaa;
    text-align: center;
    line-height: 20px;
    color: #fff;
    &:hover {
      background-color: #444;
      cursor: pointer;
    }
  }
  .pageup {
    margin-right: 5px;
  }
  .pagedown {
    margin-left: 5px;
  }
}
@media only screen and (min-width: 40rem) {
  .flip {
    margin-left: 445px;
    width: 150px;
  }
}
// 顶部进度条
.progress-indicator {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background-color: #0a74da;
}
// 返回顶部按钮
.fixed-btn {
  position: fixed;
  // display: none;
  left: 50%;
  margin-left: 600px;
  bottom: 200px;
  width: 60px;
  z-index: 99;
  .block-sidebar-item {
    display: inline-block;
    background-color: #0006;
    border-radius: 50%;
    width: 50px;
    font-size: 30px;
    color: rgba(204, 204, 204, 0.5);
    text-align: center;
    line-height: 50px;
    margin-bottom: 20px;
    cursor: pointer;
    display: block;
    &:hover {
      color: #fff;
      background-color: #666;
    }
  }
}
@media (max-width: 1330px) {
  .fixed-btn {
    left: inherit;
    right: 2%;
    margin-left: 0;
  }
}
</style>
