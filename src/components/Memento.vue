<template>
<div class="memento-countdown">
  <slot :s="s" :m="m" :h="h" :d="d" :ss="ss" :mm="mm" :hh="hh" :dd="dd">{{h}} : {{m}} : {{s}}</slot>
</div>
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
      defaultFormat : '#h : #m : #s',
      d : '0',
      h : '0',
      m : '0',
      s : '0',
      dd : '00',
      hh : '00',
      mm : '00',
      ss : '00'
    }
  },
  methods: {
    updateTimer() {
      this.now = new Date()
    },
    manualUpdate() {

      this.now = new Date()
      if (!this.then || !this.now) {
        return[]
      }

      let diff,s,m,h,d,ss,mm,hh,dd
      try {
        diff = this.then.getTime() - this.now.getTime()
      } catch (e) {
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

      dd = ((''+d).length == 1) ? '0'+d : d
      hh = ((''+h).length == 1) ? '0'+h : h
      mm = ((''+m).length == 1) ? '0'+m : m
      ss = ((''+s).length == 1) ? '0'+s : s

      this.d = d;
      this.h = h;
      this.m = m;
      this.s = s;
      this.dd = dd;
      this.hh = hh;
      this.mm = mm;
      this.ss = ss;

      // return [d,h,m,s];
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
      let r = this.format

      if (d[0]) {
        this.d = d[0]
        this.h = d[1]
        this.m = d[2]
        this.s = d[3]

        r = r.replace(/#dd/g,this.dd)
        r = r.replace(/#hh/g,this.hh)
        r = r.replace(/#mm/g,this.mm)
        r = r.replace(/#ss/g,this.ss)
        r = r.replace(/#d/g,this.d)
        r = r.replace(/#h/g,this.h)
        r = r.replace(/#m/g,this.m)
        r = r.replace(/#s/g,this.s)
      }
      return r
    },
    useSlot() {
      let use = !!(this.$slots.default && this.$slots.default[0] && this.$slots.default[0].text)
      return use
    },
    format () {
      let f = this.f ? this.f : (this.useSlot ? this.$slots.default[0].text : this.defaultFormat);
      return f;
    },
    diff () {
      if (!this.then || !this.now) {
        return[]
      }

      let diff,s,m,h,d
      try {
        diff = this.then.getTime() - this.now.getTime()
      } catch (e) {
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

    },
    __d() {
      return this.diff[0]
    },
    __h() {
      return this.diff[1]
    },
    __m() {
      return this.diff[2]
    },
    __s() {
      return this.diff[3]
    },
    __dd() {
      if (this.diff && this.diff[0]) {
        return (''+this.diff[0].length == 1) ? '0'+this.diff[0] : this.diff[0]
      }
    },
    __hh() {
      if (this.diff && this.diff[1]) {
        return (''+this.diff[1].length == 1) ? '0'+this.diff[1] : this.diff[1]
      }
    },
    __mm() {
      if (this.diff && this.diff[2]) {
        return (''+this.diff[2].length == 1) ? '0'+this.diff[2] : this.diff[2]
      }
    },
    _ss() {
      if (this.diff && this.diff[3]) {
        return (''+this.diff[3].length == 1) ? '0'+this.diff[3] : this.diff[3]
      }
    }
  },
  mounted() {
    this.now = new Date();
    this.manualUpdate();
    setInterval( this.manualUpdate, 1000 );
  }
}
</script>

<style scoped>
  .memento-countdown {

  }
</style>
