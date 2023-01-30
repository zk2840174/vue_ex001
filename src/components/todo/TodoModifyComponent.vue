<template>

  <div>

    <div>
      {{todo.id}}

    </div>

    <div>
      <input type="text" :value="todo.title">

    </div>

    <div>
      <v-text-field
        label="Title"
        :value="todo.title"
      ></v-text-field>
    </div>

    <div>
      <v-btn>MODIFY</v-btn>
      <v-btn>DELETE</v-btn>
    </div>

  </div>


  <v-dialog
    v-model="dialog"
    activator="parent"
  >
    <v-card>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="() => handleClose()">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script setup>


import {onMounted, ref} from "vue";
import {getTodo} from "@/apis/todoAPI";

const todo = ref({})

const dialog = ref(false)

const props = defineProps(['id'])

const emits = defineEmits(['moveList','moveFromError'])

const fetchGetTodo = async () => {

  try {
    todo.value = await getTodo(props.id)
  }catch(err){
    console.log(err)
    alert("ERROR")
    emits('moveFromError')
  }

}

const handleClickMod = () => {

  dialog.value = true

}

const handleClickDel = () => {

  dialog.value = true

}


const handleClose = () => {
  dialog.value = false
  emits('moveList')
}



onMounted(() => {

  fetchGetTodo()

})



</script>

<style scoped>

</style>
