<template>
  <div class="container-fluid p-0">
    <div class="row">
      <card 
        v-for="(note, index) in notes" 
        :key="index + 1"
        v-on:remove="remove(index)"
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
    },
    methods: {
      /**
       * @description Remove a card.
       * @param {Number} index Index of the card in the cards array.
       * NOTE: modifying props is considered an anti-pattern in Vue.
       * As this is a tiny project with learning purposes only, 
       * that's the justification for this procedure.
       */
      remove(index) {
        this.notes.splice(index, 1);
      }
    }
  }
</script>
