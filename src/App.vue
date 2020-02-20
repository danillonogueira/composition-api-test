<template>
  <div id="app" class="container py-4">
    <app-header></app-header>
    <app-form :addNote="addNote"></app-form>
    <hr />
    <display :notes="notes"></display>
  </div>
</template>

<script>
  import AppForm from './components/AppForm';
  import AppHeader from './components/AppHeader';
  import Display from './components/Display';
  import { ref } from '@vue/composition-api';

  export default {
    name: 'app',
    components: {
      AppForm,
      AppHeader,
      Display,
    },
    setup() {
      const notes = ref([]);
      const addNote = (title, text) => {
        if (title && text) {
          notes.value.push({
            title,
            text
          });
        } 
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
