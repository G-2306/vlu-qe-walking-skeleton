const { login } = require("./login");

test("Login with correct username and password", () => {
    expect(login("admin", "123")).toBe(true);
});
