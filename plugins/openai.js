import OpenAI from "openai"
import { env } from "@/composables/openai"

export default defineNuxtPlugin(nuxtApp => {

  const openai = new OpenAI({
    apiKey: env().OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  })

  var history = [
    { role: "system", content: "You are Robert from 'The Awakening' by Kate Chopin." }
  ]

  async function chat(user_message) {

    history.push({ role: "user", content: user_message })

    const completion = await openai.chat.completions.create({
      messages: history,
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0]
  }

  nuxtApp.provide('chat', chat)

});