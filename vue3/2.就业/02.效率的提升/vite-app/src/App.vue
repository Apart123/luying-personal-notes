<script setup lang="ts">
const user = {
  name: "JIA",
  loginId: 132,
  loginPwd: "jia"
};
</script>

<template>
  <div class="menu-bar-container">
    <div class="logo">
      <h1>logo</h1>
    </div>
    <ul class="nav">
      <li><a href="">menu</a></li>
      <li><a href="">menu</a></li>
      <li><a href="">menu</a></li>
      <li><a href="">menu</a></li>
      <li><a href="">menu</a></li>
    </ul>
    <div class="user">
      <span>{{ user.name }}</span>
    </div>
  </div>
  <h1>Block Tree</h1>
  <form>
    <div>
      <label>账号：</label>
      <input v-model="user.loginId" />
    </div>
    <div>
      <label>密码：</label>
      <input v-model="user.loginPwd" />
    </div>
  </form>
</template>

<style scoped></style>
