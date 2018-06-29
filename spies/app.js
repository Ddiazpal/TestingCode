var db = require('./db.js');

module.exports.handleSignup = (email, pswd)=>{

  db.saveUser({email, pswd});
};
