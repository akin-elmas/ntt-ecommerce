import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import GlobalContainer from "./components/GlobalContainer";
import CustomCarousel from "./components/CustomCarousel";

export default function AppLayout() {
  return (
    <>
      <CssBaseline />

      <Header />

      <CustomCarousel />
      <GlobalContainer>
        <Outlet />
      </GlobalContainer>
      <Footer />
    </>
  );
}
