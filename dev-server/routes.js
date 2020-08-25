import moduleRoutes from './api/module/module-routes'
import authRoutes from './api/auth/auth-routes'
import userRoutes from './api/user/user-routes'

export function registerRoutes(app) {
    app.use('/api', moduleRoutes)
    app.use('/api', authRoutes)
    app.use('/api', userRoutes)
}