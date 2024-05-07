import React from "react";
import { Global } from "@emotion/react";
import { globalStyle } from "@/styles/global";
import { useIntervalLiveCheck } from "./hooks";
import { Router } from "./router";

export const App: React.FC = () => {
  useIntervalLiveCheck();
  return (
    <>
      <Global styles={globalStyle} />
      <Router />
    </>
  );
};

export default App;
