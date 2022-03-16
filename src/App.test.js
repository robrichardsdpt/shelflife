import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders logo Text from login component", () => {
  render(<App />);
  const linkElement = screen.getByText(/📚shelfLife/i);
  expect(linkElement).toBeInTheDocument();
});
