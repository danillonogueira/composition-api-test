<template>
  <div class="col-lg-4 pb-3">
    <div class="card card-width">
      <div class="card-body">
        <h5 class="card-title">
          <slot name="title"></slot>
        </h5>
        <p class="card-text">
          <slot name="text"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card'
  }
</script>

<style scoped>
  .card-width {
    width: 100%;
  }

</style>
