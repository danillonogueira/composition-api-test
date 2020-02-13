<template>
  <div class="container py-4">
    <app-header></app-header>
    <app-form></app-form>
    <hr />
    <search-bar></search-bar>
    <display></display>
  </div>
</template>

<script>
  import AppForm from './../components/AppForm';
  import Display from './../components/Display';
  import SearchBar from './../components/SearchBar';
  import AppHeader from './../components/AppHeader';

  export default {
    components: {
      AppForm,
      AppHeader,
      Display,
      SearchBar,
    },
    setup() {

    } 
  }
</script>
