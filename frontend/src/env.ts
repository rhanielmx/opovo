import { z } from "zod"

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  VITE_API_URL: z.string()
})

const _env = envSchema.safeParse(import.meta.env)

if (_env.success === false) {
  console.error('⚠️ Invalid environment variables', z.treeifyError(_env.error))

  throw new Error('Invalid environment variables.')
}

export const env = _env.data