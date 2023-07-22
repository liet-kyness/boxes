import Box from "./Box";
import { render, fireEvent } from "@testing-library/react";

it("renders without crashing", () => {
    render(<Box />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});

