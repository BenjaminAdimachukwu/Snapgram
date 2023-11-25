
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import { QueryProvider } from "./lib/react-query/QueryProvider";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
   <QueryProvider>
   <AuthProvider>
      <App />
    </AuthProvider>
   </QueryProvider>
  </BrowserRouter>
);
