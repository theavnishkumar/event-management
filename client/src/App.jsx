import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";

const App = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return "Loading...";
  }

  return user ? (
    <main className="">
      <Outlet />
    </main>
  ) : (
    <Navigate to="/login" />
  );
};

export default App;
