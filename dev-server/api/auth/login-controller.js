import User from '../../models/user'
import { generateJWT } from '../../services/auth'

export default function login(req, res) {
    User.findOne({'email': req.body.email})
      .then(user => {
        if(!user) return res.status(404).json({ success:false, errors: { message: 'User email doesn\'t exist.' }})

        const passwordMatch = User.passwordMatches(req.body.password, user.password)
        if(!passwordMatch) {
           return res.status(401).json({ success:false, errors: { message: 'Password is incorrect.' }})
        }
        const token = generateJWT(user)

        res.status(200).json({ success:true, data: {user: User.showData(user), token}})
    })
}