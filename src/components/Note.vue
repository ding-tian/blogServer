<template>
  <div>
    <div class="hero">
      <h2>
        笔记列表
      </h2>
    </div>
    <ul class="note_list">
      <li v-for="(note, index) in noteList" :key="index">
        <router-link class="note" :to="'article/' + note.name" :key="index">
          <p class="item_header" v-text="note.name"></p>
          <span class="ctime">{{ note.ctime | formatDate }}</span>
          <p v-html="note.content"></p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Note',
  data() {
    return {
      // 笔记列表
      noteList: []
    }
  },
  created() {
    // 请求笔记数据
    this.getNoteList()
  },
  methods: {
    // 请求笔记数据
    async getNoteList() {
      // 向后台请求数据
      const result = await this.$axios.get('/note/findNoteList')
      // 请求失败处理
      if (result.status !== 200) return console.log('获取数据失败')
      // 将数据赋值给noteList
      this.noteList = result.data
      console.log(this.noteList)
    }
  },
  filters: {
    // 处理时间的
    formatDate(date) {
      const newDate = new Date(date)
      console.dir(newDate)
      const year = newDate.getFullYear()
      const month = newDate.getMonth()
      const day = newDate.getDate()
      const hour = newDate.getHours()
      const minute = newDate.getMinutes()
      const second = newDate.getSeconds()
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`
    }
  }
}
</script>

<style scoped lang="less">
.hero::after {
  content: '';
  display: block;
  background-color: #d4a259;
  margin-top: 1.66667em;
  height: 1px;
  width: 60px;
}
.note_list {
  padding-top: 30px;
  li {
    position: relative;
    border-left: 1px solid #a1a1a1;
    border-bottom: 1px solid#a1a1a1;
    border-right: 1px solid #a1a1a1;
    height: 126px;
    &:nth-child(1) {
      border-top: 1px solid #a1a1a1;
    }
    &:hover {
      background-color: #2d87db;
      .note {
        color: #fff;
        padding-left: 100px;
      }
    }
    .note {
      display: block;
      width: 100%;
      height: 100%;
      padding-left: 30px;
      -moz-transition: padding-left 0.5s;
      -webkit-transition: padding-left 0.5s;
      -ms-transition: padding-left 0.5s;
      -o-transition: padding-left 0.5s;
      transition: padding-left 0.5s;
      .item_header {
        padding-top: 1em;
        margin-bottom: 10px;
      }
      .ctime {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
}
</style>
