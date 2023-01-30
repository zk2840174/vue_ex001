<template>
  <h2>Todo Read Component</h2>
  <h3>{{id}}</h3>

  {{todo}}

</template>

<script setup>

import {onMounted, ref} from "vue";
import {getTodo} from "@/apis/todoAPI";

const todo = ref({})

const props = defineProps(['id'])

const fetchGetTodo = async () => {

  todo.value = await getTodo(props.id)

}


onMounted(() => {

  fetchGetTodo()

})



</script>

<style scoped>

</style>
