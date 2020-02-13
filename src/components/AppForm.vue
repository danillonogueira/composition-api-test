<template>
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-lg-12">
        <form>
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" />
            <small class="form-text text-muted">Every good note gotta have a big nice title, aye?</small>
          </div>
          <div class="form-group">
            <label>Note</label>
            <textarea class="form-control" rows="4"></textarea>
            <small class="form-text text-muted">Every good note gotta have the note itself, ammmk?!</small>
          </div>
          <button @click.prevent="" class="btn btn-primary">JOT DOWN!</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-form'
  }
</script>

