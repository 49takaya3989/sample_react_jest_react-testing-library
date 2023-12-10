import {render, screen} from "@testing-library/react"
import App from "./App";

test("should render HELLO WORLD", () => {
  render(<App />);
  const divElement = screen.getByText(/hello world/i);
  expect(divElement).toBeInTheDocument();
});
