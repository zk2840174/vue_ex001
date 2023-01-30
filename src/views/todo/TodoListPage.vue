<template>
  <SampleLayout>
    <h1>Todo List Page </h1>

    <button><router-link to="/todo/register">Register</router-link></button>

    <ul>
      <il v-for="todo in todos" :key="todo.id">
        <router-link :to="'/todo/'+ todo.id">{{todo.title}}</router-link>
      </il>
    </ul>

  </SampleLayout>
</template>

<script>
import SampleLayout from "@/layouts/SampleLayout.vue";

export default {
  name: "TodoListPage",
  components: {SampleLayout},
  data () {
    return {
      todos: [
        {
          id:1,
          title: 'AAAAA'
        },
        {
          id:2,
          title: 'BBBBB'
        },
        {
          id:3,
          title: 'CCCCC'
        },
      ],

    }
  }
}
</script>

<style scoped>

</style>
