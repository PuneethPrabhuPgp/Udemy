import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import mockresList from "../../mockData/mockResList";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// integration test.

//mock fetch data
global.fetch = jest.fn(() => {
  return Promise().resolve({
    json: (data) => {
      return Promise.resolve(mockresList);
    }
  })
});

it("should render the body componenet with search button", async () => {
  await act(async () => render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  ));

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("serachInput");

  fireEvent.change(searchInput, { target: { value: "KFC" } });



});
