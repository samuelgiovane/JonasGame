import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders app name link", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Debug the rendered output
  screen.debug(); // This will print the entire DOM structure to the console

  // Use await to properly handle the promise returned by findByText
  const linkElement = await screen.findByText("TantiAuguriJonas");
  
  expect(linkElement).toBeDefined();
});
