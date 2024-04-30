'use strict';
var dbConn = require('../../../config/db.config');
//ListingCategoSubry object create

var CourseMid = function (coursemid) {

    this.name = coursemid.name;

    this.midquestion = coursemid.midquestion;
    this.mid_lowest = coursemid.mid_lowest;
    this.mid_average = coursemid.mid_average;
    this.mid_best = coursemid.mid_best;
    this.mid_result = coursemid.mid_result;
};

CourseMid.create = function (coursemid, midquestion, mid_lowest, mid_average,mid_best, mid_result, result) {
    dbConn.query("INSERT INTO mid set name=?,midquestion=?,  mid_lowest=?, mid_average=?, mid_best=?, mid_result=? ",
    [ coursemid.name, midquestion, mid_lowest,mid_average, mid_best, mid_result ], function (err, res) {
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

CourseMid.findById = function (id, result) {
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

CourseMid.findAll = function (result) {
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

CourseMid.update = function (id, coursefiles, result) {
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

CourseMid.delete = function (id, result) {
  dbConn.query("DELETE from coursefile  WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

CourseMid.Count = function (result) {
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

module.exports = CourseMid;
