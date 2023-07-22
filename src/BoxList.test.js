import BoxList from "./BoxList";
import { render, fireEvent } from "@testing-library/react";

it('renders without crashing', () => {
    render(<BoxList />);
});

it('matches snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});