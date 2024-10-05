import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { FetchProvider } from "./hook/useFetchContext/FetchContext.tsx";
createRoot(document.getElementById("root")!).render(
  <FetchProvider>
    <FetchProvider>
      <App />
    </FetchProvider>
  </FetchProvider>,
);
