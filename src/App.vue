<template lang="pug">
#app
  .block.intro
    div
      h1 Memento
      .motto Simple VueJs countdown component
      .version 0.0.4

      .controls
      // <label>Format <input type="text" v-model="format"/></label>
        input(type="text" style="width: 20rem" size="20" v-model="time")

      memento.standard(:t="time")

  .block.docs
    h3 Installation

    p Install npm package with
    pre
      code > npm install @kailight/memento

    p Require memento in vue file
    pre
      code var Memento = require('@kailight/memento').default;</code></pre>
    p or
    pre
      code import Memento from '@kailight/memento';</code></pre>

    p Register component in global Vue instance or another component
    pre
      code
        | components: {
        |   'memento' : Memento,
        | // other components

    h3 Basic usage
    pre
      code
        | &lt;memento t="{{time}}"&gt;&lt;/memento&gt;
    memento(:t="time")

    h3 Advanced usage
    pre
      code
        | &lt;memento style="text-align: center" t="{{time}}"&gt;%dd days %hh hours %mm minutes and %ss seconds left&lt;/memento&gt;
    memento(style="text-align: center", :t="time") %dd days %hh hours %mm minutes and %ss seconds left

    p We can stylize output

    p
      | We can pass simple format string with entities we'd like to see.<br>
      | This way we have more control over entities
    p Possible entities:
    ul
      li
        b %s
        | - seconds
      li
        b %m
        | - minutes
      li
        b %h
        | - hours
      li
        b %d
        | - days
      li
        b %ss
        | - seconds with leading zeros
      li
        b %mm
        | - minutes with leading zeros
      li
        b %hh
        | - hours with leading zeros
      li
        b %dd
        | - days with leading zeros

    h3 Pro usage
    pre
      code
        | &lt;memento style="margin: 2rem auto; font-family: sans-serif; font-size: 1.6rem;" t="{{time}}"&gt;
        |   &lt;template slot-scope="m">
        |     &lt;span style="color: #336699">{{mmm}}&lt;/span> :
        |     &lt;span style="color: #996633">{{hhh}}&lt;/span> :
        |     &lt;span style="color: #993366">{{sss}}&lt;/span>
        |   &lt;/template>
        | &lt;/memento&gt;</code></pre>
    memento(style="margin: 2rem auto; font-family: sans-serif; font-size: 1.6rem; text-align: center", :t="time")
      template(slot-scope="m")
        span(style="color: #996633") {{m.hh}} :
        span(style="color: #336699") {{m.mm}} :
        span(style="color: #993366") {{m.ss}}

    p
      | We can pass custom template to memento using slots.<br>
      | In this case we have total control over how we display elements.<br>

    p Possible entities:
    ul
      li
        b s
        | - seconds
      li
        b m
        | - minutes
      li
        b h
        | - hours
      li
        b d
        | - days
      li
        b ss
        | - seconds with leading zeros
      li
        b mm
        | - minutes with leading zeros
      li
        b hh
        | - hours with leading zeros
      li
        b dd
        | - days with leading zeros
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

<style lang="stylus">
body
  padding 0
  margin 0

#app
  font-family: Arial, 'Avenir', Helvetica, Verdana, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
  font-size 0.9rem;

color1 = rgba(118,168,196,1)
color2 = rgba(0,128,128,1)
.block
  height auto
  min-height: 100vh
  &.intro
    text-align: center;
    display:flex;
    flex-direction row
    justify-content:center;
    color: #fff;
    // background: #333;

    background: -moz-radial-gradient(center, ellipse cover, color1 0%, color2 100%); /* ff3.6+ */
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, color1), color-stop(100%, color2)); /* safari4+,chrome */
    background:-webkit-radial-gradient(center, ellipse cover, color1 0%, color2 100%); /* safari5.1+,chrome10+ */
    background: -o-radial-gradient(center, ellipse cover, color1 0%, color2 100%); /* opera 11.10+ */
    background: -ms-radial-gradient(center, ellipse cover, color1 0%, color2 100%); /* ie10+ */
    background:radial-gradient(ellipse at center, color1 0%, color2 100%); /* w3c */
    >div
      flex auto
      flex-direction column
    h1
      color: #ffc;
  &.docs
    text-align: left;
    width: 800px;
    margin: auto;

h1
  font-family: Montserrat, sans-serif;
  font-size: 4rem;
  margin-bottom: 1rem;

h3
  font-family: Montserrat, sans-serif;
  font-size: 1.6rem;
  margin-bottom: 1rem;

.motto
  margin-bottom: 2rem;

.docs
  text-align: left;
  margin-top: 5rem;

.standard
  margin: 2rem auto;
  font-family: sans-serif;
  font-size: 1.6rem;

.controls
  margin-top: 0.5rem;
  input
    padding: 0 0.2rem;
    line-height: 1.6rem;
  label
    height: 2rem;
    line-height: 2rem;
    display: inline-block;
    vertical-align: text-bottom;

code
  padding: 0.5rem;
  font-family: monospace;
  border: 1px solid #9c9;
  text-align: left;
  white-space: pre-wrap;
  display: block;
  max-width: 100%;
  width: auto;
  margin: auto;

</style>
