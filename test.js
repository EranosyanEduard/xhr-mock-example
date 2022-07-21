const { assert } = require("chai");
const { default: XHRMock } = require("xhr-mock");
const request = require("./request");

describe("suit 1", () => {
  beforeEach(() => XHRMock.setup());

  afterEach(() => XHRMock.teardown());

  it("test 1", async () => {
    XHRMock.post("https://ya-praktikum.tech/api/v2/chats/", (req, res) => {
      assert.equal(req.header("Content-Type"), "application/json");
      assert.deepEqual(JSON.parse(req.body()), { title: "new chat" });
      return res.status(201).body(JSON.stringify({ isOk: true }));
    });

    const response = await request({ title: "new chat" });
    assert.deepEqual(response, { isOk: true });
  });
});
