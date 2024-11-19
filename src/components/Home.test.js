import React from "react";
import Home from "./Home";
import { render, screen } from "@testing-library/react";

describe(Home, () => {
  it("renders the header with correct initial text", () => {
    render(<Home />);
    const header = screen.getByText("Currencies and Exchange Rate");
    expect(header).toBeInTheDocument();
  });
});
