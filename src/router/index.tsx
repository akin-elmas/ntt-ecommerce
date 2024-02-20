import { createBrowserRouter } from "react-router-dom";
import paths from "./paths";
import AppLayout from "../AppLayout";
import Products from "../screens/Products";

const router = createBrowserRouter([
  {
    path: paths.home,
    element: <AppLayout />,

    children: [
      {
        path: paths.home,
        element: <Products />,
      },
    ],
  },
]);

export default router;
