import React from "react";
import ReactLeafletKmz from "../index";
import { render, screen } from "@testing-library/react";

describe("ReactLeafletKmz", () => {
  it("renders", {
      render(
        <Map data-testid={"map"}>
          <ReactLeafletKmz kmzURL={"abc123"} />
        </Map>
      );
  
      expect(screen.getByTestId("map"))
  })
});
