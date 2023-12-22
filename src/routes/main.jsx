import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/features/misc";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blogs",
    element: <div>This is my blogs page</div>,
  },
]);
