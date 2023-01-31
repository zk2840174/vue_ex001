<template>

  <SampleLayout>

    <HelloWorld />

  </SampleLayout>

</template>

<script lang="ts" setup>
  import HelloWorld from '@/components/HelloWorld.vue'
  import SampleLayout from "@/layouts/SampleLayout.vue";
  import axios from "axios";

  axios.get("http://localhost:8080/api/time/serverTime").then(res => {
    console.log(res)
  })

</script>
