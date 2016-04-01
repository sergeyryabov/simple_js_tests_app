const assert = require('chai').assert;

// Tested code
function pow(x, n) {
  return 8
}

// Test
describe("pow", function() {

  it("возводит в n-ю степень", function() {
    assert.equal(pow(2, 3), 8);
  });

});
