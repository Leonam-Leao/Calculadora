const request = require('supertest');
const {expect} = require('chai');
const app = require('../src/app');
const calculadoraService = require('../src/services/CalculadoraService');
const sinon = require('sinon');

describe('API Calculadora', () => {
    it('CalculadoraController - Status 200 - SEM MOCK', async () => {
        const resposta = await request(app)
            .post('/calculadora/dividir')
            .send({ a: 10, b: 2 });
        expect(resposta.status).to.equal(200);
        expect(resposta.body.resultado).to.equal(5);
    });

    it('CalculadoraController - Status 200 - COM MOCK', async () => {
        const stub = sinon.stub(calculadoraService, 'dividir');
        stub.returns(9);

        const resposta = await request(app)
            .post('/calculadora/dividir')
            .send({ a: 10, b: 2 });
        expect(resposta.status).to.equal(200);
        expect(resposta.body.resultado).to.equal(9);

        stub.restore();
    });
});