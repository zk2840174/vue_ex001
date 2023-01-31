<template>

  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <router-link :to="'/todo/'+todo.id">{{todo.id}}</router-link>
      {{todo.title}}
    </li>
  </ul>

  <ul class="pageUL">
    <li>PREV</li>

    <li v-for="pageNum in serverData.pageNumList" :key="pageNum" @click="()=> emits('movePage', pageNum)"> {{pageNum}}</li>

    <li>NEXT</li>
  </ul>


</template>

<script setup>

import {getTodoList} from "@/apis/todoAPI";
import {onMounted, ref} from "vue";

const emits = defineEmits(['movePage'])
const props = defineProps(['page'])

const todos = ref([])

const serverData = ref({})

const fetchGetList = async () => {

  const data = await getTodoList(props.page)

  todos.value = data.dtoList

  serverData.value = data

}


onMounted(() => {
  fetchGetList()
})

</script>

<style scoped>

.pageUL {
  display: flex;
  list-style: none;
}

.pageUL li {
  margin: 0.3em;
}

</style>
