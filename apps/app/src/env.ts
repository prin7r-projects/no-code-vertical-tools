import { z } from "zod";

export const serverEnvValidationSchema = z.object({
  DATABASE_URL: z.string().url(),
  NOWPAYMENTS_API_KEY: z.string().optional(),
  NOWPAYMENTS_IPN_SECRET: z.string().optional(),
  POSTMARK_SERVER_TOKEN: z.string().optional(),
  TURNSTILE_SECRET: z.string().optional(),
  SLACK_WEBHOOK_URL: z.string().url().optional(),
  B2_KEY_ID: z.string().optional(),
  B2_APP_KEY: z.string().optional(),
  B2_BUCKET_NAME: z.string().optional(),
});
