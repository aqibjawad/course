"use strict";
const Auth = require("./auth.model");


/* Require JWT */
var jwt = require("jsonwebtoken");
var secret = require("../../config/secret.config.js");
var jwtSecret = secret.jwt;

exports.findAll = function (req, res) {
  Auth.findAll(function (err, auth) {
    if (err) res.send(err);
    res.send(auth);
  });
}; 

exports.findTeacher = function (req, res) {
  Auth.findTeacher(function (err, auth) {
    if (err) res.send(err);
    res.send(auth);
  });
}; 

exports.findUser = function (req, res) {
  Auth.findUser(function (err, auth) {
    if (err) res.send(err);
    res.send(auth);
  });
};

exports.statusUpdate = function (req, res) {
  Auth.statusUpdate(req.params.id, function (err, auth) {
    if (err) res.send(err);
    res.json({ error: false, message: "Auth Status Approve" });
  });
};

exports.statusApprove = function (req, res) {
  Auth.statusApprove(req.params.id, function (err, auth) {
    if (err) res.send(err);
    res.json({ error: false, message: "Auth Status Approve" });
  });
};
// Login a user 
exports.login = function (req, res) {
  const data = new Auth(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Auth.login(data, function (err, error, token, user) {
      if (err) res.send(err);
      res.json({ error: error, token: token, user:user })
    })
  }
};

exports.create = function (req, res) {
    const new_code = new Auth(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res .status(400) .send({ error: true, message: "Please provide all required field" });
    } else {
      Auth.create(new_code, function (err, auth) {
        if (err) res.send(err);
        res.json({ error: false, message: "Your login created successfully!", data: auth,
        });
      });
    }
};
  
exports.update = function (req, res) {
  const token = req.headers["x-access-token"];
  console.log(req);
  jwt.verify(token, jwtSecret, function (err, decoded) {
    if (decoded) {
      const new_auth = new Auth(req.body);
      const image = typeof req.file === "undefined" ? "" : req.file.key;

      //handles null error
      Auth.update(decoded.id, new_auth, image, function (err, image) {
        console.log(decoded.id);
        if (err) res.send(err);
        res.json({
          error: false,
          message: "User updated successfully!",
          data: image,
        });
      });
    } else {
      res.json({ error: false, message: "Authentication Failed" });
    }
  });
};


exports.findById = function (req, res) {
  Auth.findById(req.params.id, function (err, auth) {
      if (err) res.send(err);
      res.json(auth);
  });
};

exports.delete = function (req, res) {
  Auth.delete(req.params.id, function (err, staff) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'User successfully deleted' });
  });
};

exports.CountUser = function (req, res) {
  Auth.CountUser(function (err, auth) {
    if (err) res.send(err);
    res.send(auth);
  });
}; 

exports.CountTeacher = function (req, res) {
  Auth.CountTeacher(function (err, auth) {
    if (err) res.send(err);
    res.send(auth);
  });
}; 
exports.resetPassword = function (req, res) {
  Auth.resetPassword(req.query.email, function (err, response) {
    if (err) res.send(false);
    else res.json({ error: 0 });
  });
};

exports.resetPasswordDetails = function (req, res) {
  jwt.verify(req.body.id, jwtSecret, (err, decoded) => {
    if (decoded) {
      Auth.resetPasswordDetails(decoded.id, function (err, response) {
        if (err) res.send({ error: 1, msg: "system error" });
        else res.json(response);
      });
    } else {
      res.send({ error: 1, msg: "token not valid" });
    }
  });
};

exports.changePassword = function (req, res) {
  jwt.verify(req.body.id, jwtSecret, (err, decoded) => {
    if (decoded) {
      Auth.changePassword(decoded.id, req.body.password, function (
        err,
        response
      ) {
        if (err) res.send({ error: 1, msg: "system error" });
        else res.json(response);
      });
    } else {
      res.send({ error: 1, msg: "token not valid" });
    }
  });
};
