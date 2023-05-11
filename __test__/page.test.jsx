import { render, screen } from "@testing-library/react";
import { default as Home } from "../src/app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("displays the restaurant name", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Restaurant20/,
    });

    expect(heading).toBeInTheDocument();
  });
});
