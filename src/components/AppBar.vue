<template>
  <ul>
    <router-link to="/" id="router-link"><li>HOME</li></router-link>
    <router-link to="/posts" id="router-link"><li>POSTS</li></router-link>
    <li>CONTACT</li>
  </ul>
</template>

<script>
export default {};
</script>

<style  scoped>
ul {
  margin: 0;
  align-items: center;
  background-color: green;
  text-align: left;
  padding: 1rem;
  border-radius: 5px;
}

#router-link {
  text-decoration: none;
}

li {
  display: inline;
  margin: 0 1rem;
  color: white;
  cursor: pointer;
}
</style>