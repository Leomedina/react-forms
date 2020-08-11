import React from "react";
import { render } from "@testing-library/react";
import TodoList from './TodoList';

describe("Smoke and snapshot tests", function () {
  it("should render without crashing", function () {
    render(<TodoList />);
  });

  it("should match snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
  });
});