import { render, screen } from "@testing-library/react";
import { default as HomePage } from "../src/app/page";
import "@testing-library/jest-dom";

describe("HomePage", () => {
  it("displays the restaurant name", () => {
    render(<HomePage />);

    const heading = screen.getByRole("heading", {
      name: /Homepage/,
    });

    expect(heading).toBeInTheDocument();
  });
});
