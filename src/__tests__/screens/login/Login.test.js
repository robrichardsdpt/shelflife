import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./../../../screens/login/Login";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => ({
    navigate: jest.fn().mockImplementation(() => ({})),
  }),
}));

test("renders header text", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const logoElement = screen.getByText(/📚shelfLife/i);
  expect(logoElement).toBeInTheDocument();
});
