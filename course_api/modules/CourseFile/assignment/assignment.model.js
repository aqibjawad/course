'use strict';
var dbConn = require('../../../config/db.config');
//ListingCategoSubry object create

var CourseAssignment = function (courseassignment) {

    this.name = courseassignment.name;

    this.assignmentquestion = courseassignment.assignmentquestion;
    this.assignment_lowest = courseassignment.assignment_lowest;
    this.assignment_average = courseassignment.assignment_average;
    this.assignment_best = courseassignment.assignment_best;
    this.assignment_result = courseassignment.assignment_result;
};

CourseAssignment.create = function (courseassignment, assignmentquestion, assignment_lowest, assignment_average,assignment_best, assignment_result, result) {
    dbConn.query("INSERT INTO assignment set name=?,assignmentquestion=?,  assignment_lowest=?, assignment_average=?, assignment_best=?, assignment_result=? ",
    [ courseassignment.name, assignmentquestion, assignment_lowest,assignment_average, assignment_best, assignment_result ], function (err, res) {
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

CourseAssignment.findById = function (id, result) {
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

CourseAssignment.findAll = function (result) {
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

CourseAssignment.update = function (id, coursefiles, result) {
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

CourseAssignment.delete = function (id, result) {
  dbConn.query("DELETE from coursefile  WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

CourseAssignment.Count = function (result) {
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

module.exports = CourseAssignment;
