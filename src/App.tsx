import { observer } from "mobx-react-lite";
import React, { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthPage } from "./blocks/authPage";
import { HomePage } from "./blocks/homePage";
import store from "./store/store";
import "./services/i18n";
import "./input.css";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

const StoreContext = createContext({});

export const App = observer(() => {
  return (
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  );
});
