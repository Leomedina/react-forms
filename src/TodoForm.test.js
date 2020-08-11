import React from "react";
import { render } from "@testing-library/react";
import TodoForm from './TodoForm';

describe("Smoke and snapshot tests", function () {
  it("should render without crashing", function () {
    const addTodo = () => null;
    render(<TodoForm addTodo={addTodo} />);
  });

  it("should match snapshot", function () {
    const addTodo = () => null;
    const { asFragment } = render(<TodoForm addTodo={addTodo} />);
    expect(asFragment()).toMatchSnapshot();
  });
});