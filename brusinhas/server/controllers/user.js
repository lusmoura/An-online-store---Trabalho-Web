const User = require("../models/user");

const { SHA256 } = require("../utils");

// get all
const get = (req, res) => {
  User.find(req.query)
    .sort({ _id: -1 })
    .then((result) => {
      // obfuscate password hash
      result.forEach((user) => {
        user.password = undefined;
      });

      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// Get user by id
const getById = (req, res) => {
  const id = req.params.id;
  User.findOne({ id: id })
    .then((result) => {
      // obfuscate password hash
      result.password = undefined;
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// Create new user
const post = (req, res) => {
  const User = new User(req.body);

  // hash password
  User.password = SHA256(User.password);

  User.save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// overwrite
const put = (req, res) => {
  const id = req.params.id;
  User.findOne({ id: id })
    .then((User) => {
      // hash password
      User.password = SHA256(User.password);

      if (User !== null) {
        User.findOneAndDelete({ id: id }).then(() => {
          User(req.body).save();
          res.status(201).send(req.body);
        });
      } else {
        User(req.body).save();
        res.status(201).send(req.body);
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// remove by id
const remove = (req, res) => {
  const id = req.params.id;
  User.findOneAndDelete({ id: id }).then((User) => {
    if (User) {
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  });
};

module.exports = { get, getById, post, put, remove };
