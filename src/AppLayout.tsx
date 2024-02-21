import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalContainer from "./components/GlobalContainer";

export default function AppLayout() {
  return (
    <>
      <CssBaseline />
      <Header />
      <GlobalContainer>
        <Outlet />
        <Footer />
      </GlobalContainer>
    </>
  );
}
