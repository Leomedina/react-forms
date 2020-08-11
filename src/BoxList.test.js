import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from './BoxList';

describe("Smoke and snapshot tests", function () {
  it("should render without crashing", function () {
    render(<BoxList />);
  });

  it("should match snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
  });
});