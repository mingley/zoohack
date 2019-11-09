
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');

router.post('/login', auth.optional, (req, res, next) => {
  const { body: { user } } = req;

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if(err) {
      return next(err);
    }

    if(passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({ user: user.toAuthJSON() });
    }

    return status(400).info;
  })(req, res, next);
});
router.get('/current', auth.required, (req, res, next) => {
  const { payload: { id } } = req;

  return Users.findById(id)
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
        //GET current route (required, only authenticated users have access)
      }
    })
})
module.exports = router;