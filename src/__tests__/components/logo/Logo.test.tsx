import { render, screen } from "@testing-library/react";
import Logo from "../../../components/logo/Logo";

test("renders header text", () => {
  render(<Logo />);
  const logoText = screen.getByText(/📚shelfLife/i);

  expect(logoText).toBeInTheDocument();
});
