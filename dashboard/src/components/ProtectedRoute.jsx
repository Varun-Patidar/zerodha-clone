import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/auth/verify",
          {
            withCredentials: true,
          }
        );

        if (response.data.status) {
          setAuthenticated(true);
        }
      } catch (error) {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return authenticated ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;