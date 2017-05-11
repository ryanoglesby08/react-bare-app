import chai, {expect} from "chai";
import {render} from "enzyme";
import chaiEnzyme from "chai-enzyme";

import React from "react";

import ColorVisualizer from "../../src/ColorVisualizer";

describe("ColorVisualizer", () => {
  chai.use(chaiEnzyme());

  it("shows the color as text", () => {
    const colorVisualizer = render(<ColorVisualizer color="blue" />);

    expect(colorVisualizer).to.have.text("blue");
  });

  it("has the color as the background color", () => {
    const colorVisualizer = render(<ColorVisualizer color="#aabbcc" />);

    expect(colorVisualizer).to.have.style("background-color", "#aabbcc");
  });
});
