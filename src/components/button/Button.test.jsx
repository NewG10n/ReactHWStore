import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";

describe("Button", () => {
  test("should render button with provided content", () => {
    // Arrange
    const btnData = {
      content: <span>Click me</span>,
    };
    render(<Button btnData={btnData} />);

    // Act
    const button = screen.getByRole("button", { name: /click me/i });

    // Assert
    expect(button).toBeInTheDocument();
  });

  test("should call onClick when button is clicked", () => {
    // Arrange
    const onClickMock = jest.fn();
    const btnData = {
      content: <span>Click me</span>,
      onClick: onClickMock,
    };
    render(<Button btnData={btnData} />);

    // Act
    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);

    // Assert
    expect(onClickMock).toHaveBeenCalled();
  });
});
