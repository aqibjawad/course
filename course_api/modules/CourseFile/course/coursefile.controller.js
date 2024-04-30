'use strict';
const Coursefile = require('./coursefile.model');

exports.findAll = function (req, res) {
  Coursefile.findAll(function (err, Coursefile) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', Coursefile);
    res.send(Coursefile);
  });
};

exports.create = function (req, res) {
  console.log(req.files, "coursefile");

  const new_coursefile = new Coursefile(req.body);

  const courseoutline = (typeof req.files === 'undefined') ? '' : req.files[0].filename;
  const attendence = (typeof req.files === 'undefined') ? '' : req.files[1].filename;


  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Coursefile.create(new_coursefile, courseoutline, attendence,
      function (err, Coursefile) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Course File added successfully!", data: Coursefile });
    });
  }
};

exports.findById = function (req, res) { 
    Coursefile.findById(req.params.id, function (err, Coursefile) {
    if (err)
      res.send(err);
    res.json(Coursefile);
  });
};

exports.findComplete = function (req, res) { 
  Coursefile.findComplete(req.params.id, function (err, Coursefile) {
  if (err)
    res.send(err);
  res.json(Coursefile);
});
};

exports.findCurrent = function (req, res) { 
  Coursefile.findByCurrent(req.params.id, function (err, Coursefile) {
  if (err)
    res.send(err);
  res.json(Coursefile);
});
};

exports.findOld = function (req, res) { 
  Coursefile.findByOld(req.params.id, function (err, Coursefile) {
  if (err)
    res.send(err);
  res.json(Coursefile);
});
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Coursefile.update(req.params.id, new Coursefile(req.body), function (err, Coursefile) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Coursefile successfully updated' });
    });
  }
};

exports.delete = function (req, res) {
    Coursefile.delete(req.params.id, function (err, Coursefile) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Coursefile successfully deleted' });
  });
};

exports.Count = function (req, res) {
    Coursefile.Count(function (err, Coursefile) {
    if (err) res.send(err);
    res.send(Coursefile);
  });
}; 