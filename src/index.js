import { hydrate, render } from "react-dom";
import App from "./app";
import "assets/css/bootstrap-grid.css";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
