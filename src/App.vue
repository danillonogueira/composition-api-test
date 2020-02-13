<template>
  <div id="app" class="container py-4">
    <app-header></app-header>
    <app-form :addNote="addNote"></app-form>
    <hr />
    <search-bar></search-bar>
    <display :notesArr="notes"></display>
  </div>
</template>

<script>
  import AppForm from './components/AppForm';
  import AppHeader from './components/AppHeader';
  import Display from './components/Display';
  import SearchBar from './components/SearchBar';
  import { ref } from '@vue/composition-api';

  export default {
    name: 'app',
    components: {
      AppForm,
      AppHeader,
      Display,
      SearchBar
    },
    setup() {
      const notes = ref([]);
      const addNote = (obj) => {
        notes.value.push(obj);
      };

      return { 
        notes, 
        addNote 
      };
    }
  }
</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.css';
</style>
