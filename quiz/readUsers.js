const express = require('express')
const router = express.Router();

router.get('/usernames', (req, res) => {
  let usernames = req.users.map(function(user) {
    return {id: user.id, username: user.username};
  });
  res.send(usernames);
})

router.get('/username/:name', (req, res) => {
  let name = req.params.name;
  let users_with_name = req.users.filter(function(user) {
    return user.username === name;
  });
  if (users_with_name.length > 0) {
    res.json(users_with_name);
  } else {
    res.status(404).send('User Not Found!');
  }
});

module.exports = router;
