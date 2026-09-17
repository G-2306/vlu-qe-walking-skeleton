const { login } = require("./login");

describe("Login Function", () => {

    test("Đăng nhập thành công với admin và 123", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("Đăng nhập thất bại với sai password", () => {
        expect(login("admin", "456")).toBe(false);
    });

    test("Đăng nhập thất bại với sai username", () => {
        expect(login("user", "123")).toBe(false);
    });

});
