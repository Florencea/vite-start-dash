import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Index from "../src/pages/index";

test("renders vite logo", () => {
  render(<Index />);
  const text = screen.getByAltText("Vite logo");
  expect(text).toBeInTheDocument();
});