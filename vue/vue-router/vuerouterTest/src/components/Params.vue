<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>新闻ID：{{ $route.params.newsId}}</p>
    <p>新闻标题：{{ $route.params.newsTitle}}</p>
  </div>
</template>

<script>
export default {
  name: 'hi1',
  data () {
    return {
      msg: 'Welcome to Params'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
