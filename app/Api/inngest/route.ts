import {serve} from "inngest/next"
import {inngest} from "@/components/inngest/client"
import { sendDailyNewsSummary, sendSignUpEmail } from "@/components/inngest/function"

export const {GET,POST,PUT}=serve({
    client:inngest,
    functions:[sendSignUpEmail,sendDailyNewsSummary],
    
})