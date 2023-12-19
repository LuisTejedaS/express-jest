const getMesage = require('../../message').getMesage

describe("Message", () => {

    it("should return hello", async () => {
        expect(getMesage()).toEqual('hello');
    });

});