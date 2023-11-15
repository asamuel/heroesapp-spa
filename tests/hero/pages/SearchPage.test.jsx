import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("test on SearchPage", () => {
  beforeEach(() => jest.clearAllMocks());

  test("should match snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("should input contain batman", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const inputSearch = screen.getByRole("textbox");
    const imgBat = screen.getByRole("img");
    const alert = screen.getByLabelText("alert");

    expect(inputSearch.value).toBe("batman");
    expect(imgBat.src).toContain("batman.jpg");
    expect(alert.style.display).toBe("none");
  });

  test("should show error if error not exists", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=kakaroto"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const alert = screen.getByLabelText("alert");

    expect(alert.style.display).toBeFalsy();
  });

  test("should call navigate when form was submit", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "iron" } });
    fireEvent.submit(form);

    expect(mockedUseNavigate).toHaveBeenCalledWith("?q=iron");
  });
});
