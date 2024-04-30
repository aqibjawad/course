'use strict';

const Courseassignment = require('./assignment.model');

exports.findAll = function (req, res) {
    Courseassignment.findAll(function (err, Courseassignment) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', Courseassignment);
    res.send(Courseassignment);
  });
};

exports.create = function (req, res) {
  console.log(req.files, "Courseassignment");

  const new_courseassignment = new Courseassignment(req.body);

  const assignmentquestion = (typeof req.files === 'undefined') ? '' : req.files[0].filename;
  const assignment_lowest = (typeof req.files === 'undefined') ? '' : req.files[1].filename;
  const assignment_average = (typeof req.files === 'undefined') ? '' : req.files[2].filename;
  const assignment_best = (typeof req.files === 'undefined') ? '' : req.files[3].filename;
  const assignment_result = (typeof req.files === 'undefined') ? '' : req.files[4].filename;


  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Courseassignment.create(new_courseassignment, assignmentquestion, assignment_lowest, assignment_average, assignment_best, assignment_result,
      function (err, Courseassignment) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Course File added successfully!", data: Courseassignment });
    });
  }
};

exports.findById = function (req, res) { 
    Courseassignment.findById(req.params.id, function (err, Courseassignment) {
    if (err)
      res.send(err);
    res.json(Courseassignment);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Courseassignment.update(req.params.id, new Courseassignment(req.body), function (err, Courseassignment) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Coursefile successfully updated' });
    });
  }
};

exports.delete = function (req, res) {
    Courseassignment.delete(req.params.id, function (err, Courseassignment) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Coursefile successfully deleted' });
  });
};

exports.Count = function (req, res) {
    Courseassignment.Count(function (err, Courseassignment) {
    if (err) res.send(err);
    res.send(Courseassignment);
  });
}; 