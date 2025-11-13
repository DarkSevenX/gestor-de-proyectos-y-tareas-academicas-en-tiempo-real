import express, { Request, Response, NextFunction, RequestHandler } from 'express'
import path from 'path'
import showRequests from './middleware/showRequest'
import cors from 'cors'
import passport from './service/googleAuthService'
import cookieParser from 'cookie-parser'
import { config } from './config/config'
import authRouter from './routes/authRoutes'
import userRoutes from './routes/userRoutes'
import projectRoutes from './routes/projectRoutes'
import taskRoutes from './routes/taskRoutes'
import chatRoutes from './routes/chatRoutes'
import notificationRoutes from './routes/notificationRoutes'
import reportRoutes from './routes/reportRoutes'
import reminderRoutes from './routes/reminderRoutes'
import submissionRoutes from './routes/submissionRoutes'
import examRoutes from './routes/examRoutes'
import googleRoutes from './routes/googleRoutes'
import profileRoutes from './routes/profileRoutes'
import adminRoutes from './routes/adminRoutes'
import chatbotRoutes from './routes/chatbotRoutes'
import activityLogRoutes from './routes/activityLogRoutes'
import dashboardRoutes from './routes/dashboardRoutes'
import dotenf from 'dotenv'
dotenf.config()

const app = express()
const port = process.env.PORT || 8000

// Middleware de seguridad básico
app.use(express.json({ limit: '10mb' }))
// Servir archivos estáticos desde la carpeta 'public' (ruta para assets y páginas públicas)
app.use(express.static(path.join(process.cwd(), 'public')))
// Analizar cookies para facilitar autenticación basada en cookie
app.use(cookieParser())
// También mantener la raíz del proyecto estática para compatibilidad con archivos existentes
app.use(express.static(process.cwd()))
app.use(showRequests)

// Configuración CORS más segura
app.use(cors({
  origin: config.CORS_ORIGIN,
  // Exponer headers necesarios para descargas con nombre de archivo
  exposedHeaders: ['token', 'Content-Disposition'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'token']
}))

// Middleware de seguridad adicional
const securityMiddleware: RequestHandler = (req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('X-XSS-Protection', '1; mode=block')
  next()
}

app.use(securityMiddleware)

// Inicializar Passport
app.use(passport.initialize())

const homeHandler: RequestHandler = (_req, res) => {
  res.sendFile(path.join(process.cwd(), 'client.html'))
}

const pingHandler: RequestHandler = (_req, res) => {
  res.send({ message: 'pong' })
}

app.get('/', homeHandler)
app.get('/ping', pingHandler)

// Página pública para completar perfil
app.get('/profile-setup', (_req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'profile-setup.html'))
})

app.use('/auth', authRouter)
app.use('/users', userRoutes)
app.use('/projects', projectRoutes)
app.use('/tasks', taskRoutes)
app.use('/api/chat', chatRoutes)
app.use('/notifications', notificationRoutes)
app.use('/reports', reportRoutes)
app.use('/reminders', reminderRoutes)
app.use('/submissions', submissionRoutes)
app.use('/exams', examRoutes)
app.use('/google', googleRoutes)
app.use('/profile', profileRoutes)
app.use('/admin', adminRoutes)
app.use('/chatbot', chatbotRoutes)
app.use('/activity-logs', activityLogRoutes)
app.use('/dashboard', dashboardRoutes)

//TODO: añadir validaciones con zod (listo)

export { app, port }
