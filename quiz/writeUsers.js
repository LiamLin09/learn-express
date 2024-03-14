const express = require('express')
const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');
const router = express.Router()

router.post('/user', (req, res) => {
  const new_user = req.body;

  fs.readFile(path.resolve(__dirname, '../data/users.json'), (err, data) => {
    if (err) {
      return res.status(500).jason({error: 'Error reading user data'});
    }

    let users = JASON.parse(data);
    users.push(newUser);

    fs.writeFile(path.resolve(__dirname, '../data/users.json'), JSON, stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({error: 'Error writing user data'});
      }
      res.status(201).json({message: 'User added successfully'});
    });
  });
});
