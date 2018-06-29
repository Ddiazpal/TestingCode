const expect = require('expect');
const utils = require('./utils');

describe('utils', ()=>{
  it('Should add two numbers', ()=>{
    var rs = utils.add(33,11);

    expect(rs).toBe(44).toBeA('number');
  });

  it('Should async add two numbers', (done)=>{
    utils.asyncAdd(3, 1, (sum)=>{
      expect(sum).toBe(4).toBeA('number');
      done();
    });
  });

  it('Should async square a number', (done)=>{
    utils.square(5, (sqr) =>{
      expect(sqr).toBe(25).toBeA('number');
      done();
    });
  });
});

it('Should be a fullname', ()=>{
  var user = { age: 20, location: 'Bogota'};
  var res= utils.setName(user, 'Daniela Diaz');

  expect(res).toInclude({
    firstName: 'Daniela',
    lastName: 'Diaz'
  }).toBeA('object');
});
