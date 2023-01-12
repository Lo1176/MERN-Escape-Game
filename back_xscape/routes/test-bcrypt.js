const { default: userRoutes } = require("./users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const myPlaintextPassword = "sMp4()%12pop";

// qd on créé un utiisateur POST
// Technique 2 (auto-gen a salt and hash):
bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  // Store hash in your password DB.
  // qqchose du genre
  user.password = hash;
});


// To check a password: GET one USER
// Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
  result == true;
  // => gen a token
  // jwt.sign(payload, secretOrPrivateKey, [options, callback])
  jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: "foobar",
    },
    "secret"
  );
});