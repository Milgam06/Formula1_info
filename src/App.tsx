import React from "react";
import { Global } from "@emotion/react";
import { globalStyle } from "@/styles/global";
import { Router } from "./router";

export const App: React.FC = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Router />
    </>
  );
};

export default App;
