var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: false
  },
  profileImage: {
    type: String,
    required: false,
    default: '../images/user.png'
  },
  address: {
    street: {
      type: String,
      required: false,
      default: ''
    },
    number: {
      type: String,
      required: false,
      default: ''
    },
    city: {
      type: String,
      required: false,
      default: ''
    },
    postaCode: {
      type: String,
      required: false,
      default: ''
    },
    country: {
      type: String,
      required: false,
      default: ''
    },
    full: {
      type: String,
      required: false,
      default: ''
    }
  },
  qualification: {
    type: String,
    required: false,
    default: ''
  },
  phone: {
    type: String,
    required: false,
    default: ''
  },
  token: String,
  hash: String,
  salt: String
});

userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function (password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function () {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);
  console.log("it gets here");
  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    profileImage: this.profileImage,
    exp: parseInt(expiry.getTime() / 1000),
  }, process.env.MY_SECRET); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

mongoose.model('user', userSchema);