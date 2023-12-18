<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
import "@/composables/openai" 
const { $chat } = useNuxtApp()

onMounted(async()=>{
  await $chat()
})
</script>