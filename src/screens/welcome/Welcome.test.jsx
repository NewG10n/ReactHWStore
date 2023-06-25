import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Welcome from "./Welcome";

describe("Welcome component", () => {
  test("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
