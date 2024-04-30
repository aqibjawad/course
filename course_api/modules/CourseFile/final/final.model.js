'use strict';
var dbConn = require('../../../config/db.config');
//ListingCategoSubry object create

var CourseFinal = function (coursefinal) {

    this.name = coursefinal.name;

    this.finalquestion = coursefinal.finalquestion;
    this.final_lowest = coursefinal.final_lowest;
    this.final_average = coursefinal.final_average;
    this.final_best = coursefinal.final_best;
    this.final_result = coursefinal.final_result;
    this.complete = coursefinal.complete;
};

CourseFinal.create = function (coursefinal, finalquestion, final_lowest, final_average,final_best, final_result, result) {
    dbConn.query("INSERT INTO final set name=?,finalquestion=?,  final_lowest=?, final_average=?, final_best=?, final_result=? ,complete=?",
    [ coursefinal.name, finalquestion, final_lowest,final_average, final_best, final_result,coursefile.complete ], function (err, res) {
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

CourseFinal.findById = function (id, result) {
  dbConn.query(`Select course.id,  course.courseid, course.coursename, department.department, semester.semester, session.session, department.id as dpt_id, semester.id as sem_id, session.id as sess_id from course
  inner join department on course.department = department.id
  inner join session on course.session = session.id
  inner join semester on course.semester = semester.id
  where course.id = ?`, id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};

CourseFinal.findAll = function (result) {
  dbConn.query(`Select course.id,  course.courseid, course.coursename, department.department, semester.semester, session.session, department.id as dpt_id, semester.id as sem_id, session.id as sess_id from course
  inner join department on course.department = department.id
  inner join session on course.session = session.id
  inner join semester on course.semester = semester.id `, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('listingcategory : ', res);
      result(null, res);
    }
  });
};

CourseFinal.update = function (id, coursefiles, result) {
  dbConn.query("UPDATE coursefile SET coursename=?, session=?, department=?, semester=?, teacher=?   WHERE id = ?",
    [ coursefiles.coursename,coursefiles.session, coursefiles.department, coursefiles.semester,coursefiles.teacher,id], function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

CourseFinal.delete = function (id, result) {
  dbConn.query("DELETE from coursefile  WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

CourseFinal.Count = function (result) {
  dbConn.query(
    `SELECT COUNT(id) as id FROM coursefile`,
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

module.exports = CourseFinal;
