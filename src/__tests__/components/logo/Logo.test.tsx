import { render, screen, waitFor } from "@testing-library/react";
import Logo from "../../../components/logo/Logo";

test("renders header text", async () => {
  render(<Logo />);
  const logoText = screen.getByText(/📚shelfLife/i);

  await waitFor(() => expect(logoText).toBeInTheDocument());
});
