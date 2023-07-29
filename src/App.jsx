import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/Main/main";
import RootLayout from "./pages/Root/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        element: <MainPage />,
        index: "true",
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
