import { types } from "../../../src/auth/types/types";

describe("test on types", () => {
  test("should return types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
