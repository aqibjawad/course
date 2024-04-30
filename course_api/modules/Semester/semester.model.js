'use strict';
var dbConn = require('../../config/db.config');
//ListingCategoSubry object create

var Semester = function (semesters) {
  this.department = semesters.department;
  this.session = semesters.session;
  this.semester = semesters.semester;
};
Semester.create = function (semesters, result) {
  dbConn.query("INSERT INTO semester set department=?, session=?, semester=?",
    [semesters.department, semesters.session, semesters.semester], function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      }
      else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });
};

Semester.findById = function (id, result) {
  dbConn.query(`Select semester.id, department.department, semester.semester, session.session, department.id as dpt_id, session.id as sessid from semester
  inner join department on semester.department = department.id
  inner join session on semester.session = session.id
  where session.id = ?`, id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};


Semester.findAll = function (result) {
  dbConn.query(`Select semester.id, department.department, semester.semester, session.session, department.id as dpt_id from semester
  inner join department on semester.department = department.id
  inner join session on semester.session = session.id`, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('session : ', res);
      result(null, res);
    }
  });
};

Semester.update = function (id, semesters, result) {
  dbConn.query("UPDATE semester SET department=?, session=?, semester=?, WHERE id = ?",
    [semesters.department, semesters.session,semesters.semester,id], function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

Semester.delete = function (id, result) {
  dbConn.query("DELETE from semester  WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Semester.Count = function (result) {
  dbConn.query(
    `SELECT COUNT(id) as id FROM semester`,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    }
  );
};

module.exports = Semester;
