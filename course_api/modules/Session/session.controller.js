'use strict';
const Session = require('./session.model');

exports.findAll = function (req, res) {
  Session.findAll(function (err, Session) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', Session);
    res.send(Session);
  });
};

exports.create = function (req, res) {
  const new_Session = new Session(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Session.create(new_Session, function (err, Session) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Session added successfully!", data: Session });
    });
  }
};

exports.findById = function (req, res) {
    Session.findById(req.params.id, function (err, Session) {
    if (err)
      res.send(err);
    res.json(Session);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Session.update(req.params.id, new Session(req.body), function (err, Session) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Session successfully updated' });
    });
  }
};

exports.delete = function (req, res) {
    Session.delete(req.params.id, function (err, Session) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Session successfully deleted' });
  });
};

exports.Count = function (req, res) {
    Session.Count(function (err, Session) {
    if (err) res.send(err);
    res.send(Session);
  });
}; 