import React from "react";
import { render } from "@testing-library/react";
import Box from './Box';

describe("Smoke and snapshot tests", function () {
  it("should render without crashing", function () {
    const removeBox = () => null;
    const { id, color, width, height } = {
      id: 1, width: 30, height: 40, color: "green"
    }
    render(<Box id={id} color={color} width={width} height={height} removeBox={removeBox} />);
  });

  it("should match snapshot", function () {
    const removeBox = () => null;
    const { id, color, width, height } = {
      id: 1, width: 30, height: 40, color: "green"
    }
    const { asFragment } = render(<Box id={id} color={color} width={width} height={height} removeBox={removeBox} />);
    expect(asFragment()).toMatchSnapshot();
  });
});