<template>
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-lg-12">
        <form>
          <div class="form-group">
            <label>Title</label>
            <input 
              v-model="form.title" 
              type="text" 
              class="form-control" 
            />
            <small class="form-text text-muted">Every good note gotta have a big nice title, aye?</small>
          </div>
          <div class="form-group">
            <label>Note</label>
            <textarea 
              v-model="form.text" 
              class="form-control" 
              rows="4"
            ></textarea>
            <small class="form-text text-muted">Every good note gotta have the note itself, ammmk?!</small>
          </div>
          <button 
            class="btn btn-primary"
            @click.prevent="addNote(form.title, form.text)" 
          >
            JOT DOWN
          </button>
          <button
            class="btn btn-danger mx-2"
            @click.prevent="$emit('wipe')"
          >
            WIPE
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive } from '@vue/composition-api';

  export default {
    name: 'app-form',
    props: {
      addNote: {
        type: Function,
        required: true
      }
    },
    setup() {
      /** @constant {Object} form Envelops models of the form inputs */
      const form = reactive({
        /** @property {String} title Model for the title input */
        title: '',

        /** @property {String} title Model for the text input */
        text: ''
      });

      return { form };
    }
  }
</script>
