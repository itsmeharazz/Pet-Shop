import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import StoreContextProvider from "./context/StoreContext.jsx";
import { ContextProvider } from "./context/admin/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <BrowserRouter>
        <StoreContextProvider>
          <ContextProvider>
            <App />
          </ContextProvider>
        </StoreContextProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);
