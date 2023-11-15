import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe("test on PrivateRoute", () => {
  test("should show children when is login", () => {
    Storage.prototype.setItem = jest.fn();
    const contextState = { logged: true, user: { id: "1", name: "lex" } };

    render(
      <AuthContext.Provider value={contextState}>
        <MemoryRouter>
          <PrivateRoute>
            <h1>Private Route</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Private Route")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/");
  });
});
