import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BlogProvider } from "./context/blogContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BlogProvider>
      <App />
    </BlogProvider>
  </StrictMode>,
  rootElement
);
