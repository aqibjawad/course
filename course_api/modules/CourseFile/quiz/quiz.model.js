'use strict';
var dbConn = require('../../../config/db.config');
//ListingCategoSubry object create

var CourseQuiz = function (coursequiz) {

    this.name = coursequiz.name;

    this.quizquestion = coursequiz.quizquestion;
    this.quiz_lowest = coursequiz.quiz_lowest;
    this.quiz_average = coursequiz.v_average;
    this.quiz_best = coursequiz.quiz_best;
    this.quiz_result = coursequiz.quiz_result;
};

CourseQuiz.create = function (coursequiz, quizquestion, quiz_lowest, quiz_average,quiz_best, quiz_result, result) {
    dbConn.query("INSERT INTO quiz set name=?,quizquestion=?,  quiz_lowest=?, quiz_average=?, quiz_best=?, quiz_result=? ",
    [ coursequiz.name, quizquestion, quiz_lowest,quiz_average, quiz_best, quiz_result ], function (err, res) {
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

CourseQuiz.findById = function (id, result) {
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

CourseQuiz.findAll = function (result) {
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

CourseQuiz.update = function (id, coursefiles, result) {
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

CourseQuiz.delete = function (id, result) {
  dbConn.query("DELETE from coursefile  WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

CourseQuiz.Count = function (result) {
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

module.exports = CourseQuiz;
