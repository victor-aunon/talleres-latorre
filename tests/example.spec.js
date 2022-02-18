// adds special assertions like toHaveTextContent
import "@testing-library/jest-dom/extend-expect";

import { getByText } from "@testing-library/dom";

test("Test heading", () => {
  const fs = require("fs");
  const path = require("path");
  const html = fs
    .readFileSync(path.resolve((__dirname, "..", "src/index.html")))
    .toString();
  document.body.innerHTML = html;
  const heading = getByText(document, "Hello world!");

  expect(heading).toBeInTheDocument();
});
