<template>

  <SampleLayout>
  <h1>Todo Modify Page </h1>

  <TodoModifyComponent :id="id" @moveList="moveListAfterDialog" @moveFromError="moveFromError"></TodoModifyComponent>

  </SampleLayout>

</template>

<script setup>

import {useRoute, useRouter} from "vue-router";
import TodoModifyComponent from "@/components/todo/TodoModifyComponent.vue";
import SampleLayout from "@/layouts/SampleLayout.vue";
import {onErrorCaptured} from "vue";

const route = useRoute()

const {id} = route.params

const router = useRouter()


const moveListAfterDialog = () => {

  router.push('/todo/list')

}

const moveFromError =() => {

  router.push("/")
}



</script>

<style scoped>

</style>
