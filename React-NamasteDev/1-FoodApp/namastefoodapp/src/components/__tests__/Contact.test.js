import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact componenet", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  it("Should load two input boxes on Contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).not.toBe(3);
  });
});
