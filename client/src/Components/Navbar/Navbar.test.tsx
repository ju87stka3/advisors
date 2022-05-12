import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

describe("<Navbar>", () => {
  it("render ", async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const text = await screen.findByText(/advisors/i);
    expect(text).toBeInTheDocument();
  });
});
