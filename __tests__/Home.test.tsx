import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
   it("should have My-App text", async () => {
      render(<Home />);

      const myElem = await screen.findByText(/My-App/i);

      expect(myElem).toBeInTheDocument();
   });

   it("should contain a list", () => {
      render(<Home />);

      const myElem = screen.getByRole("list");

      expect(myElem).toBeInTheDocument();
   });
});
