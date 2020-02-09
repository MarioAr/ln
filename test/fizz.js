const expect  = require('chai').expect;
const math = require('../modules/fizz/math');
const {init }= require('../modules/fizz');


describe('Modulo Fizz', () => {
    
    it('init([]) = \'\'', () => {
        expect(init([])).to.equal('');
    })
    
    it('init([3, 15, 5]) = \'fizz-fizzbuzz-buzz\'', () => {
        expect(init([3, 15, 5]).toLowerCase()).to.equal('fizz-fizzbuzz-buzz');
    })

    it('init() = Error', () => {
        expect(init).to.throw();
    })

    it('init(\'aaa\') = Error', () => {
        expect(() => init('aaa')).to.throw();
    })
});