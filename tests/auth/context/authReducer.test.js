import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("test on authReducer", () => {
  test("should return default state", () => {
    const authState = authReducer({ logged: false }, {});
    expect(authState).toEqual({ logged: false });
  });

  test("should user login", () => {
    const action = {
      type: types.login,
      payload: { id: 1, name: "sam" },
    };

    const authState = authReducer({}, action);
    expect(authState).toEqual({ logged: true, user: action.payload });
  });

  test("should logout user", () => {
    const action = {
      type: types.logout,
    };
    const authState = authReducer({}, action);
    expect(authState).toEqual({ logged: false });
  });
});
