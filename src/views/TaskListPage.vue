<script setup lang="ts">
import TaskList from "@/components/TaskList.vue";
</script>

<template>
  <div class="wrapper">
    <h2>TODO LIST</h2>
    <TaskList />
  </div>
</template>

<style scoped>
.wrapper {
  margin: 20px;
  width: 90%;
  min-height: 500px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  max-height: 500px;
  overflow: scroll;
  color: cadetblue;
}

h2 {
  text-align: center;
}
</style>
