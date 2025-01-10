const request = require("supertest");
const app = require("../index");

describe("Get /will", function () {
  it("should return hello world", function (done) {
    request(app).get("/will").expect('{"response":"Hello, world!"}');
  });
});
