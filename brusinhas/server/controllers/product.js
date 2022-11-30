const Product = require("../models/product");

// Get all
const get = (req, res) => {
  Product.find(req.query)
    .sort({ _id: -1 })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// Get by id
const getById = (req, res) => {
  const id = req.params.id;
  Product.findOne({ id: id })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// Create
const post = (req, res) => {
  const Product = new Product(req.body);
  Product.save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// Update
const put = (req, res) => {
  const id = req.params.id;
  Product.find({ id: id })
    .then((Product) => {
      if (Product !== null) {
        Product.findOneAndDelete({ id: id }).then(() => {
          Product(req.body).save();
          res.status(201).send(req.body);
        });
      } else {
        Product(req.body).save();
        res.status(201).send(req.body);
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// Delete by id if exists
const remove = (req, res) => {
  const id = req.params.id;
  Product.findOneAndDelete({ id: id }).then((Product) => {
    if (Product) {
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  });
};

module.exports = { get, getById, post, put, remove };
