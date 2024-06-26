var jwt = require("jsonwebtoken");
require("dotenv").config();

exports.Login = async (userid) => {
  return jwt.sign({ userid }, process.env.jwt_secretkey_login, {
    expiresIn: process.env.jwt_expires_login,
  });
};

exports.resetPassword = async (userid) => {
  return jwt.sign({ userid }, process.env.jwt_secretkey_resetpassword, {
    expiresIn: process.env.jwt_expires_resetpassword,
  });
};