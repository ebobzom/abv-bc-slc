
describe("get prime", function() {
  describe('test',function{
  it("should return [] for number without prime", function() {
    expect(getprime(1)).toBe([]);
  });
  it("should return [2,3,5] for 6", function() {
    expect(getprime(6)).toBe([2,3,5]);
  });
  it("should return [] for number without prime", function() {
    expect(getprime(-1)).toBe("positive numbers needed");
  it("should return [2] for 2", function() {
    expect(getprime(2)).toBe([2]);
  });
  it("should return [2,3,5,7] for 9", function() {
    expect(getprime(9)).toBe([2,3,5,7]);
  });
  it("should return [0] for 0", function() {
    expect(getprime(0)).toBe([]);
  });
  it("should return 'positive numbers needed' for -6", function() {
    expect(getprime(-6)).toBe(["positive numbers needed"]);
  });
  it("should return [2,3] for 5", function() {
    expect(getprime(5)).toBe([2,3]);
  });
  it("should return [2] for 3", function() {
    expect(getprime(3)).toBe([2]);
  });
  it("should return positive numbers needed for'a'", function() {
    expect(getprime('a')).toBe("positive numbers needed");
  });
  it("should return positive numbers needed for'hi'", function() {
    expect(getprime('hi')).toBe("positive numbers needed");
  });



})