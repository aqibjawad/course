'use strict';

const Coursemid = require('./mid.model');

exports.findAll = function (req, res) {
    Coursemid.findAll(function (err, Coursemid) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', Coursemid);
    res.send(Coursemid);
  });
};

exports.create = function (req, res) {
  console.log(req.files, "Coursemid");

  const new_coursemid = new Coursemid(req.body);

  const midquestion = (typeof req.files === 'undefined') ? '' : req.files[0].filename;
  const mid_lowest = (typeof req.files === 'undefined') ? '' : req.files[1].filename;
  const mid_average = (typeof req.files === 'undefined') ? '' : req.files[2].filename;
  const mid_best = (typeof req.files === 'undefined') ? '' : req.files[3].filename;
  const mid_result = (typeof req.files === 'undefined') ? '' : req.files[4].filename;


  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Coursemid.create(new_coursemid, midquestion, mid_lowest, mid_average, mid_best, mid_result,
      function (err, Coursemid) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Course File added successfully!", data: Coursemid });
    });
  }
};

exports.findById = function (req, res) { 
    Coursemid.findById(req.params.id, function (err, Coursemid) {
    if (err)
      res.send(err);
    res.json(Coursemid);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Coursemid.update(req.params.id, new Coursemid(req.body), function (err, Coursemid) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Coursefile successfully updated' });
    });
  }
};

exports.delete = function (req, res) {
    Coursemid.delete(req.params.id, function (err, Coursemid) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Coursefile successfully deleted' });
  });
};

exports.Count = function (req, res) {
    Coursemid.Count(function (err, Coursemid) {
    if (err) res.send(err);
    res.send(Coursemid);
  });
}; 