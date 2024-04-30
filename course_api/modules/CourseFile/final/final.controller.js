'use strict';

const Coursefinal = require('./final.model');

exports.findAll = function (req, res) {
    Coursefinal.findAll(function (err, Coursefinal) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', Coursefinal);
    res.send(Coursefinal);
  });
};

exports.create = function (req, res) {
  console.log(req.files, "Coursefinal");

  const new_coursefinal = new Coursefinal(req.body);

  const finalquestion = (typeof req.files === 'undefined') ? '' : req.files[0].filename;
  const final_lowest = (typeof req.files === 'undefined') ? '' : req.files[1].filename;
  const final_average = (typeof req.files === 'undefined') ? '' : req.files[2].filename;
  const final_best = (typeof req.files === 'undefined') ? '' : req.files[3].filename;
  const final_result = (typeof req.files === 'undefined') ? '' : req.files[4].filename;


  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Coursefinal.create(new_coursefinal, finalquestion, final_lowest, final_average, final_best, final_result,
      function (err, Coursefinal) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Course File added successfully!", data: Coursefinal });
    });
  }
};

exports.findById = function (req, res) { 
    Coursefinal.findById(req.params.id, function (err, Coursefinal) {
    if (err)
      res.send(err);
    res.json(Coursefinal);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Coursefinal.update(req.params.id, new Coursefinal(req.body), function (err, Coursefinal) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Coursefile successfully updated' });
    });
  }
};

exports.delete = function (req, res) {
    Coursefinal.delete(req.params.id, function (err, Coursefinal) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Coursefile successfully deleted' });
  });
};

exports.Count = function (req, res) {
    Coursefinal.Count(function (err, Coursefinal) {
    if (err) res.send(err);
    res.send(Coursefinal);
  });
}; 