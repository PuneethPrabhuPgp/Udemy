import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestroCard from "../RestroCard";
import mockResList from "../../mockData/mockResList"

it("should render restaurantCard Componenet with props data", () => {
  render(<RestroCard resData={mockResList} />);

  const resname = screen.getByText("KFC");

  expect(resname).toBeInTheDocument();
});
