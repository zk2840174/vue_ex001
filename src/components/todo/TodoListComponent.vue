<template>

  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <router-link :to="'/todo/'+todo.id">{{todo.id}}</router-link>
      {{todo.title}}
    </li>
  </ul>

</template>

<script setup>

import {getTodoList} from "@/apis/todoAPI";
import {onMounted, ref} from "vue";

const todos = ref([])

const fetchGetList = async () => {

  const data = await getTodoList()

  todos.value = data

}


onMounted(() => {
  fetchGetList()
})

</script>

<style scoped>

</style>
