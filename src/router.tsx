import { Outlet, Route, Routes } from "react-router-dom";
import { MainPage } from "@/pages";
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
        </Route>
      </Routes>
    </>
  );
};
