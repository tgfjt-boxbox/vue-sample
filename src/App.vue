<template>
  <div id="app" class="Container" :class="routeClass">
    <h1>Hello Vue!</h1>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
module.exports = {
  name: 'app',
  computed: {
    routeClass() {
      return this.$route.path.split('/').filter(part => Boolean(part)).join('-');
    }
  },
  components: {
    navbar: require('./components/navbar.vue')
  }
}
</script>
<style>
.Container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 1200px) {
  .Container{ width: 1170px; }
}
@media (min-width: 992px) {
  .Container{ width: 970px; }
}
@media (min-width: 768px) {
  .Container{ width: 750px; }
}
</style>
