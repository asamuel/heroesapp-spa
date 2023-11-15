import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { AppRouter } from "../../src/router/AppRouter";

describe("test on AppRouter", () => {
  test("should show login when is logout", () => {
    const context = { logged: false };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={context}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("Login").length).toBe(2);
  });

  test("should show marvel where is login", () => {
    const context = { logged: true, user: { id: "1", name: "lex" } };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={context}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Marvel Page")).toBeTruthy();
  });
});
