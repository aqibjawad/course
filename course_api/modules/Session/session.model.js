'use strict';
var dbConn = require('../../config/db.config');
//ListingCategoSubry object create

var Session = function (sessions) {
  this.department = sessions.department;
  this.session = sessions.session;
};
Session.create = function (sessions, result) {
  dbConn.query("INSERT INTO session set department=?, session=?",
    [sessions.department, sessions.session], function (err, res) {
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

Session.findById = function (id, result) {
  dbConn.query(`Select session.id, department.department, session.session, department.id as dpt_id from session
  inner join department on session.department = department.id
  where department.id = ?`, id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
 
Session.findAll = function (result) {
  dbConn.query(`Select session.id, department.department, session.session, department.id as dpt_id from session
  inner join department on session.department = department.id`, function (err, res) {
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

Session.update = function (id, sessions, result) {
  dbConn.query("UPDATE session SET department=?, session=?,  WHERE id = ?",
    [sessions.department, sessions.session,id], function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

Session.delete = function (id, result) {
  dbConn.query("DELETE from session  WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Session.Count = function (result) {
  dbConn.query(
    `SELECT COUNT(id) as id FROM session`,
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

module.exports = Session;
