import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const App: React.FC = () => {
  const client = new QueryClient();
  return (
    <div>
      <h1>App</h1>
    </div>
  );
};

export default App;
