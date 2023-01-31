<template>
  <SampleLayout>
    <h1>Todo List Page </h1>

    <button><router-link to="/todo/register">Register</router-link></button>

    <TodoListComponent @movePage="movePage" :page="page" :key="componentKey"></TodoListComponent>

  </SampleLayout>
</template>

<script setup>
import SampleLayout from "@/layouts/SampleLayout.vue";
import TodoListComponent from "@/components/todo/TodoListComponent.vue";
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter()

const page = ref(1)

const componentKey = ref(1)

const movePage = (pageNum) => {

  page.value = pageNum

  router.push(`/todo/list?page=${pageNum}`)

  componentKey.value++

}

router.beforeEach((to,from) => {
  console.log(to)
  console.log(from)

  page.value = to.query.page
  componentKey.value++
})

</script>

<style scoped>

</style>
