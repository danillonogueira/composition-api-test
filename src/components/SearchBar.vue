<template>
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-12">
        <h6 class="text-info">Look it up!</h6>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">
              <img class="search-icon" src="./../assets/search-icon.svg" alt="search-icon">
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search-bar',
    setup() {
      
    }
  }
</script>

<style scoped>
  .search-icon {
    width: 16px;
    height: 16px;
  }

</style>
