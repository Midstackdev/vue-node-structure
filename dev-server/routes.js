import moduleRoutes from './api/module/module-routes'
import authRoutes from './api/auth/auth-routes'

export function registerRoutes(app) {
    app.use('/api', moduleRoutes)
    app.use('/api', authRoutes)
}