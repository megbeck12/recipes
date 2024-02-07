import { render, screen } from "@testing-library/react";
import App from "./App";

describe("application", () => {
  test("renders app", () => {
    render(<App />);
    expect(screen.getByAltText("header-logo")).toBeVisible();
  });

  test("verifies 200 status code", async () => {
    const response = await fetch("/create-new-recipe");
    expect(response.ok).toBeTruthy();
  });
});
