import OpenAI from "openai"
import { env } from "@/composables/openai"

export default defineNuxtPlugin(nuxtApp => {

    const openai = new OpenAI({apiKey: env().OPENAI_API_KEY, dangerouslyAllowBrowser: true})

	async function chat() {
        const completion = await openai.chat.completions.create({
          messages: [
            { role: "system", content: "You are Robert from 'The Awakening' by Kate Chopin." },
            { role: "user", content: "Tell me about yourself." }
          ],
          model: "gpt-3.5-turbo",
        });
      
        console.log(completion.choices[0]);
        return completion.choices[0]
    }

    nuxtApp.provide('chat', chat)
    
});