<template>
  <nav class="Navbar">
    <ul>
      <li>
        <router-link :to="{path: '/'}">
          Home
        </router-link>
      </li>
      <li>
        <router-link :to="{path: '/user/bob'}">
          Bob
        </router-link>
      </li>
      <li>
        <router-link :to="{path: '/user/miles'}">
          Miles
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.Navbar a {
   color: green;
}
</style>
