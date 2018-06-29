const expect = require('expect');
const rewire = require('rewire');

var app= require('./app')

describe('App', ()=>{
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);


  it('Should call the spy correctly', () => {
  var spy = expect.createSpy();
  spy('Andrew', 25);
  expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });

  it('Should call saveUser with user object', ()=>{
    var email = 'dani@example.com';
    var pswd = '1234';

    app.handleSignup(email,pswd);
    expect(db.saveUser).toHaveBeenCalledWith({email,pswd});
  });

});
