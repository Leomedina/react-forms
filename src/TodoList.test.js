import React from "react";
import { render, getByLabelText, getByText, fireEvent } from "@testing-library/react";
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

describe("Functionality of form", function () {
  it("should add a new todo", function () {
    const { queryByText, getByLabelText } = render(<TodoList />);
    const input = getByLabelText("Todo:");
    const btn = queryByText("Add")

    expect(queryByText('laugh')).not.toBeInTheDocument();
    fireEvent.change(input, { target: { value: "laugh" } });
    fireEvent.click(btn);
    expect(queryByText('laugh')).toBeInTheDocument();
  });
});