import React from "react";
import { Navigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../data/firebase";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>; // Show loading while checking auth state

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
