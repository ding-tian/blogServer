<template>
  <div id="app">
    <Header />
    <router-view name="main" class="site-content"></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style scoped>
.site-content {
  padding-left: 3vw;
  padding-right: 3vw;
  max-width: 1080px;
  margin-left: 300px;
  padding-bottom: 3.333333em;
  padding-top: 3.333333em;
}
/* @media only screen and (min-width: 901px) {
  .site-content {
    margin-left: 300px;
    padding-bottom: 3.333333em;
    padding-top: 3.333333em;
  }
} */
@media only screen and (max-width: 900px) {
  .site-content {
    margin-left: 30vw;
    padding-bottom: 3.3333em;
    padding-top: 3.3333em;
  }
}
</style>
