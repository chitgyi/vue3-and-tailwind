<template>
  <ul class="shadow-lg p-5">
    <router-link to="/" id="router-link"><li>HOME</li></router-link>
    <router-link to="/posts" id="router-link"><li>POSTS</li></router-link>
    <li>CONTACT</li>
  </ul>
</template>

<script>
export default {};
</script>

<style  scoped>
#router-link {
  text-decoration: none;
}

li {
  display: inline;
  margin: 0 1rem;
  cursor: pointer;
}
</style>