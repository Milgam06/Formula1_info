import { Route, Routes } from "react-router-dom";

import { MainPage } from "@/pages";

export const Router: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};
