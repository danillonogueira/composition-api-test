<template>
  <div class="col-lg-4 pb-3">
    <div class="card card-width">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="card-title m-0">
          <slot name="title"></slot>
        </h5>
        <img 
          src="./../assets/x.svg" 
          alt="close icon"
          @click="$emit('remove')"
          class="icon"
        />
      </div>
      <div class="card-body">
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

  .icon {
    cursor: pointer;
  }
</style>
