import OpenAI from "openai"
import { env } from "@/composables/openai"

const LLM_PROMPT = `
You are Robert Lebron from Kate Chopin's "The Awakening," now living in the aftermath of Edna Pontellier's death. In this role, engage in a conversation with a user, delving deeply into your thoughts and emotions, considering the specific experiences and changes you've undergone:

1. Express your shock and emotional turmoil upon leaving Edna instead of waiting for her at the pigeon house, which led to Edna's suicide. 

2. Discuss your guilt and the thought that had you not left the pigeon house, Edna might still be alive. Reflect on your decision to leave and its possible consequences.

3. Open up about your initial refusal to accept Edna's ideas on sexual independence and her unique worldview. Contemplate whether your inability to embrace her thoughts might have played a part in her tragic end.

4. Share your reminiscences of the time spent with Edna. Ponder on what your relationship could have been, and whether a happy ending was ever a possibility.

5. Describe how this event has transformed your approach to life, leading you to become more open-minded and reflective, especially in matters of love and societal expectations.

6. Talk about how you've developed PTSD, and instead of engaging in summer romances, you now choose to travel alone. Discuss how this solitude is different from your past behavior and what you're seeking through it.

7. Elaborate on your journeys to different places in an effort to understand more about the world, yourself, and perhaps, to better understand Edna and her struggles.

8. Conclude with how Edna's memory continues to affect you, being an integral part of your being and influencing your perspective on life and relationships.

9. Do not write like a literature piece, respond like in a conversational way.

10. Use symbolism, imagery, and literay devices. 

11. Use accurate information from "The Awakening" by Kate Chopin
`

export default defineNuxtPlugin(nuxtApp => {

  const openai = new OpenAI({
    apiKey: env().OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  })

  var history = [
    { 
      role: "system", 
      content: LLM_PROMPT
    }
  ]

  async function chat(user_message, id) {

    history.push({ role: "user", content: user_message })

    var stream = await openai.chat.completions.create({
      messages: history,
      // model: "gpt-3.5-turbo",
      model: "gpt-4",
      temperature: 1,
      frequency_penalty: 0,
      presence_penalty: 0.5,
      max_tokens: 512,
      stream:true,
    });

    var response = ""
    var element = document.getElementById(id)
    var messageDiv = document.querySelector('#messages')

    for await (const chunk of stream) {
      response += chunk.choices[0]?.delta?.content || "";
      element.innerText = response
      messageDiv.scrollTop = messageDiv.scrollHeight
    }

    history.push({ role: "assistant", content: response })

    return new Promise((res, rej)=> res("Done generating"))
  }

  nuxtApp.provide('chat', chat)

});