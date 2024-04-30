'use strict';
var dbConn = require('../../config/db.config');
//ListingCategoSubry object create

var Teacher = function (teachers) {
  this.name = teachers.name;
  this.email = teachers.email;
  this.password = teachers.password;
  this.department = teachers.department;
  this.created_at = new Date();
  this.updated_at = new Date();
};
Teacher.create = function (teachers, result) {
  dbConn.query("INSERT INTO teacher set name=?, email=?, password=?, department=?",
    [teachers.name, teachers.email, teachers.password, teachers.department], function (err, res) {
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

Teacher.findById = function (ID, result) {
  dbConn.query(`Select teacher.id, teacher.firstname,teacher.lastname, department.department,  department.id as dpt_id from teacher
  inner join department on teacher.department = department.id
  where teacher.id = ?`, ID, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};

Teacher.findAll = function (result) {
  dbConn.query(`Select user.id,  user.firstname,user.lastname, user.role ='3',department.department,  department.id as dpt_id from user
  inner join department on user.department = department.id`, function (err, res) {
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

Teacher.update = function (ID, teachers, result) {
  dbConn.query("UPDATE teacher SET  Name=?, Email=?, Password=?, Department=? WHERE id = ?",
    [teachers.name, teachers.email, teachers.password, teachers.department, ID], function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

Teacher.delete = function (ID, result) {
  dbConn.query("DELETE from teacher  WHERE id = ?", [ID], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Teacher;
