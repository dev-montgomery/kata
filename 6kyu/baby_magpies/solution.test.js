'use strict';

const kata = require('./solution.js');

const m1 = "BWBWBW";
const m2 = "BWBWBB";
const m3 = "WWWWBB";

describe("Example Tests", function() {

  it("child", function() {
    expect(kata.child(m1,m2)).toBe(true);
    expect(kata.child(m2,m3)).toBe(true);
  });
  
  it("not child", function() {
    expect(kata.child(m1,m3)).toBe(false);
  });
  
  it("grandchild", function() {
    expect(kata.grandchild(m1, m3)).toBe(true);
    expect(kata.grandchild(m1, m2)).toBe(true);
  });
});