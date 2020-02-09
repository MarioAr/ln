const expect  = require('chai').expect;
const math = require('../modules/fizz/math');
const {init }= require('../modules/fizz');

describe('Modulo Math', () => {
    describe('Funcion divisible', () => {
    
    it('divisible(3, 3) = true', () => {
        expect(math.divisible(3, 3)).to.equal(true);
    })
    
    it('divisible(3, 4) = false', () => {
        expect(math.divisible(3, 4)).to.equal(false);
    })

    it('divisible = error', () => {
        expect(math.divisible).to.throw();
    })

        it('divisible(1, \'a\') = error', () => {
        expect(() => math.divisible(1, 'a')).to.throw();
    })
});

describe('Funcion contiene', () => {
    
    it('contiene(436, 3) = true', () => {
        expect(math.contiene(435, 3)).to.equal(true);
    })
    
    it('contiene(436, 5) = false', () => {
        expect(math.contiene(436, 5)).to.equal(false);
    })

    it('contiene(436, \'a\') = error', () => {
        expect(math.contiene(436, 'a')).to.equal(false);
    })
});
})
