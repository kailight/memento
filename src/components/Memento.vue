<template>
<div class="memento-countdown">{{result}}</div>
</template>

<script>
var info = console.info
function getDate() { return new Date() }

export default {
  name: 'Memento',
  props: ['t','f'],
  data () {
    return {
      now : '',
    }
  },
  methods: {
    updateTimer() {
      this.now = new Date()
      // console.info(this.res)
    }
  },
  computed: {
    countdown () {
      return 'test'
    },
    then () {
      return new Date(this.t)
    },
    result () {
      let d = this.diff
      // console.info(d)
      let r = this.format
      if (d) {
        r = r.replace(/#dd/g,(''+d[0]).length == 2 ? d[0] : '0'+d[0])
        r = r.replace(/#hh/g,(''+d[1]).length == 2 ? d[1] : '0'+d[1])
        r = r.replace(/#mm/g,(''+d[2]).length == 2 ? d[2] : '0'+d[2])
        r = r.replace(/#ss/g,(''+d[3]).length == 2 ? d[3] : '0'+d[3])
        r = r.replace(/#d/g,d[0])
        r = r.replace(/#h/g,d[1])
        r = r.replace(/#m/g,d[2])
        r = r.replace(/#s/g,d[3])
      }
      return r
    },
    format () {
      return this.f ? this.f : (this.$slots.default[0].text ? this.$slots.default[0].text : '#h : #m : #s');
    },
    diff () {
      if (!this.then || !this.now) {
        return[]
      }

      let diff,s,m,h,d
      try {
        // console.info(this.then, this.now)
        diff = this.then.getTime() - this.now.getTime()
      } catch (e) {
        // console.info('bad date')
        return
      }

      diff = Math.floor(diff / 1000)
      if (diff < 0) {
        return [0,0,0,0];
      }

      d = Math.floor( diff / 60 / 60 / 24 )
      h = Math.floor( diff / 60 / 60 )
      m = Math.floor( diff / 60 )
      s = Math.floor( diff )

      if (d > 0) {
        h = h - d * 24;
        m = m - d * 24 * 60;
        s = s - d * 24 * 60 * 60;
      }
      if (h > 0) {
        m = m - h * 60;
        s = s - h * 60 * 60;
      }
      if (m > 0) {
        s = s - m * 60;
      }

      if (s >= 60) {
        s = s - 60;
        m++;
      }
      if (m >= 60) {
        m = 0;
        h++;
      }
      if (h >= 24) {
        h = 0;
        d++;
      }
      return [d,h,m,s];

    }
  },
  mounted() {
    this.now = new Date();
    this.updateTimer();
    setInterval( this.updateTimer, 1000 );
  }
}
</script>

<style scoped>
  .memento-countdown {

  }
</style>
