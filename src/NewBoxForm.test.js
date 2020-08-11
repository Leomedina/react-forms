import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from './NewBoxForm';

describe("Smoke and snapshot tests", function () {
  it("should render without crashing", function () {
    const addBox = () => null;
    render(<NewBoxForm addBox={addBox} />);
  });

  it("should match snapshot", function () {
    const addBox = () => null;
    const { asFragment } = render(<NewBoxForm addBox={addBox} />);
    expect(asFragment()).toMatchSnapshot();
  });
});