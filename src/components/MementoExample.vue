<template>
  <div class="memento-example">{{countdown}}</div>
</template>

<script>
export default {
  name: 'MementoExample',
  data () {
    return {
      msg: 'Memento/'
    }
  },
  computed: {
    countdown () {
      return 'test'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .memento-countdown {
    font-size: 2rem;
    margin-top: 1rem;
  }
</style>
