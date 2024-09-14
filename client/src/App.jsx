import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return "Loading...";
  }

  return user ? (
    <main className="">
      <Navbar/>
      <Outlet />
    </main>
  ) : (
    <Navigate to="/login" />
  );
};

export default App;
