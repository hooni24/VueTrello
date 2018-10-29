<template>
  <div>
    Card
    <div v-if="loading">loading card ...</div>
    <div v-else>
      <div>cid: {{ cid }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cid: 0,
      loading: false
    }
  },
  watch: {
    // 감시자에 handler와 immediate속성을 통해 라우터 변경에 따라 바로 실행할 수 있다.
    // 기존에 있던 created훅에서 실행하던 구문의 중복을 제거할 수 있다. (여기서는 created된다는 말은 route됐다는 말이니..)
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  methods: {
    fetchData() {
      this.loading = true
      setTimeout(() => {
        this.cid = this.$route.params.cid
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style>

</style>
