import {render, screen} from "@testing-library/react"
import Hoge from './Hoge';

describe("test sample", () => {
  test("should render Ho", () => {
    render(<Hoge />);
    const divElement = screen.getByText(/ho/i);
    expect(divElement).toBeInTheDocument();
  });

  test("should render Hoge", () => {
    render(<Hoge />);
    const divElement = screen.getByText(/Hoge/i);
    expect(divElement).toBeInTheDocument();
  });
})