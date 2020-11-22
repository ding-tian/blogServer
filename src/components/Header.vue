<template>
  <div class="site-header">
    <div class="site-header-wrap">
      <div class="site-header-inside">
        <div class="site-branding">
          <p class="profile">
            <!-- 头像 -->
            <router-link to="/index" @click.native="tabClass(0)">
              <img src="../assets/logo.jpg" alt="" />
            </router-link>
          </p>
          <!-- 姓名 -->
          <div class="site-identity">
            <h1>帅比</h1>
            <p>WEB DEVELOPER</p>
          </div>
          <!-- 导航列表 -->
          <div class="site-nav-inside">
            <ul class="menu">
              <li class="menu-item" v-for="(list, i) in lists" :key="i">
                <router-link
                  :class="{ 'meni-item-select': itemActive === i }"
                  @click.native="tabClass(i)"
                  :to="list.path"
                  >{{ list.title }}</router-link
                >
              </li>
            </ul>
          </div>
          <div class="wx">
            <img src="../assets/wx.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      // 导航列表
      lists: [
        { title: 'home', path: '/home' },
        { title: 'about', path: '/about' },
        { title: 'note', path: '/note' }
      ],
      // 激活标签
      itemActive: 0
    }
  },
  mounted() {
    // 获取激活标签的索引
    this.itemActive = +sessionStorage.getItem('itemActive') || 0
    this.lists.some((ele, index) => {
      if (window.location.pathname === '/' || window.location.pathname === '/index') {
        this.itemActive = 0
        return false
      }
      if (ele.path === window.location.pathname) {
        this.itemActive = index
      }
    })
  },
  methods: {
    tabClass(i) {
      // 设置当前激活的索引
      this.itemActive = i
      // 保存激活的索引
      sessionStorage.setItem('itemActive', i)
    }
  }
}
</script>

<style scoped lang="less">
.site-header {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  text-align: center;
  background-color: #1d1d1d;
  color: #fff;
  .profile img {
    width: 100px;
    height: 100px;
    border: 2px solid #d4a259;
    border-radius: 50%;
  }
  .site-identity {
    padding-bottom: 1.6em;
    h1 {
      margin: 10px 0;
      font-size: 30px;
    }
    p {
      font-size: 12px;
      color: rgb(102, 102, 102);
    }
  }
  .site-nav-inside {
    .menu {
      font-size: 0.8rem;
      color: #aaa;
      line-height: 1.5;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      border-bottom: 1px solid #333;
      .menu-item {
        border-top: 1px solid #333;
        padding: 0.5rem 0;
        a {
          color: #aaa;
          cursor: pointer;
          &:hover {
            color: #d4a259;
          }
        }
        .meni-item-select {
          color: #dea259 !important;
        }
      }
    }
  }

  .wx img {
    margin-top: 50px;
    width: 80%;
    height: 80%;
  }
}

@media only screen and (min-width: 1001px) {
  .site-header {
    width: 300px;
  }
  .site-header-inside {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 3.333333em;
    padding-top: 3.333333em;
  }
}
@media only screen and (max-width: 1001px) {
  .site-header {
    width: 30vw;
  }
  .site-header-inside {
    padding-bottom: 3.33333em;
    padding-top: 3.333333em;
  }
}
// @media only screen and (max-width: 800px) {
//   .site-header {
//     width: 100%;
//     height: 78px;
//   }
//   .profile img {
//     width: 50px;
//   }
//   .site-header-wrap {
//     position: relative;
//     height: 100%;
//     // overflow: auto;
//     // -webkit-overflow-scrolling: touch;
//   }
// }
</style>
