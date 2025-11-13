import { z } from 'zod'
import dotenv from 'dotenv'

// Cargar variables de entorno
dotenv.config()

// Schema de validación para las variables de entorno
const envSchema = z.object({
  PORT: z.string().default(process.env.PORT || '8000').transform(Number),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  JWT_SECRET: z.string().default('your-super-secret-key-minimum-32-chars-long'),
  CORS_ORIGIN: z.string().default('http://localhost:3000'),
  FRONTEND_URL: z.string().default('http://localhost:3000'),
  DATABASE_URL: z.string(),
  GOOGLE_CLIENT_ID: z.string({
    required_error: 'GOOGLE_CLIENT_ID es requerido para la autenticación de Google',
  }),
  GOOGLE_CLIENT_SECRET: z.string({
    required_error: 'GOOGLE_CLIENT_SECRET es requerido para la autenticación de Google',
  }),
  GOOGLE_CALLBACK_URL: z.string().default('http://localhost:8000/auth/google/callback'),
})

// Validar y exportar la configuración
const envValidation = envSchema.safeParse(process.env)

if (!envValidation.success) {
  console.error('❌ Invalid environment variables:', envValidation.error.format())
  throw new Error('Invalid environment variables')
}

export const config = envValidation.data