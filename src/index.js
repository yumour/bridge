import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import AppRoutes from "./routes";
import { AppContextProvider } from "./context";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
      <ConfigProvider direction="rtl">
    <AppRoutes />
    </ConfigProvider>
  </AppContextProvider>
);
