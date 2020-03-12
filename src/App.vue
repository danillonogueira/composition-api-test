<template>
  <div id="app" class="container py-4">
    <app-header></app-header>
    <app-form 
      :addNote="addNote"
      v-on:wipe="wipe()"
    ></app-form>
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
      /** @constant {Array} notes Array of notes */
      const notes = ref([]);

      /**
       * @description Adds a note.
       * @param {String} title Title of the note.
       * @param {String} text Text of the note.
       */
      const addNote = (title, text) => {
        if (title && text) {
          notes.value.push({
            title,
            text
          });
        } 
      };

      /**
       * @description Removes all existing notes.
       */
      const wipe = () => {
        notes.value = [];
      }

      return { 
        notes, 
        addNote,
        wipe 
      };
    }
  }
</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.css';
</style>
