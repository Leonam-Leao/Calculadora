const sinon = require('sinon');
const { expect } = require('chai');
const { dividir } = require('../src/services/CalculadoraService');
const calculadora = require('../src/models/Calculadora');

describe('Calculadora Service', () => {
    it('deve dividir', () => {
        afterEach(() => {
            sinon.restore();
        });

        const stub = sinon.stub(calculadora, 'dividir')
        stub.returns(3);

        const resultado = dividir(6, 2);

        sinon.assert.calledOnce(stub);
        sinon.assert.calledOnceWithExactly(stub, 6, 2);

        expect(resultado).to.equal(3);
    });

    it('deve lançar erro ao dividir por zero', () => {

        const stub = sinon.stub(calculadora, 'dividir')

        expect(() =>{
            dividir(4, 0);
        }).to.throw('O divisor não pode ser zero.')

        sinon.assert.notCalled(stub);
    });
});