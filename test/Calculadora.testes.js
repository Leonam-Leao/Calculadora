const { expect } = require('chai');
const { somar, subtrair, dividir, multiplicar } = require("../src/models/Calculadora");

describe('Calculadora', () => {
    it('deve somar', () => {
        const resultado = somar(2, 6);
        expect(resultado).to.equal(8);
    });

    it('deve subtrair', () => {
        const resultado = subtrair(6, 2);
        expect(resultado).to.equal(4);
    });

    it('deve dividir', () => {
        const resultado = dividir(6, 2);
        expect(resultado).to.equal(3);
    });

    it('deve multiplicar', () => {
        const resultado = multiplicar(2, 3);
        expect(resultado).to.equal(6);
    });

});