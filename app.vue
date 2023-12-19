<template>
  <div>
    <button @click="chat">OPENAI</button>
    <NuxtWelcome />
  </div>
</template>

<script setup>
import "@/composables/openai" 
const { $chat } = useNuxtApp()

const chat = async()=>{
  await $chat()
}
</script>