import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import RootLayout from "@/components/layouts/RootLayout";
import QuotePage from "@/pages/QuotePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RootLayout>
              <HomePage />
            </RootLayout>
          }
        />
        <Route
          path="/quote/:ticker"
          element={
            <RootLayout>
              <QuotePage />
            </RootLayout>
          }
        />
        <Route
          path="*"
          element={
            <RootLayout>
              <NotFoundPage />
            </RootLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
