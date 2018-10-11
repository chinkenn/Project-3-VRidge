const db = require("../models");

// Defining methods for the foodsController
module.exports = {
  findAll: function(req, res) {
    db.Food
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUser: function(req, res) {
    db.Food
      .find({user: req.params.user})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Food
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Food
      .findOneAndUpdate({_id: req.params.id}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Food
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUserGrocery: function(req, res) {
    db.Food
      .find({user: req.params.user, isFridge: false, isTrash: false})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUserFridge: function(req, res) {
    db.Food
      .find({user: req.params.user, isFridge: true, isTrash: false})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
