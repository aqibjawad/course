'use strict';
const Semester = require('./semester.model');

exports.findAll = function (req, res) {
  Semester.findAll(function (err,Semester) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', Semester);
    res.send(Semester);
  });
};

exports.create = function (req, res) {
  const new_Semester = new Semester(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Semester.create(new_Semester, function (err, Semester) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Semester added successfully!", data: Semester });
    });
  }
};

exports.findById = function (req, res) {
    Semester.findById(req.params.id, function (err, Semester) {
    if (err)
      res.send(err);
    res.json(Semester);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Semester.update(req.params.id, new Semester(req.body), function (err, Semester) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Semester successfully updated' });
    });
  }
};

exports.delete = function (req, res) {
    Semester.delete(req.params.id, function (err, Semester) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Semester successfully deleted' });
  });
};

exports.Count = function (req, res) {
    Semester.Count(function (err, Semester) {
    if (err) res.send(err);
    res.send(Semester);
  });
}; 