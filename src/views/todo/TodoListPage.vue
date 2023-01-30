<template>
  <SampleLayout>
    <h1>Todo List Page </h1>

    <button><router-link to="/todo/register">Register</router-link></button>

    <TodoListComponent></TodoListComponent>

  </SampleLayout>
</template>

<script>
import SampleLayout from "@/layouts/SampleLayout.vue";
import TodoListComponent from "@/components/todo/TodoListComponent.vue";

export default {
  name: "TodoListPage",
  components: {TodoListComponent, SampleLayout},

}
</script>

<style scoped>

</style>
