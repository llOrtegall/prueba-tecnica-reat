import { createRoot } from "react-dom/client";

import { StrictMode } from "react";
import "./index.css";


createRoot(document.getElementById("root")!)
  .render(
    <StrictMode>
      <h2>Example</h2>
    </StrictMode>
  )