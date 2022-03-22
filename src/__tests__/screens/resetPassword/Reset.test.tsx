import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Reset from "../../../screens/resetPassword/Reset";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  __esModule: true,
  useNavigate: () => ({
    navigate: jest.fn().mockImplementation(() => ({})),
  }),
}));

test("renders header text", async () => {
  render(
    <BrowserRouter>
      <Reset />
    </BrowserRouter>
  );
  const logoElement = screen.getByText(/📚shelfLife/i);
  await waitFor(() => expect(logoElement).toBeInTheDocument());
});
