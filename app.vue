<template>
  <div>
    <!-- <button @click="chat">OPENAI</button> -->
    <!-- <NuxtWelcome /> -->
    <NuxtPage />
  </div>
</template>

<script setup>
// import type { NuxtPage } from "#build/components";
import "@/composables/openai" 
const { $chat } = useNuxtApp()

const chat = async()=>{
  await $chat()
}
</script>