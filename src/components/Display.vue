<template>
  <div class="container-fluid p-0">
    <hr />
    <div class="row">
      <card 
        v-for="(note, index) in notesArr" 
        :key="index + 1"
      >
        <template v-slot:title>{{ note.title }}</template>
        <template v-slot:text>{{ note.text }}</template>
      </card>
    </div>
  </div>
</template>

<script>
  import Card from './../components/Card';

  export default {
    name: 'display',
    components: {
      Card
    },
    props: {
      notesArr: {
        type: Array,
        required: true
      }
    }
  }
</script>