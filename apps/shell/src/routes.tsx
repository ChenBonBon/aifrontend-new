import type { ReactNode } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";
import { useUserStore } from "./store/user";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const NotFoundOrLogin = () => {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Error404 />;
};

export const appRouter = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
  { path: "*", element: <NotFoundOrLogin /> },
]);
