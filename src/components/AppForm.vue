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
            @click.prevent="addNote(form.title, form.text)" 
            class="btn btn-primary"
          >
            JOT DOWN
          </button>
          <button
            @click.prevent="$emit('wipe')"
            class="btn btn-danger mx-2"
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
      const form = reactive({
        title: '',
        text: ''
      });

      return { form };
    }
  }
</script>
