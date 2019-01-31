<template>
  <div id="app">
    <ui-button>Default</ui-button>
    <ui-button :mods="{ rounded: true }">Rounded</ui-button>
    <ui-button :mods="{ color: 'red' }" disabled>Red</ui-button>
    <ui-button :mods="{ color: 'blue' }">Blue</ui-button>
    <ui-button :mods="{ size: 'small' }">Small</ui-button>
    <ui-button :mods="{ size: 'small', color: 'red' }">Small red</ui-button>
    <ui-button :mods="{ rounded: true, size: 'small', color: 'blue' }">Small blue</ui-button>
    <ui-button :mods="{ size: 'large' }">Large</ui-button>
    <ui-button :mods="{ size: 'large', color: 'red' }">Large red</ui-button>
    <ui-button :mods="{ size: 'large', color: 'blue' }">Large blue</ui-button>
  </div>
</template>

<script>
import UiButton from '@/components/UiButton.vue'

export default {
  name: 'app',
  components: {
    UiButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
