"use strict";
var dbConn = require("../../config/db.config");

var bcrypt = require("bcrypt");
const saltRounds = 10;

/* Require JWT */ 
var jwt = require("jsonwebtoken");
var secret = require("../../config/secret.config");
var jwtSecret = secret.jwt;

var Auth = function (auth) {
  this.firstname = auth.firstname;
  this.lastname = auth.lastname;
  this.email = auth.email;
  this.password = auth.password; 
  this.role = auth.role;
  this.status = auth.status;
  this.department = auth.department;
  
  this.created_at = new Date(); 
};

Auth.create = function (auth, result) {
  bcrypt.hash(auth.password, saltRounds, function (err, hash) {
    dbConn.query( "INSERT INTO user set firstname=?, lastname=?, email=?, password=?, role=?, department=?, status=?",
      [auth.firstname, auth.lastname, auth.email, hash, auth.role, auth.department, auth.status],
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          result(null, res.insertId);
        }
      }
    );
  });
};

/*
  Error 0 means no error
  Error 1 means no Account
  Error 2 means invalid Password
*/

Auth.login = function (auth, result) {
  dbConn.query( 
    `SELECT user.id, CONCAT(firstname, lastname) AS Name, email, password, role FROM user
    WHERE email = ?`,
    [auth.email, auth.role], 
    (err, res) => {
      if (res.length != 0) {
        bcrypt.compare(auth.password, res[0].password, (err, hash) => {
          if (hash == true) {
            let id = res[0].id;
            var token = "";
            if (auth.remember === 1) {
              token = jwt.sign({ id }, jwtSecret, { expiresIn: 60 * 60 * 72 });
            } else {
              token = jwt.sign({ id }, jwtSecret, { expiresIn: 60 * 60 * 12 });
            }
            delete res[0].id;
            delete res[0].password;
            result(null, 0, token, res[0]);
          } else {
            result(null, 2);
          }
        });
      } else {
        result(null, 1);
      }
    }
  );
};

Auth.update = function (id, auth, image, result) {
  dbConn.query(
    `UPDATE user set firstname=?, lastname=?, email=?, ${ image ? `image = '${image}'` : "" } WHERE id=?`,
    [auth.firstname, auth.lastname, auth.email, id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res); 
      }
    }
  );
};

Auth.findbyId = function (auth, result) {
  dbConn.query(
    `Select * from user where id=?`, id,
    function (err, res) {  
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("city : ", res);
        result(null, res);
      }
    }
  );
};


Auth.findAll = function (result) {
  dbConn.query(
    `Select * from user`,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("city : ", res);
        result(null, res);
      }
    }
  ); 
};

Auth.findTeacher = function (result) {
  dbConn.query(
    `Select user.id,  user.firstname,user.lastname,user.email, user.role = '3',department.department,  department.id as dpt_id from user
    inner join department on user.department = department.id `,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("city : ", res); 
        result(null, res);
      }
    }
  );
};

Auth.findUser = function (result) {
  dbConn.query(
    `Select * from user where role=1`,
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

Auth.statusUpdate = function (id, result) {
  dbConn.query(
    `UPDATE user SET status=3 WHERE id = ?`, [id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("city : ", res);
        result(null, res);
      }
    }
  );
};

Auth.statusApprove = function (id, result) {
  dbConn.query(
    `UPDATE user SET status=2 WHERE id = ?`, [id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("city : ", res);
        result(null, res);
      }
    }
  );
};

Auth.delete = function (id, result) {
  dbConn.query("DELETE from user  WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Auth.CountUser = function (result) {
  dbConn.query(
    `SELECT COUNT(id) as id FROM user where role=1`,
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

Auth.CountTeacher = function (result) {
  dbConn.query(
    `SELECT COUNT(id) as id FROM user where role=3`,
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

Auth.resetPassword = function (email, result) {
  dbConn.query(
    `SELECT count(*) as total FROM users WHERE email = ?`,
    [email],
    (err, res) => {
      if (err) console.log(err);
      else {
        if (res[0].total >= 1) {
          dbConn.query(
            "INSERT INTO `resetpassword`(email, status) VALUES (?, ?)",
            [email, 1],
            (err, response) => {
              const link = jwt.sign({ id: response.insertId }, jwtSecret, {
                expiresIn: 60 * 60 * 72,
              });

              ForgetEmail.forgot(email, link);
              result(null, res.insertId);
            }
          );
        }
      }
    }
  );
};

Auth.resetPasswordDetails = function (id, result) {
  dbConn.query(
    "SELECT * FROM `reset-password` WHERE id = ?",
    [id],
    (err, res) => {
      if (err) {
        result(err, null);
      } else {
        if (res[0] && res[0].status == 1) {
          dbConn.query("UPDATE `reset-password` SET status = 2", (err, res) => {
            result(null, {});
          });
        } else {
          result({ error: 1, msg: "wrong token" }, null);
        }
      }
    }
  );
};

Auth.changePassword = function (id, password, result) {
  dbConn.query(
    "SELECT * FROM `reset-password` WHERE id = ?",
    [id],
    (err, res) => {
      if (err) {
        result(err, null);
      } else {
        if (res[0] && res[0].email) {
          bcrypt.hash(password, saltRounds, (err, hash) => {
            dbConn.query(
              "UPDATE `users` SET password = ? WHERE email = ?",
              [hash, res[0].email],
              (err, res) => {
                result(null, {});
              }
            );
          });
        } else {
          result({ error: 1, msg: "wrong token" }, null);
        }
      }
    }
  );
};

module.exports = Auth;
