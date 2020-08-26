import User from '../../models/user'

export default function login(req, res) {
    User.findOne({'email': req.body.email})
      .then(user => {
        if(!user) return res.status(404).json({ success:false, errors: { message: 'User email doesn\'t exist.' }})

        const passwordMatch = User.passwordMatches(req.body.password, user.password)
        if(!passwordMatch) {
           return res.status(400).json({ success:false, errors: { message: 'Password is incorrect.' }})
        }

        res.status(200).json({ success:true, data: user})
    })
}