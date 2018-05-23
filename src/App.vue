<template>
  <div id="app">
    <h2>Memento</h2>
    <div class="motto">Easy to use VueJs countdown component</div>

    <div class="controls">
      <!-- <label>Format <input type="text" v-model="format"/></label> -->
      <input type="text" style="width: 20rem" size="20" v-model="time"/>
    </div>

    <memento style="margin: 2rem auto; font-family: sans-serif; font-size: 1.6rem;" :t="time"></memento>

    <div class="docs">
      <h3>Installation</h3>
      <p>Install npm package with</p>
      <pre><code>> npm install @kailight/memento</code></pre>
      <p>Require memento in vue file</p>
      <pre><code>var Memento = require('@kailight/memento').default;</code></pre>
      <p>or</p>
      <pre><code>import Memento from '@kailight/memento';</code></pre>
      <p>Register component in global Vue instance or another component</p>
      <pre><code>components: {
  'memento' : Memento,
  // other components
},</code></pre>
      <h3>Basic usage</h3>
      <div>
        <pre><code>&lt;memento t="{{time}}"&gt;&lt;/memento&gt;</code></pre>
      </div>
      <memento :t="time"></memento>

      <h3>Advanced usage</h3>
      <pre><code>&lt;memento style="margin: 2rem auto; font-family: sans-serif; font-size: 1.6rem;" t="{{time}}"&gt;
&lt;template slot-scope="m">
  &lt;span style="color: #336699">{{mmm}}&lt;/span> :
  &lt;span style="color: #996633">{{hhh}}&lt;/span> :
  &lt;span style="color: #993366">{{sss}}&lt;/span>
&lt;/template>
&lt;/memento&gt;</code></pre>
    </div>
    <memento style="margin: 2rem auto; font-family: sans-serif; font-size: 1.6rem;" :t="time">
      <template slot-scope="m">
        <span style="color: #996633">{{m.hh}}</span> :
        <span style="color: #336699">{{m.mm}}</span> :
        <span style="color: #993366">{{m.ss}}</span>
      </template>
    </memento>
    <div style="text-align: left">
      <p>
        We can pass custom template to memento using slots.
        In this case we have more control over display and entities
      </p>
      <p>The entities are:</p>
      <ul>
        <li><b>s</b> - seconds</li>
        <li><b>m</b> - minutes</li>
        <li><b>h</b> - hours</li>
        <li><b>d</b> - days</li>
        <li><b>ss</b> - seconds with leading zero</li>
        <li><b>mm</b> - minutes with leading zero</li>
        <li><b>hh</b> - hours with leading zero</li>
        <li><b>dd</b> - days with leading zero</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Memento from './components/Memento'
// import Memento from '@kailight/memento'

export default {
  name: 'App',
  components: {
    'memento' : Memento,
  },
  data() {
    return {
      format: "Its #h hours #m minutes #s seconds to MEMENTO",
      time: "2018-12-31 23:59:59 GMT+3",
      hhh : '{{m.hh}}',
      mmm : '{{m.mm}}',
      sss : '{{m.ss}}'
    }
  }
}
</script>

<style>

#app {
  font-family: Arial, 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 800px;
  max-width: 100%;
  margin: 6rem auto;
}

h2 {
  font-family: Montserrat, sans-serif;
  font-size: 3rem;
  margin-bottom: 1rem;
}

.motto {
  margin-bottom: 2rem;
}

.docs {
  text-align: left;
  margin-top: 5rem;
}

.controls {
  margin-top: 0.5rem;
}

.controls input {
  padding: 0 0.2rem;
  line-height: 1.6rem;
}

.controls label {
  height: 2rem;
  line-height: 2rem;
  display: inline-block;
  vertical-align: text-bottom;
}

code {
  padding: 0.5rem;
  font-family: monospace;
  border: 1px solid #9c9;
  text-align: left;
  white-space: pre;
  display: block;
  max-width: 100%;
  width: auto;
  margin: auto;
}

</style>
