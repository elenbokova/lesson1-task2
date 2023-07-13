import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import Router from "./router";
import AuthProvider from "./providers/authProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
