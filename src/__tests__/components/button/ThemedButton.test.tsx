import { render, screen } from "@testing-library/react";
import ThemedButton from "../../../components/button/ThemedButton";

test("renders header text", () => {
  render(
    <ThemedButton
      message={"Submit"}
      colorTheme={"primary"}
      handleClick={() => {}}
    />
  );
  const buttonText = screen.getByText(/Submit/i);
  const button = screen.getByRole("button");
  expect(buttonText).toBeInTheDocument();
  expect(button).toHaveClass("primary__btn");
});
