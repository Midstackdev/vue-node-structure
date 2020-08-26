import User from '../../models/user'

export default function register(req, res) {
    const user = new User(req.body)

  user.save()
  .then((user) => {
    return res.status(200).json({ success:true, data: user});
  })
  .catch(error => {
    if(error.code === 11000) {
        return res.status(403).json({ errors: 'Email is already taken.'})
    }
    console.log(error)
    return res.status(400).json({ success:false, errors: error});
  })
}