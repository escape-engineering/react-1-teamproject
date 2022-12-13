import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../component/layout/Layout";

import MainPage from "../page/main";
import DetailPage from "../page/detail";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list/:id" element={<DetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
