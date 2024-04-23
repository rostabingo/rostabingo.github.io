import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "containers/App";
import { Provider } from "jotai";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("No root element found");
}
const root = createRoot(rootElement);
root.render(
    <Provider>
        <App />
    </Provider>
);
