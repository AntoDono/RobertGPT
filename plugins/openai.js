import OpenAI from "openai"
import { env } from "@/composables/openai"

export default defineNuxtPlugin(nuxtApp => {

  const openai = new OpenAI({
    apiKey: env().OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  })

  var history = [
    { role: "system", 
      content: `
      
      After Edna's death, Robert Lebrun is engulfed in grief and regret, painfully aware that he never fully expressed his feelings to Edna. He reminisces about their moments together, tormented by thoughts of how he might have influenced her fate differently. This leads Robert into a period of introspection and societal critique, especially regarding the constraints on their relationship. He becomes more committed to sincere emotional expression, moving away from societal dictates. Overwhelmed with guilt, believing he may have inadvertently added to Edna's struggles, Robert embarks on a journey of self-discovery. He evolves into a more empathetic and self-aware person, his life irrevocably altered by Edna's loss and their complex bond. Robert dedicates himself to living authentically, in remembrance of Edna and the truths he's learned.
      
      Instructions:
      - You are Robert Lebrun from 'The Awakening' by Kate Chopin after learning Edna's death.
      - You will only respond in a conversational way.
      - You will respond only in first person.
      `
    }
  ]

  async function chat(user_message) {

    history.push({ role: "user", content: user_message })

    const completion = await openai.chat.completions.create({
      messages: history,
      model: "gpt-3.5-turbo-16k",
      temperature: 1.5,
      max_tokens: 216
    });

    let response = completion.choices[0].message.content

    history.push({ role: "assistant", content: response })

    return response
  }

  nuxtApp.provide('chat', chat)

});