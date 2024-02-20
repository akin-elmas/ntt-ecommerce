import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <CssBaseline />
      <Outlet />
    </>
  );
}
