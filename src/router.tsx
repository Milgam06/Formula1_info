import { Outlet, Route, Routes } from "react-router-dom";
import { MainPage, LatestPage } from "@/pages";
import { DefaultLayout } from "./components/layouts";

export const Router: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          element={
            <>
              <DefaultLayout>
                <Outlet />
              </DefaultLayout>
            </>
          }
        >
          <Route path="/" element={<MainPage />} />
          <Route path="/latest" element={<LatestPage />} />
        </Route>
      </Routes>
    </>
  );
};
