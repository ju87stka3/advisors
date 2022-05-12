import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { HOST_NAME } from "../../Constants/constants";
import { BrowserRouter } from "react-router-dom";
import Advisors from "./Advisors";
import userEvent from "@testing-library/user-event";

const server = setupServer(
  rest.get(`${HOST_NAME}/api/advisors/?page=1`, (req, res, ctx) => {
    // console.log("req.url.searchParams", req.url.searchParams);
    return res(
      ctx.json([
        {
          id: "1",
          name: "Pitersd",
          surname: "Auths",
          reviews: "2",
          language: "russian",
          online: false,
        },
        {
          id: "2",
          name: "Piteraa",
          surname: "rtr",
          reviews: "24",
          language: "english",
          online: true,
        },
        {
          id: "3",
          name: "Piterrrrt",
          surname: "ssd",
          reviews: "0",
          language: "german",
          online: false,
        },
        {
          id: "4",
          name: "Piterwwee",
          surname: "cvcvc",
          reviews: "2",
          language: "english",
          online: true,
        },
      ])
    );
  })
);
// establish API mocking before all tests
beforeAll(() => server.listen());

// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => {
  // jest.useRealTimers();
  server.resetHandlers();
});
// clean up once the tests are done
afterAll(() => server.close());

describe("<Advisors>", () => {
  it("success loading data ", async () => {
    render(
      <BrowserRouter>
        <Advisors />
      </BrowserRouter>
    );

    await waitFor(
      async () => {
        const linkElement = await screen.findByText(/Piterrrrt/i);
        expect(linkElement).toBeInTheDocument();
      },
      { timeout: 10000 }
    );

    const link = await screen.findByTestId("online");
    expect(link).toBeInTheDocument();
    userEvent.selectOptions(link, "none");
    const loading = await screen.findByText(/loading/i);
    expect(loading).toBeInTheDocument();

    const linkElement = await screen.findByTestId("online");
    expect(linkElement).toBeInTheDocument();
    userEvent.selectOptions(linkElement, "true");
    const loading1 = await screen.findByText(/loading/i);
    expect(loading1).toBeInTheDocument();
  });
  it("failed loading data ", async () => {
    server.use(
      rest.get(`${HOST_NAME}/api/advisors/`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(
      <BrowserRouter>
        <Advisors />
      </BrowserRouter>
    );

    const linkElement = await screen.findByText(
      /Unexpected end of JSON input/i
    );
    expect(linkElement).toBeInTheDocument();
  });
  it("test scroll ", async () => {
    server.use(
      rest.get(`${HOST_NAME}/api/advisors/`, (req, res, ctx) => {
        const page = req.url.searchParams.get("page");

        return res(
          ctx.json(
            page === "1"
              ? [
                  {
                    id: "1",
                    name: "Pitersd",
                    surname: "Auths",
                    reviews: "2",
                    language: "russian",
                    online: false,
                  },
                  {
                    id: "2",
                    name: "Piteraa",
                    surname: "rtr",
                    reviews: "24",
                    language: "english",
                    online: true,
                  },
                  {
                    id: "3",
                    name: "Piterrrrt",
                    surname: "ssd",
                    reviews: "0",
                    language: "german",
                    online: false,
                  },
                  {
                    id: "4",
                    name: "Piterwwee",
                    surname: "cvcvc",
                    reviews: "2",
                    language: "english",
                    online: true,
                  },
                ]
              : [
                  {
                    id: "6",
                    name: "Pitssers",
                    surname: "dcd",
                    reviews: "2",
                    language: "english",
                    online: true,
                  },
                  {
                    id: "7",
                    name: "Piaster",
                    surname: "dfdths",
                    reviews: "32",
                    language: "english",
                    online: true,
                  },
                ]
          )
        );
      })
    );

    render(
      <BrowserRouter>
        <Advisors />
      </BrowserRouter>
    );

    await waitFor(
      async () => {
        const linkElement = await screen.findByText(/Piterrrrt/i);
        expect(linkElement).toBeInTheDocument();
        const linkElement1 = screen.queryByText(/Piaster/i);
        expect(linkElement1).not.toBeInTheDocument();
      },
      { timeout: 4000 }
    );
    const scrollEl = await screen.findByTestId("scroll");
    expect(scrollEl).toBeInTheDocument();
    fireEvent.scroll(scrollEl, { target: { scrollY: 3500 } });
    await waitFor(
      async () => {
        const linkElement1 = await screen.findByText(/Piaster/i);
        expect(linkElement1).toBeInTheDocument();
      },
      { timeout: 10000 }
    );
  });
});
