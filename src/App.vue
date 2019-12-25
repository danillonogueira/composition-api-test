<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './views/Home';

export default {
  name: 'app',
  components: {
    'home': Home
  }
}
</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.css';
</style>
