import { router } from "@/routes/main";
import { RouterProvider } from "react-router-dom";
import { Cursor } from "@/components/Cursor/";
import { Scrollbar } from "@/components/Scrollbar/";
import { AppProvider } from "./context/context";

function App() {
  return (
    <AppProvider>
      <Scrollbar />
      <Cursor />
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
