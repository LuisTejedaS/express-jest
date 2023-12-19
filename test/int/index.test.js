const request = require("supertest")

describe("GET /", () => {

    it("should return 200", async () => {
        const response = await request("http://localhost:3000").get("/");
        expect(response.statusCode).toBe(200);
        expect(response.body.error).toBe(undefined);
        expect(response.text).toEqual('hello')
    });

    it("should return 200 post", async () => {
        const response = await request("http://localhost:3000").post("/").send({ message: 'hi' })
        expect(response.statusCode).toBe(200);
        expect(response.body.error).toBe(undefined);
        expect(response.text).toEqual('hi')
    });

});