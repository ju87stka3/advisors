// import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Advisor from "./Advisor";
import { BrowserRouter } from "react-router-dom";

describe("<Advisor>", () => {
  const item = {
    id: "5",
    name: "Pitera",
    surname: "assd",
    reviews: "26",
    language: "russian",
    online: true,
  };

  it("render ", async () => {
    render(
      <BrowserRouter>
        <Advisor item={item} />
      </BrowserRouter>
    );

    const linkElement = await screen.findByText(/Pitera/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("get wrong data ", async () => {
    const item = {
      id: "",
      name: "",
      surname: "",
      reviews: "",
      language: "",
      online: false,
    };

    render(
      <BrowserRouter>
        <Advisor item={item} />
      </BrowserRouter>
    );

    const linkElement = await screen.findByText(/No name/i);
    expect(linkElement).toBeInTheDocument();
  });
});
