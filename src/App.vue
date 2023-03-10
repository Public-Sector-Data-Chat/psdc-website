<script setup>
import TheNavbar from './components/TheNavBar.vue'
</script>

<template>
<body class="flex flex-col h-screen">
  <TheNavbar></TheNavbar>
  <router-view></router-view>
</body>
</template>