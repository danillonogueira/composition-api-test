<template>
  <div class="container-fluid p-0">
    <hr />
    <div class="row">
      <card 
        v-for="(note, index) in notes" 
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
      notes: {
        type: Array,
        required: true
      }
    }
  }
</script>
