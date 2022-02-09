const chai = require('chai');
const expect = chai.expect;

describe('hcmjs', () => {
  it('log', () => {
    expect(logger.log()).to.be.equal(undefined);
  });

});
