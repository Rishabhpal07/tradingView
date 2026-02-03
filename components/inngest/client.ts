import {gemini, Inngest} from "inngest"

export const inngest=new Inngest({
    id:'stockView',
    ai:{
        gemini:{apiKey:process.env.GEMINI_API_KEY}
    }
})