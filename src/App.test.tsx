import {render, screen} from "@testing-library/react"
import App from "./App";

describe("test sample", () => {
  test("should render HE", () => {
    render(<App />);
    const divElement = screen.getByText(/he/i);
    expect(divElement).toBeInTheDocument();
  });

  test("should render HELLO", () => {
    render(<App />);
    const divElement = screen.getByText(/hello/i);
    expect(divElement).toBeInTheDocument();
  });

  test("should render HELLO WORLD", () => {
    render(<App />);
    const divElement = screen.getByText(/hello world/i);
    expect(divElement).toBeInTheDocument();
  });
})