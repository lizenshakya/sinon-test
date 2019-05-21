'use strict';
const Mocha = require('mocha');
const path = require('path');

const { expect } = require('chai');
const sinon = require('sinon');
const funcs = require('.');

describe('Test index.js', () => {
  describe('add', () => {
    it('calculates sum', () => {
      expect(funcs.add(1, 2)).to.equal(3);
    });
  });
})

describe('addAsync', () => {
    it('calculates sum asyncronously', (done) => {
      funcs.addAsync(1, 2, (error, result) => {
        expect(result).to.equal(3);
        done();
      });
    });
  })
  describe('addAsync', () => {
    beforeEach('fake add function', () => sinon.stub(funcs, 'add').yields(null, 3));
    afterEach('reset add function', () => funcs.add.reset());
    after('restore add function', () => funcs.add.restore());

    it('calculates sum asyncronously', (done) => {
      funcs.add(1, 2, (error, result) => {
        expect(result).to.equal(3);
        done();
      });
    });
  });