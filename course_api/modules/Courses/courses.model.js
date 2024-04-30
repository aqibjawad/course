'use strict';
var dbConn = require('../../config/db.config');
//ListingCategoSubry object create

var Course = function (courses) {
  this.courseid = courses.courseid;
  this.coursename = courses.coursename;
  this.department = courses.department;
  this.teacher = courses.teacher;
  this.session = courses.session;
  this.semester = courses.semester;
  this.created_at = new Date();
  
};
Course.create = function (courses, result) {
  dbConn.query("INSERT INTO course set coursename=?, courseid=?, department=?,  teacher=?,session=?,semester=?",
    [courses.coursename,courses.courseid, courses.department, courses.teacher,courses.session,courses.semester], function (err, res) {
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

Course.findById = function (id, result) {
  dbConn.query(`Select course.id,  course.courseid, course.coursename, department.department, semester.semester, session.session, 
  department.id as dpt_id, semester.id as sem_id, session.id as sess_id from course
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

Course.findAll = function (result) {
  dbConn.query(`Select course.id,  course.courseid,  course.coursename, department.department, semester.semester, session.session, department.id as dpt_id, semester.id as sem_id, session.id as sess_id from course
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

Course.update = function (id, courses, result) {
  dbConn.query("UPDATE course SET coursename=?, courseid=?, department=?,  teacher=? ,session=?,semester=? WHERE id = ?",
    [courses.coursename,courses.courseid, courses.department, courses.teacher,courses.session,courses.semester,id], function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

Course.delete = function (id, result) {
  dbConn.query("DELETE from course  WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Course.Count = function (result) {
  dbConn.query(
    `SELECT COUNT(id) as id FROM course`,
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

module.exports = Course;
