import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Error from "./Error.jsx";
import Landing from "./pages/Landing.jsx";
import Event from "./pages/Event.jsx";
import EventPage from "./pages/EventPage.jsx";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/event",
        element: <Event />,
        errorElement: <Error />,
      },
      {
        path: "/event/:id",
        element: <EventPage />,
        errorElement: <Error />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <Error />,
      },
      {
        path: "/event/create",
        element: <CreateEvent />,
        errorElement: <Error />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
