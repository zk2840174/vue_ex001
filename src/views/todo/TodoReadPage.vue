<template>
  <SampleLayout>
    <h1>Todo Read Page {{id}}</h1>

    <TodoReadComponent :id="id"></TodoReadComponent>

    <button> <router-link :to="'/todo/modify/'+ id"> Mod/Del </router-link></button>

  </SampleLayout>
</template>

<script setup>
import SampleLayout from "@/layouts/SampleLayout.vue";
import {useRoute} from "vue-router";
import TodoReadComponent from "@/components/todo/TodoReadComponent.vue";

const route = useRoute()

const {id} = route.params


</script>

<style scoped>

</style>
