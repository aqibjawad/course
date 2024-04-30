'use strict';
var dbConn = require('../../../config/db.config');
//ListingCategoSubry object create

var Coursefile = function (coursefiles) {
  this.name = coursefiles.name;
  this.session = coursefiles.session;
  this.coursename = coursefiles.coursename;
  this.department = coursefiles.department;
  this.semester = coursefiles.semester;
  this.teacher = coursefiles.teacher;

  this.courseoutline = coursefiles.courseoutline;
  this.attendence = coursefiles.attendence;
};

Coursefile.create = function (coursefiles, courseoutline, attendence, result) {
  dbConn.query("INSERT INTO coursefile set name=?, coursename=?, session=?, department=?, semester=?, teacher=?, courseoutline=?, attendence=?",
    [coursefiles.name, coursefiles.coursename, coursefiles.session, coursefiles.department, coursefiles.semester, coursefiles.teacher, courseoutline, attendence], function (err, res) {
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

Coursefile.findById = function (id, result) {
  dbConn.query(`Select coursefile.name, coursefile.courseoutline, coursefile.attendence, coursefile.created_at, department.department, session.session, semester.semester, course.id as courseid, course.coursename,
  department.id as dpt_id, semester.id as sem_id, session.id as sess_id  from coursefile
  inner join department on coursefile.department = department.id
  inner join session on coursefile.session = session.id
  inner join semester on coursefile.semester = semester.id
  inner join course on coursefile.coursename = course.id
  WHERE coursefile.created_at`, id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};

Coursefile.findCurrent = function (id, result) {
  dbConn.query(`Select coursefile.name, coursefile.courseoutline, coursefile.attendence, coursefile.created_at, department.department, session.session, semester.semester, course.id as courseid, course.coursename,
  department.id as dpt_id, semester.id as sem_id, session.id as sess_id  from coursefile
  inner join department on coursefile.department = department.id
  inner join session on coursefile.session = session.id
  inner join semester on coursefile.semester = semester.id
  inner join course on coursefile.coursename = course.id
  WHERE coursefile.created_at`, id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};

Coursefile.findCompleted = function (id, result) {
  dbConn.query(`Select coursefile.name, coursefile.courseoutline, coursefile.attendence, coursefile.created_at, department.department, session.session, semester.semester, course.id as courseid, course.coursename,
  department.id as dpt_id, semester.id as sem_id, session.id as sess_id  from coursefile
  inner join department on coursefile.department = department.id
  inner join session on coursefile.session = session.id
  inner join semester on coursefile.semester = semester.id
  inner join course on coursefile.coursename = course.id
  where coursefile.complete =1`, id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};

Coursefile.findOld = function (id, result) {
  dbConn.query(`Select coursefile.name, coursefile.courseoutline, coursefile.attendence, coursefile.created_at, department.department, session.session, semester.semester, course.id as courseid, course.coursename,
  department.id as dpt_id, semester.id as sem_id, session.id as sess_id  from coursefile
  inner join department on coursefile.department = department.id
  inner join session on coursefile.session = session.id
  inner join semester on coursefile.semester = semester.id
  inner join course on coursefile.coursename = course.id
  WHERE coursefile.created_at between CURRENT_DATE and DATE_ADD(CURRENT_DATE,INTERVAL 30 DAY)`, id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};

Coursefile.findAll = function (result) {
  dbConn.query(`Select * from coursefile`, function (err, res) {
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

Coursefile.update = function (id, coursefiles, result) {
  dbConn.query("UPDATE coursefile SET coursename=?, session=?, department=?, semester=?, teacher=?   WHERE id = ?",
    [coursefiles.coursename, coursefiles.session, coursefiles.department, coursefiles.semester, coursefiles.teacher, id], function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

Coursefile.delete = function (id, result) {
  dbConn.query("DELETE from coursefile  WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Coursefile.Count = function (result) {
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

module.exports = Coursefile;
