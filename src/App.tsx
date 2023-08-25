import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Cart from "./components/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/welcome",
      element: <Welcome />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
