<template>
  <div id="app">
    <h2>Memento</h2>
    <div class="motto">Easy to use VueJs countdown component</div>

    <div class="controls">
      <label>Format <input type="text" v-model="format"/></label> <label>Time <input type="text" v-model="time"/></label>
    </div>
    <div>
      <pre><code>&lt;memento :t="time"&gt;
  {{format}}
&lt;/memento&gt;</code></pre>
    </div>
    <memento style="margin: 2rem auto; font-family: sans-serif; font-size: 1.6rem;" :t="time" :f="format">
      {{format}}
    </memento>
    <div class="docs">
      <h3>Installation</h3>
      <p>Install npm package with</p>
      <pre><code>> npm i memento</code></pre>
      <p>Require memento in vue file</p>
      <pre><code>require('memento');</code></pre>
      <p>or</p>
      <pre><code>import Memento from 'memento';</code></pre>
      <p>Register component in global Vue instance or another component</p>
      <pre><code>components: {
  'memento' : Memento,
  // other components
},</code></pre>
      <h3>Basic usage</h3>
      <p>Basic usage takes only</p>
      <pre><code>&lt;memento :t="time"&gt;format&lt;/memento&gt;</code></pre>
      <p>Format entries are:</p>
      <ul>
        <li><b>#s</b> - seconds</li>
        <li><b>#m</b> - minutes</li>
        <li><b>#h</b> - hours</li>
        <li><b>#d</b> - days</li>
        <li><b>#ss</b> - seconds with leading zero</li>
        <li><b>#mm</b> - minutes with leading zero</li>
        <li><b>#hh</b> - hours with leading zero</li>
        <li><b>#dd</b> - days with leading zero</li>
      </ul>
      <p><i>Note:</i>If countdown is larger than one hour</p>

      <h3>Advanced usage</h3>
      <p>If you would like to change format on the fly add :f="format" attribute, like this</p>
      <pre><code>&lt;memento :t="time" :f="format"&gt;&lt;/memento&gt;</code></pre>

      <h3>Master usage</h3>
      <p>I decided not to track slot changes and disabled html content other than basic text.</p>
      <p>As this would lead to more advanced coding and break the simplicity.</p>
      <p>Possibly in future as option will enable</p>
      <pre><code>&lt;memento&gt;&lt;h1&gt;#h&lt;/h1&gt;&lt;/memento&gt;</code></pre>
    </div>
  </div>
</template>

<script>
import Memento from './components/Memento'

export default {
  name: 'App',
  components: {
    'memento' : Memento,
  },
  data() {
    return {
      format: "#h hours #m minutes #s seconds to MEMENTO",
      time: "2018-12-31 23:59:59 GMT+3"
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
  margin-top: 3rem;
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
