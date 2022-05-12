// import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";
import Filters from "./Filters";

describe("<Filters>", () => {
  const setFilter = jest.fn();
  const setPage = jest.fn();

  it("render ", async () => {
    render(
      <BrowserRouter>
        <Filters setFilter={setFilter} setPage={setPage} />
      </BrowserRouter>
    );

    const linkElement = await screen.findByText(/Filters/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("select element ", async () => {
    render(
      <BrowserRouter>
        <Filters setFilter={setFilter} setPage={setPage} />
      </BrowserRouter>
    );

    const linkElement = await screen.findByTestId("online");
    expect(linkElement).toBeInTheDocument();
    userEvent.selectOptions(linkElement, "true");
    await waitFor(() => {
      expect(setFilter).toHaveBeenCalledTimes(1);
      expect(setPage).toHaveBeenCalledTimes(1);
    });
  });
  it("select element none", async () => {
    const setPage = jest.fn();
    render(
      <BrowserRouter>
        <Filters setFilter={setFilter} setPage={setPage} />
      </BrowserRouter>
    );

    const linkElement = await screen.findByTestId("online");
    expect(linkElement).toBeInTheDocument();
    userEvent.selectOptions(linkElement, "none");
    await waitFor(() => {
      expect(setFilter).toHaveBeenCalledTimes(1);
      expect(setPage).toHaveBeenCalledTimes(1);
    });
  });
});
