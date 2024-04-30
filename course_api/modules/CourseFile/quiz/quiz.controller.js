'use strict';

const Coursequiz = require('./quiz.model');

exports.findAll = function (req, res) {
    Coursequiz.findAll(function (err, Coursequiz) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', Coursequiz);
    res.send(Coursequiz);
  });
};

exports.create = function (req, res) {
  console.log(req.files, "Coursequiz");

  const new_coursequiz = new Coursequiz(req.body);

  const quizquestion = (typeof req.files === 'undefined') ? '' : req.files[0].filename;
  const quiz_lowest = (typeof req.files === 'undefined') ? '' : req.files[1].filename;
  const quiz_average = (typeof req.files === 'undefined') ? '' : req.files[2].filename;
  const quiz_best = (typeof req.files === 'undefined') ? '' : req.files[3].filename;
  const quiz_result = (typeof req.files === 'undefined') ? '' : req.files[4].filename;


  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Coursequiz.create(new_coursequiz, quizquestion, quiz_lowest, quiz_average, quiz_best, quiz_result,
      function (err, Coursequiz) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Course File added successfully!", data: Coursequiz });
    });
  }
};

exports.findById = function (req, res) { 
    Coursequiz.findById(req.params.id, function (err, Coursequiz) {
    if (err)
      res.send(err);
    res.json(Coursequiz);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Coursequiz.update(req.params.id, new Coursequiz(req.body), function (err, Coursequiz) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Coursefile successfully updated' });
    });
  }
};

exports.delete = function (req, res) {
    Coursequiz.delete(req.params.id, function (err, Coursequiz) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Coursefile successfully deleted' });
  });
};

exports.Count = function (req, res) {
    Coursequiz.Count(function (err, Coursequiz) {
    if (err) res.send(err);
    res.send(Coursequiz);
  });
}; 