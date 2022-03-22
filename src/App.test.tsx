import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders logo Text from login component", async () => {
  render(<App />);
  const linkElement = screen.getByText(/📚shelfLife/i);
  await waitFor(() => expect(linkElement).toBeInTheDocument());
});
