import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Register from "../../../screens/register/Register";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  __esModule: true,
  useNavigate: () => ({
    navigate: jest.fn().mockImplementation(() => ({})),
  }),
}));

test("renders header text", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const logoElement = screen.getByText(/📚shelfLife/i);
  expect(logoElement).toBeInTheDocument();
});
