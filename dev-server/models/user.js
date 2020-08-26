import mongoose from 'mongoose'
import { StringUtil } from '../utilities/string-util'
import bcrypt from 'bcrypt'

const SALT = process.env.BCRYPT_ROUNDS

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.set('timestamps', true)

userSchema.virtual('fullname').get(() => {
    const firstname = StringUtil.capitalize(this.firstname.toLowerCase())
    const lastname = StringUtil.capitalize(this.lastname.toLowerCase())
    return `${firstname} ${lastname}`
})

userSchema.statics.passwordMatches = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}

userSchema.pre('save', function(next) {
    this.email = this.email.toLowerCase()
    this.firstname = this.firstname.toLowerCase()
    this.lastname = this.lastname.toLowerCase()

    if(this.isModified('password')) {
        const unsafePassword = this.password
        const salt = bcrypt.genSaltSync(SALT)
        this.password = bcrypt.hashSync(unsafePassword, salt)
        
    }else {
        next()
    }

    next()
})

export default mongoose.model('user', userSchema)