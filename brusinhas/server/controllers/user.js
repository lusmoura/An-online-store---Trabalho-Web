const User = require("../models/user");

var bcrypt = require("bcryptjs");

// get all
const getAll = (req, res) => {
  User.find({})
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

const getByEmail = (req, res) => {
  User.findOne({ email: req.params.email })
    .then((result) => {
      if (result) {
        result.password = undefined;
        res.status(200).send(result);
      } else {
        res.status(404).send();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(400).send(err);
    });
};

// login
const login = (req, res) => {
  const email = req.params.email;
  User.findOne({ email: email })
    .then((result) => {
      if (!result) {
        res.status(404).send();
        return;
      }

      // obfuscate password hash
      const pwd = req.body.password;

      if (pwd) {
        if (bcrypt.compareSync(pwd, result.password)) {
          result.password = undefined;
          res.status(200).send(result);
        } else {
          res.status(403).send();
        }
      } else {
        res.status(403).send();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(400).send(err);
    });
};

// Create new user
const post = (req, res) => {
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 4),
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    isAdmin: false,
  });

  // hash password
  user
    .save()
    .then((result) => {
      res.status(202).send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).send(err);
    });
};

// overwrite
const put = (req, res) => {
  const email = req.params.email;
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 4);
  }

  User.findOneAndReplace({ email: email }, req.body)
    .then((newProduct) => {
      if (newProduct !== null) {
        res.status(202).send(newProduct);
      } else {
        res.status(404).send();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(400).send(err);
    });
};

// remove by id
const remove = (req, res) => {
  const email = req.params.email;
  User.findOneAndDelete({ email: email }).then((User) => {
    if (User) {
      res.status(202).send();
    } else {
      res.status(404).send();
    }
  });
};

module.exports = { getAll, getByEmail, login, post, put, remove };
